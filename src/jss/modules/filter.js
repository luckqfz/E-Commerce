// ============================================================
//  Bertanggung jawab atas semua logika penyaringan produk:
//  - pencarian teks dari search bar
//  - tombol filter (semua / populer / murah)
//  - dropdown urutan (nama / harga / default)
//  - toggle tampilan grid ↔ list
// ============================================================

import { PRODUCTS } from '../data/products.js';
import { state }    from '../utils/helpers.js';
import { utils }    from '../utils/helpers.js';
import { UI }       from './ui.js';

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
    // Simpan urutan asli agar sort "default" bisa mengembalikannya
    this.produkUrutan      = [...this.produkSekarang];
    state.filteredProducts = [...this.produkSekarang];

    // Simpan referensi Cart & Wishlist untuk diteruskan ke UI.renderProduk
    this._Cart     = Cart;
    this._Wishlist = Wishlist;

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
   * Tandai tombol aktif lalu jalankan filterProduk.
   */
  pasangFilter() {
    document.querySelectorAll('.filter-btn').forEach(tombol => {
      tombol.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        state.activeFilter = e.target.dataset.filter;
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
      hasil = hasil.filter(p => p.harga < 500000); // di bawah Rp 500.000
    }

    state.filteredProducts = hasil;
    this.urutProduk();
  },

  /**
   * urutProduk — Urutkan produk yang sudah difilter
   * sesuai pilihan dropdown, lalu render hasilnya.
   *
   * Untuk 'default': kembalikan ke urutan asli dari products.js,
   * dengan tetap menghormati filter aktif.
   */
  urutProduk() {
    let terurut = [...state.filteredProducts];

    switch (state.sortBy) {
      case 'default': {
        // Urutkan ulang sesuai posisi asli di produkUrutan
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