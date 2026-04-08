// ============================================================
//  Bertanggung jawab atas semua logika penyaringan produk:
//  - pencarian teks dari search bar
//  - tombol filter (semua / populer / murah)
//  - dropdown urutan (nama / harga / default)
//  - toggle tampilan grid ↔ list
//  - persistensi filter via sessionStorage
// ============================================================

import { PRODUCTS } from '../data/products.js';
import { state }    from '../utils/helpers.js';
import { utils }    from '../utils/helpers.js';
import { UI }       from './ui.js';

// Kunci sessionStorage untuk persisten filter per-kategori
const SESSION_KEY = 'ludonanzak_filter';

export const Filter = {
  produkSekarang: [],    // daftar produk mentah untuk kategori ini
  produkUrutan:   [],    // salinan urutan asli untuk sort "default"

  /**
   * init — Dipanggil sekali dengan nama kategori halaman (misal 'game').
   * Memuat data produk lalu pasang semua event listener.
   */
  init(kategori, Cart, Wishlist) {
    state.currentCategory  = kategori;
    this.produkSekarang    = PRODUCTS[kategori] || [];
    this.produkUrutan      = [...this.produkSekarang];
    state.filteredProducts = [...this.produkSekarang];

    this._Cart     = Cart;
    this._Wishlist = Wishlist;

    // Pulihkan state filter dari sessionStorage
    this._muatFilterSession(kategori);

    this.pasangPencarian();
    this.pasangFilter();
    this.pasangUrutan();
    this.pasangToggleTampilan();
    this.render();

    // Sembunyikan skeleton loading setelah 500ms
    setTimeout(() => {
      const loading = document.getElementById('loadingState');
      if (loading) loading.style.display = 'none';
    }, 500);
  },

  /** Panggil UI.renderProduk dengan referensi modul yang tersimpan */
  render() {
    UI.renderProduk(this._Cart, this._Wishlist);
  },

  // ── Persistensi filter via sessionStorage ──────────────────

  /** Simpan filter & sort aktif ke sessionStorage */
  _simpanFilterSession() {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({
        kategori:     state.currentCategory,
        activeFilter: state.activeFilter,
        sortBy:       state.sortBy,
        viewMode:     state.viewMode,
      }));
    } catch (e) { /* abaikan */ }
  },

  /** Pulihkan filter dari sessionStorage jika kategori cocok */
  _muatFilterSession(kategori) {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved.kategori !== kategori) return;

      // Terapkan state yang tersimpan
      state.activeFilter = saved.activeFilter || 'all';
      state.sortBy       = saved.sortBy       || 'default';
      state.viewMode     = saved.viewMode     || 'grid';

      // Sinkronkan UI tombol filter
      const filterBtn = document.querySelector(`.filter-btn[data-filter="${state.activeFilter}"]`);
      if (filterBtn) {
        document.querySelectorAll('.filter-btn').forEach(t => t.classList.remove('active'));
        filterBtn.classList.add('active');
      }

      // Sinkronkan dropdown sort
      const sortSel = document.getElementById('sortSelect');
      if (sortSel) sortSel.value = state.sortBy;

      // Sinkronkan toggle view
      const viewBtn = document.querySelector(`.view-btn[data-view="${state.viewMode}"]`);
      if (viewBtn) {
        document.querySelectorAll('.view-btn').forEach(t => t.classList.remove('active'));
        viewBtn.classList.add('active');
        const grid = document.getElementById('productsGrid');
        if (grid) grid.classList.toggle('list-view', state.viewMode === 'list');
      }
    } catch (e) { /* abaikan */ }
  },

  // ── Hitung ambang "murah" berdasarkan median harga kategori ─

  /**
   * _hitungAmbangMurah — Mengembalikan nilai median harga
   * dari semua produk di kategori aktif, sehingga filter "murah"
   * selalu relevan di kategori apapun (elektronik mahal, bahan baku murah).
   */
  _hitungAmbangMurah() {
    const hargaSorted = [...this.produkSekarang]
      .map(p => p.harga)
      .sort((a, b) => a - b);
    const mid = Math.floor(hargaSorted.length / 2);
    // Untuk array genap: rata-rata dua nilai tengah
    if (hargaSorted.length % 2 === 0) {
      return (hargaSorted[mid - 1] + hargaSorted[mid]) / 2;
    }
    return hargaSorted[mid];
  },

  /**
   * pasangPencarian — Dengarkan input search bar.
   * Pakai debounce 300ms agar tidak filter tiap huruf.
   */
  pasangPencarian() {
    const inputCari = document.getElementById('searchInput');
    if (!inputCari) return;

    const prosesCari = utils.debounce((e) => {
      state.searchQuery = e.target.value.toLowerCase();
      this.filterProduk();
    }, 300);

    inputCari.addEventListener('input', prosesCari);
  },

  /**
   * pasangFilter — Dengarkan klik tombol filter.
   */
  pasangFilter() {
    document.querySelectorAll('.filter-btn').forEach(tombol => {
      tombol.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        state.activeFilter = e.target.dataset.filter;
        this._simpanFilterSession();
        this.filterProduk();
      });
    });
  },

  /**
   * pasangUrutan — Dengarkan perubahan dropdown sort.
   */
  pasangUrutan() {
    const pilihanUrut = document.getElementById('sortSelect');
    if (!pilihanUrut) return;

    pilihanUrut.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      this._simpanFilterSession();
      this.urutProduk();
    });
  },

  /**
   * pasangToggleTampilan — Toggle grid ↔ list view.
   */
  pasangToggleTampilan() {
    document.querySelectorAll('.view-btn').forEach(tombol => {
      tombol.addEventListener('click', (e) => {
        document.querySelectorAll('.view-btn').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');

        state.viewMode = e.target.dataset.view;
        const grid = document.getElementById('productsGrid');
        if (grid) grid.classList.toggle('list-view', state.viewMode === 'list');
        this._simpanFilterSession();
      });
    });
  },

  /**
   * filterProduk — Terapkan filter pencarian + tombol filter,
   * lalu langsung panggil urutProduk.
   */
  filterProduk() {
    let hasil = [...this.produkSekarang];

    // Filter 1: kata kunci search bar
    if (state.searchQuery) {
      hasil = hasil.filter(p => p.nama.toLowerCase().includes(state.searchQuery));
    }

    // Filter 2: tombol filter aktif
    if (state.activeFilter === 'populer') {
      hasil = hasil.filter(p => p.populer);
    } else if (state.activeFilter === 'murah') {
      // Gunakan median harga kategori — skalabel untuk semua kategori
      const ambang = this._hitungAmbangMurah();
      hasil = hasil.filter(p => p.harga <= ambang);
    }

    state.filteredProducts = hasil;
    this.urutProduk();
  },

  /**
   * urutProduk — Urutkan produk yang sudah difilter
   * sesuai pilihan dropdown, lalu render hasilnya.
   */
  urutProduk() {
    let terurut = [...state.filteredProducts];

    switch (state.sortBy) {
      case 'default': {
        const urutanAsli = this.produkUrutan.map(p => p.id);
        terurut.sort((a, b) => urutanAsli.indexOf(a.id) - urutanAsli.indexOf(b.id));
        break;
      }
      case 'name-asc':   terurut.sort((a, b) => a.nama.localeCompare(b.nama)); break;
      case 'name-desc':  terurut.sort((a, b) => b.nama.localeCompare(a.nama)); break;
      case 'price-asc':  terurut.sort((a, b) => a.harga - b.harga);           break;
      case 'price-desc': terurut.sort((a, b) => b.harga - a.harga);           break;
    }

    state.filteredProducts = terurut;
    this.render();
  }
};