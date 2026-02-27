// ============================================================
//  Berisi:
//  - Toast    : notifikasi pop-up (success, error, info)
//  - UI       : render kartu produk, modal quick view, navigasi,
//               homepage sections (featured + diskon)
// ============================================================

import { state }   from '../utils/helpers.js';
import { utils }   from '../utils/helpers.js';
import { hargaSetelahDiskon, getFeaturedProducts, getDiscountedProducts } from '../data/products.js';
import { Sound }   from '../utils/sound.js';


// ============================================================
// TOAST NOTIFICATION
// ============================================================
export const Toast = {

  tampilkan(pesan, jenis = 'info', judul = '') {
    const wadah = document.getElementById('toastContainer');
    if (!wadah) return;

    const toast = document.createElement('div');
    toast.className = `toast ${jenis}`;

    const ikon = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };

    toast.innerHTML = `
      <div class="toast-icon">${ikon[jenis] || ikon.info}</div>
      <div class="toast-content">
        ${judul ? `<div class="toast-title">${judul}</div>` : ''}
        <div class="toast-message">${pesan}</div>
      </div>
    `;

    wadah.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  success(pesan, judul = 'Berhasil!') { this.tampilkan(pesan, 'success', judul); },
  error(pesan,   judul = 'Error!')    { this.tampilkan(pesan, 'error',   judul); },
  info(pesan,    judul = '')          { this.tampilkan(pesan, 'info',    judul); }
};


// ============================================================
// HELPER: Build harga HTML (dengan atau tanpa diskon)
// ============================================================
function buildHargaHTML(produk, fontSize = 'normal') {
  const hargaAsli    = produk.harga;
  const hargaDiskon  = hargaSetelahDiskon(produk);
  const adaDiskon    = produk.diskon && produk.diskon > 0;
  const sizeClass    = fontSize === 'large' ? 'price-large' : '';

  if (adaDiskon) {
    return `
      <div class="price-wrapper ${sizeClass}">
        <span class="price-original">Rp ${utils.formatRupiah(hargaAsli)}</span>
        <span class="price-final">Rp ${utils.formatRupiah(hargaDiskon)}</span>
        <span class="discount-badge">-${produk.diskon}%</span>
      </div>
    `;
  }
  return `
    <div class="price-wrapper ${sizeClass}">
      <span class="price-final">Rp ${utils.formatRupiah(hargaAsli)}</span>
    </div>
  `;
}


// ============================================================
// HELPER: Build kartu mini produk (untuk homepage sections)
// ============================================================
function buildMiniCard(produk) {
  return `
    <div class="mini-product-card">
      <div class="mini-card-image-wrapper">
        <img src="${produk.gambar}" alt="${produk.nama}" class="mini-card-image"
             onerror="this.src='https://via.placeholder.com/200?text=No+Image'">
        ${produk.diskon ? `<span class="mini-discount-badge">-${produk.diskon}%</span>` : ''}
      </div>
      <div class="mini-card-content">
        <div class="mini-card-name">${produk.nama}</div>
        ${buildHargaHTML(produk)}
        <div class="mini-card-actions">
          <button class="btn btn-sm btn-primary"
                  onclick='Cart.tambah(${JSON.stringify(produk).replace(/'/g, "&#39;")}, event)'>
            🛒
          </button>
          <button class="btn btn-sm btn-checkout"
                  onclick='Cart.checkoutLangsung(${JSON.stringify(produk).replace(/'/g, "&#39;")})'>
            ⚡ Beli
          </button>
        </div>
      </div>
    </div>
  `;
}


// ============================================================
// UI — RENDER PRODUK & NAVIGASI
// ============================================================
export const UI = {

  /**
   * renderProduk — Hasilkan HTML kartu produk dan masukkan ke DOM.
   */
  renderProduk(Cart, Wishlist) {
    const grid        = document.getElementById('productsGrid');
    const pesanKosong = document.getElementById('emptyResults');

    if (!grid) return;

    if (state.filteredProducts.length === 0) {
      grid.style.display = 'none';
      if (pesanKosong) pesanKosong.style.display = 'block';
      return;
    }

    grid.style.display = 'grid';
    if (pesanKosong) pesanKosong.style.display = 'none';

    grid.innerHTML = state.filteredProducts.map(produk => `
      <div class="product-card">
        <div class="product-image-wrapper">
          <img src="${produk.gambar}" alt="${produk.nama}" class="product-image"
               onerror="this.src='https://via.placeholder.com/300?text=No+Image'">

          ${produk.diskon ? `<span class="product-discount-badge">-${produk.diskon}%</span>` : ''}

          <button class="wishlist-btn ${Wishlist.adaDiFavorit(produk.id) ? 'active' : ''}"
                  data-product-id="${produk.id}"
                  onclick='Wishlist.toggle(${JSON.stringify(produk).replace(/'/g, "&#39;")}); event.stopPropagation();'>
            ❤️
          </button>

          <button class="quick-view-btn"
                  onclick='UI.tampilkanQuickView(${JSON.stringify(produk).replace(/'/g, "&#39;")})'>
            👁️ Quick View
          </button>
        </div>

        <div class="product-content">
          <h3 class="product-name">${produk.nama}</h3>
          ${buildHargaHTML(produk)}
          <div class="product-actions">
            <button class="btn btn-primary"
                    onclick='Cart.tambah(${JSON.stringify(produk).replace(/'/g, "&#39;")}, event); event.stopPropagation();'>
              <span>🛒</span>
              <span>Tambah</span>
            </button>
            <button class="btn btn-checkout"
                    onclick='Cart.checkoutLangsung(${JSON.stringify(produk).replace(/'/g, "&#39;")}); event.stopPropagation();'>
              <span>Beli Langsung</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  /**
   * tampilkanQuickView — Buka modal popup dengan detail produk.
   */
  tampilkanQuickView(produk) {
    const modal  = document.getElementById('quickViewModal');
    const konten = document.getElementById('quickViewContent');

    if (!modal || !konten) return;

    konten.innerHTML = `
      <div class="qv-grid">
        <div class="qv-image-wrapper">
          <img src="${produk.gambar}" alt="${produk.nama}" class="qv-image"
               onerror="this.src='https://via.placeholder.com/400?text=No+Image'">
          ${produk.diskon ? `<span class="qv-discount-badge">-${produk.diskon}% OFF</span>` : ''}
        </div>
        <div class="qv-details">
          <h2 class="qv-title">${produk.nama}</h2>
          <div>
            ${buildHargaHTML(produk, 'large')}
          </div>
          <p class="qv-description">
            ${produk.deskripsi}
          </p>
          <div class="qv-actions">
            <button class="btn btn-secondary"
                    onclick='Cart.tambah(${JSON.stringify(produk).replace(/'/g, "&#39;")}, event)'>
              🛒 Tambah ke Keranjang
            </button>
            <button class="btn btn-primary"
                    onclick='Cart.checkoutLangsung(${JSON.stringify(produk).replace(/'/g, "&#39;")})'>
              ⚡ Beli Langsung
            </button>
            <button class="btn btn-secondary"
                    onclick='Wishlist.toggle(${JSON.stringify(produk).replace(/'/g, "&#39;")});
                             this.textContent = Wishlist.adaDiFavorit("${produk.id}") ? "❤️ Favorit" : "🤍 Favorit";'>
              ${window.Wishlist?.adaDiFavorit(produk.id) ? '❤️' : '🤍'} Favorit
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
  },

  /**
   * renderHomepageSections — Render banner, featured products,
   * dan diskon section di halaman index.html.
   * Dipanggil dari script.js jika ada elemen #homepageSections.
   */
  renderHomepageSections() {
    const bannerEl   = document.getElementById('promoBanner');
    const featuredEl = document.getElementById('featuredSection');
    const diskonEl   = document.getElementById('diskonSection');

    // === PROMO BANNER ===
    if (bannerEl) {
      bannerEl.innerHTML = `
        <div class="promo-banner">
          <div class="promo-banner-slides" id="bannerSlides">
            <div class="promo-slide slide-1 active">
              <div class="promo-slide-content">
                <span class="promo-tag">🔥 FLASH SALE</span>
                <h2>Diskon Hingga <span class="promo-highlight">40%</span></h2>
                <p>Buruan sebelum kehabisan — stok terbatas!</p>
                <a href="game.html" class="btn btn-promo">Belanja Sekarang →</a>
              </div>
              <div class="promo-slide-deco">🎮</div>
            </div>
            <div class="promo-slide slide-2">
              <div class="promo-slide-content">
                <span class="promo-tag">⚡ SPESIAL HARI INI</span>
                <h2>Elektronik <span class="promo-highlight">Terlengkap</span></h2>
                <p>Gadget terbaru dengan harga kompetitif</p>
                <a href="elektronik.html" class="btn btn-promo">Lihat Koleksi →</a>
              </div>
              <div class="promo-slide-deco">💻</div>
            </div>
            <div class="promo-slide slide-3">
              <div class="promo-slide-content">
                <span class="promo-tag">🎁 KADO SPESIAL</span>
                <h2>DIY Give <span class="promo-highlight">Unik</span></h2>
                <p>Hadiah personal yang tak terlupakan</p>
                <a href="diy_give.html" class="btn btn-promo">Temukan Hadiah →</a>
              </div>
              <div class="promo-slide-deco">🎁</div>
            </div>
          </div>
          <div class="banner-dots" id="bannerDots">
            <span class="dot active" data-idx="0"></span>
            <span class="dot" data-idx="1"></span>
            <span class="dot" data-idx="2"></span>
          </div>
          <button class="banner-arrow banner-prev" id="bannerPrev">‹</button>
          <button class="banner-arrow banner-next" id="bannerNext">›</button>
        </div>
      `;
      this._initBannerSlider();
    }

    // === FEATURED PRODUCTS ===
    if (featuredEl) {
      const featured = getFeaturedProducts().slice(0, 8);
      featuredEl.innerHTML = `
        <div class="kontainer">
          <div class="section-header">
            <span class="section-tag">⭐ Pilihan Kami</span>
            <h2 class="section-title">Produk Pilihan Terbaik</h2>
          </div>
          <div class="mini-products-grid">
            ${featured.map(p => buildMiniCard(p)).join('')}
          </div>
        </div>
      `;
    }

    // === DISKON SECTION ===
    if (diskonEl) {
      const diskonList = getDiscountedProducts().slice(0, 8);
      diskonEl.innerHTML = `
        <div class="kontainer">
          <div class="section-header">
            <span class="section-tag">🔥 Penawaran Terbatas</span>
            <h2 class="section-title">Sedang Diskon Sekarang</h2>
          </div>
          <div class="mini-products-grid">
            ${diskonList.map(p => buildMiniCard(p)).join('')}
          </div>
        </div>
      `;
    }
  },

  _initBannerSlider() {
    let current = 0;
    const slides = document.querySelectorAll('.promo-slide');
    const dots   = document.querySelectorAll('.dot');

    const goTo = (idx) => {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    };

    document.getElementById('bannerNext')?.addEventListener('click', () => goTo(current + 1));
    document.getElementById('bannerPrev')?.addEventListener('click', () => goTo(current - 1));
    dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.idx)));

    // Auto-advance every 4s
    setInterval(() => goTo(current + 1), 4000);
  },

  /**
   * pasangNavigasi — Mobile menu, efek scroll navbar, tutup quick view.
   */
  pasangNavigasi() {
    // Preload semua suara saat navigasi pertama kali dipasang
    Sound.preloadAll();

    const tombolMenu = document.getElementById('menuToggle');
    const menu       = document.getElementById('mobileMenu');
    if (tombolMenu && menu) {
      tombolMenu.addEventListener('click', () => {
        tombolMenu.classList.toggle('active');
        menu.classList.toggle('active');
      });
    }

    // Suara saat pindah halaman / tab navigasi
    document.querySelectorAll('.desktop-link, .mobile-link').forEach(link => {
      link.addEventListener('click', () => Sound.tabSwitch());
    });

    const navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 100);
      });
    }

    const modal       = document.getElementById('quickViewModal');
    const tombolTutup = document.getElementById('closeQuickView');
    const overlay     = document.getElementById('quickViewOverlay');
    const tutupModal  = () => modal?.classList.remove('active');
    tombolTutup?.addEventListener('click', tutupModal);
    overlay?.addEventListener('click', tutupModal);
  }
};