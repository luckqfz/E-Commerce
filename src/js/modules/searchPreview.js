// ============================================================
//  SEARCH PREVIEW — Toko Ludonanzak
//  Dropdown preview saat mengetik di search bar.
//  Mencari di semua kategori produk.
//
//  Cara pakai:
//    import { SearchPreview } from './modules/searchPreview.js';
//    SearchPreview.init(Cart);
// ============================================================

import { PRODUCTS, hargaSetelahDiskon } from '../data/products.js';
import { utils }                        from '../utils/helpers.js';

// Flatten semua produk + tambahkan field kategori
const SEMUA_PRODUK = (() => {
  const LABEL_KATEGORI = {
    elektronik: '💻 Elektronik',
    bahan_baku: '🥬 Bahan Baku',
    game:       '🎮 Game',
    diy_give:   '🎁 DIY Give',
    buku:       '📖 Buku',
  };

  const hasil = [];
  for (const [key, list] of Object.entries(PRODUCTS)) {
    (list || []).forEach(p => {
      hasil.push({ ...p, _kategori: LABEL_KATEGORI[key] || key });
    });
  }
  return hasil;
})();

// Maksimal hasil yang ditampilkan sekaligus
const MAX_HASIL = 7;

export const SearchPreview = {
  _cart:        null,
  _dropdown:    null,
  _input:       null,
  _focusIndex:  -1,
  _hasilSaat:   [],

  /** Inisialisasi — panggil sekali saat app dimuat */
  init(Cart) {
    this._cart  = Cart;
    this._input = document.getElementById('searchInput');
    if (!this._input) return;

    this._buatDropdown();
    this._pasangEvent();
  },

  // ── Buat elemen dropdown sekali ────────────────────────────
  _buatDropdown() {
    const wrapper = this._input.closest('.search-wrapper');
    if (!wrapper) return;

    const dropdown = document.createElement('div');
    dropdown.id        = 'searchPreview';
    dropdown.className = 'search-preview';
    dropdown.setAttribute('role', 'listbox');
    dropdown.setAttribute('aria-label', 'Hasil pencarian');
    wrapper.appendChild(dropdown);

    this._dropdown = dropdown;
  },

  // ── Pasang event listeners ──────────────────────────────────
  _pasangEvent() {
    const input    = this._input;
    const cariDebounced = utils.debounce(q => this._cari(q), 220);

    input.addEventListener('input', e => {
      const q = e.target.value.trim();
      if (q.length === 0) {
        this._sembunyikan();
        return;
      }
      cariDebounced(q);
    });

    // Keyboard navigation
    input.addEventListener('keydown', e => this._handleKeydown(e));

    // Tutup saat klik di luar
    document.addEventListener('click', e => {
      if (!this._dropdown?.contains(e.target) && e.target !== input) {
        this._sembunyikan();
      }
    });

    // Buka kembali jika input sudah ada isi & di-focus
    input.addEventListener('focus', () => {
      if (input.value.trim().length > 0 && this._hasilSaat.length > 0) {
        this._tampilkan();
      }
    });
  },

  // ── Cari produk ─────────────────────────────────────────────
  _cari(query) {
    const q = query.toLowerCase();

    const cocok = SEMUA_PRODUK.filter(p =>
      p.nama.toLowerCase().includes(q) ||
      (p._kategori || '').toLowerCase().includes(q)
    ).slice(0, MAX_HASIL);

    this._hasilSaat = cocok;
    this._focusIndex = -1;
    this._render(cocok, query);
  },

  // ── Render dropdown ─────────────────────────────────────────
  _render(hasil, query) {
    const dd = this._dropdown;
    if (!dd) return;

    if (hasil.length === 0) {
      dd.innerHTML = `
        <div class="search-preview-header">
          <span>Hasil Pencarian</span>
        </div>
        <div class="search-no-results">
          <span class="search-no-results-icon">🔍</span>
          <p>Produk tidak ditemukan</p>
          <span>Coba kata kunci lain</span>
        </div>
      `;
    } else {
      const itemsHTML = hasil.map((p, i) => this._buildItemHTML(p, query, i)).join('');
      dd.innerHTML = `
        <div class="search-preview-header">
          <span>Hasil Pencarian</span>
          <span class="search-preview-count">${hasil.length} produk</span>
        </div>
        <div class="search-preview-list" role="listbox">
          ${itemsHTML}
        </div>
        <div class="search-preview-footer">
          <div class="search-preview-hints">
            <span class="search-hint">
              <kbd>↑</kbd><kbd>↓</kbd> navigasi
            </span>
            <span class="search-hint">
              <kbd>Enter</kbd> buka
            </span>
            <span class="search-hint">
              <kbd>Esc</kbd> tutup
            </span>
          </div>
          <button class="search-close-btn" onclick="SearchPreview._sembunyikan()">Tutup ×</button>
        </div>
      `;

      // Pasang event click pada setiap item
      dd.querySelectorAll('.search-result-item').forEach((el, i) => {
        el.addEventListener('click', e => {
          // Jangan trigger jika yang diklik tombol aksi
          if (e.target.closest('.search-action-btn')) return;
          this._pilihItem(hasil[i]);
        });
        el.addEventListener('mouseenter', () => {
          this._focusIndex = i;
          this._perbaruiFokus();
        });
      });

      // Tombol tambah ke keranjang
      dd.querySelectorAll('.search-action-cart').forEach((btn, i) => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          this._cart?.tambah(hasil[i], e);
          this._sembunyikan();
        });
      });

      // Tombol beli langsung
      dd.querySelectorAll('.search-action-buy').forEach((btn, i) => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          this._cart?.checkoutLangsung(hasil[i]);
          this._sembunyikan();
        });
      });
    }

    this._tampilkan();
    this._input.classList.add('has-results');
  },

  // ── Build HTML satu item ─────────────────────────────────────
  _buildItemHTML(produk, query, index) {
    const hargaDiskon = hargaSetelahDiskon(produk);
    const adaDiskon   = produk.diskon && produk.diskon > 0;
    const namaHL      = this._highlight(produk.nama, query);

    return `
      <div class="search-result-item" role="option" data-index="${index}" tabindex="-1">
        <div class="search-result-img-wrap">
          <img
            class="search-result-img"
            src="${produk.gambar}"
            alt="${produk.nama}"
            onerror="this.src='https://via.placeholder.com/56?text=?'"
            loading="lazy"
          >
          ${adaDiskon ? `<span class="search-result-discount">-${produk.diskon}%</span>` : ''}
        </div>

        <div class="search-result-info">
          <div class="search-result-category">${produk._kategori}</div>
          <div class="search-result-name">${namaHL}</div>
          <div class="search-result-price">
            <span class="search-result-price-final">Rp ${utils.formatRupiah(hargaDiskon)}</span>
            ${adaDiskon
              ? `<span class="search-result-price-original">Rp ${utils.formatRupiah(produk.harga)}</span>`
              : ''}
          </div>
        </div>

        <div class="search-result-actions">
          <button class="search-action-btn search-action-cart" title="Tambah ke Keranjang">🛒</button>
          <button class="search-action-btn search-action-buy"  title="Beli Langsung">⚡</button>
        </div>
      </div>
    `;
  },

  // ── Highlight kata yang cocok ─────────────────────────────────
  _highlight(teks, query) {
    if (!query) return teks;
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return teks.replace(re, '<mark>$1</mark>');
  },

  // ── Keyboard navigation ──────────────────────────────────────
  _handleKeydown(e) {
    if (!this._dropdown?.classList.contains('visible')) return;

    const items = this._dropdown.querySelectorAll('.search-result-item');
    const total = items.length;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._focusIndex = (this._focusIndex + 1) % total;
        this._perbaruiFokus();
        break;

      case 'ArrowUp':
        e.preventDefault();
        this._focusIndex = (this._focusIndex - 1 + total) % total;
        this._perbaruiFokus();
        break;

      case 'Enter':
        e.preventDefault();
        if (this._focusIndex >= 0 && this._hasilSaat[this._focusIndex]) {
          this._pilihItem(this._hasilSaat[this._focusIndex]);
        }
        break;

      case 'Escape':
        this._sembunyikan();
        this._input.blur();
        break;
    }
  },

  // ── Perbarui style fokus keyboard ──────────────────────────
  _perbaruiFokus() {
    const items = this._dropdown?.querySelectorAll('.search-result-item') || [];
    items.forEach((el, i) => {
      el.classList.toggle('focused', i === this._focusIndex);
    });

    if (this._focusIndex >= 0 && items[this._focusIndex]) {
      items[this._focusIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  },

  // ── Peta kategori → file halaman ─────────────────────────────
  _kategoriKeHalaman(kategoriLabel) {
    const map = {
      '💻 Elektronik': 'elektronik',
      '🥬 Bahan Baku': 'bahan_baku',
      '🎮 Game':       'game',
      '🎁 DIY Give':   'diy_give',
      '📖 Buku':       'buku',
    };
    return map[kategoriLabel] || null;
  },

  // ── Saat item dipilih (klik / Enter) ────────────────────────
  _pilihItem(produk) {
    this._sembunyikan();
    if (this._input) this._input.value = '';

    const halamanTujuan = this._kategoriKeHalaman(produk._kategori);
    const namaFileSaat  = window.location.pathname.split('/').pop().replace('.html', '');
    const sudahDiHalaman = halamanTujuan === namaFileSaat ||
                           (namaFileSaat === '' && halamanTujuan === 'index');

    if (sudahDiHalaman) {
      // ── Sudah di halaman yang benar → scroll & highlight ──
      this._scrollKeProduK(produk.id);
    } else {
      // ── Beda halaman → navigasi dulu, bawa ID via hash ──
      const url = `${halamanTujuan}.html#produk-${produk.id}`;
      window.location.href = url;
    }
  },

  // ── Scroll ke kartu produk & beri efek highlight ────────────
  _scrollKeProduK(idProduk) {
    // Coba cari kartu berdasarkan data-id atau konten
    // Kartu dirender oleh UI.renderProduk — tidak ada data-id bawaan,
    // jadi kita pakai onclick attribute yang mengandung id produk
    let kartu = document.querySelector(`[data-product-id="${idProduk}"]`)
                  ?.closest('.product-card');

    if (!kartu) {
      // Fallback: cari tombol wishlist yang punya data-product-id
      const wishBtn = document.querySelector(`.wishlist-btn[data-product-id="${idProduk}"]`);
      if (wishBtn) kartu = wishBtn.closest('.product-card');
    }

    if (!kartu) {
      // Produk tidak tampil (mungkin terfilter) — reset filter dulu
      if (window.Filter) {
        // Reset search & filter
        if (this._input) {
          this._input.value = '';
          this._input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        // Tunggu render ulang lalu cari lagi
        setTimeout(() => this._scrollKeProduK(idProduk), 400);
        return;
      }
    }

    if (kartu) {
      kartu.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Flash highlight animation
      kartu.classList.add('product-highlight');
      setTimeout(() => kartu.classList.remove('product-highlight'), 2000);
    }
  },

  // ── Tampilkan dropdown ───────────────────────────────────────
  _tampilkan() {
    this._dropdown?.classList.add('visible');
  },

  // ── Sembunyikan dropdown ─────────────────────────────────────
  _sembunyikan() {
    this._dropdown?.classList.remove('visible');
    this._input?.classList.remove('has-results');
    this._focusIndex = -1;
  }
};