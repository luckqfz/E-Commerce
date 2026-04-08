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
// HELPER: Build star rating HTML
// ============================================================
function buildStarRating(produk) {
  const hash = produk.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const rawScore = 3.5 + (hash % 30) / 20;
  const score = Math.min(5, Math.round(rawScore * 10) / 10);
  const reviewCount = 40 + (hash % 220);

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(score)) {
      stars.push(`<span class="star full"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>`);
    } else if (i === Math.ceil(score) && score % 1 >= 0.4) {
      stars.push(`<span class="star half"><svg viewBox="0 0 24 24"><defs><linearGradient id="hg${produk.id}"><stop offset="50%" stop-color="#f59e0b"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#hg${produk.id})" stroke="#d1d5db" stroke-width="1.5"/></svg></span>`);
    } else {
      stars.push(`<span class="star empty"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>`);
    }
  }

  return { html: stars.join(''), score, reviewCount };
}


// ============================================================
// HELPER: Lazy load images (fade-in saat masuk viewport)
// ============================================================
let _lazyObserver = null;

function initLazyImages(container) {
  const imgs = (container || document).querySelectorAll('img[loading="lazy"]');
  if (!imgs.length) return;

  // Tambahkan kelas .loaded saat gambar selesai dimuat
  imgs.forEach(img => {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load',  () => img.classList.add('loaded'), { once: true });
      img.addEventListener('error', () => img.classList.add('loaded'), { once: true });
    }
  });
}


// ============================================================
// MINI CARD (homepage)
// ============================================================
function buildMiniCard(produk, index = 0) {
  const delay = (index * 0.06).toFixed(2);
  return `
    <div class="mini-product-card anim-fade-up" style="--delay:${delay}s">
      <div class="mini-card-image-wrapper">
        <img src="${produk.gambar}" alt="${produk.nama}" class="mini-card-image"
             loading="lazy" decoding="async"
             onerror="this.src='https://via.placeholder.com/200?text=No+Image'">
        ${produk.diskon ? `<span class="mini-discount-badge">-${produk.diskon}%</span>` : ''}
        <div class="mini-card-overlay">
          <button class="mini-overlay-btn" onclick='Cart.tambah(${JSON.stringify(produk).replace(/'/g, "&#39;")}, event)'>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Keranjang
          </button>
          <button class="mini-overlay-btn mini-overlay-buy" onclick='Cart.checkoutLangsung(${JSON.stringify(produk).replace(/'/g, "&#39;")})'>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><path d="M3 12h15"/></svg>
            Beli
          </button>
        </div>
      </div>
      <div class="mini-card-content">
        <div class="mini-card-name">${produk.nama}</div>
        ${buildHargaHTML(produk)}
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

    grid.innerHTML = state.filteredProducts.map(produk => {
      const rating = buildStarRating(produk);
      return `
      <div class="product-card">
        <div class="product-image-wrapper">
          <img src="${produk.gambar}" alt="${produk.nama}" class="product-image"
               loading="lazy" decoding="async"
               onerror="this.src='https://via.placeholder.com/300?text=No+Image'">

          ${produk.diskon ? `<span class="product-discount-badge">-${produk.diskon}%</span>` : ''}

          <button class="wishlist-btn ${Wishlist.adaDiFavorit(produk.id) ? 'active' : ''}"
                  data-product-id="${produk.id}"
                  aria-label="${Wishlist.adaDiFavorit(produk.id) ? 'Hapus dari favorit' : 'Tambah ke favorit'}"
                  aria-pressed="${Wishlist.adaDiFavorit(produk.id)}"
                  onclick='Wishlist.toggle(${JSON.stringify(produk).replace(/'/g, "&#39;")}); event.stopPropagation();'>
            ❤️
          </button>

          <button class="quick-view-btn"
                  onclick='UI.tampilkanQuickView(${JSON.stringify(produk).replace(/'/g, "&#39;")})'>
            Quick View
          </button>
        </div>

        <div class="product-content">
          <h3 class="product-name">${produk.nama}</h3>
          <div class="product-rating">
            <div class="star-group">${rating.html}</div>
            <span class="rating-score">${rating.score.toFixed(1)}</span>
            <span class="rating-count">(${rating.reviewCount})</span>
          </div>
          ${buildHargaHTML(produk)}
          <div class="product-actions">
            <button class="btn btn-primary"
                    onclick='Cart.tambah(${JSON.stringify(produk).replace(/'/g, "&#39;")}, event); event.stopPropagation();'>
              <span>Keranjang</span>
            </button>
            <button class="btn btn-checkout"
                    onclick='Cart.checkoutLangsung(${JSON.stringify(produk).replace(/'/g, "&#39;")}); event.stopPropagation();'>
              <span>Beli</span>
            </button>
          </div>
        </div>
      </div>
    `}).join('');

    // Aktifkan lazy load fade-in untuk gambar yang baru dirender
    initLazyImages(grid);
  },

  /**
   * tampilkanQuickView — Buka modal popup dengan detail produk.
   */
  tampilkanQuickView(produk) {
    const modal  = document.getElementById('quickViewModal');
    const konten = document.getElementById('quickViewContent');

    if (!modal || !konten) return;

    const rating = buildStarRating(produk);
    const kategoriLabel = produk._kategori || (produk.id?.split('-')[0] || '');

    const tags = [];
    if (produk.diskon) tags.push(`Diskon ${produk.diskon}%`);
    if (produk.populer) tags.push('Populer');
    if (produk.harga < 100000) tags.push('Harga Terjangkau');
    if (produk.harga >= 500000) tags.push('Premium');
    tags.push('Original');

    konten.innerHTML = `
      <div class="qv-grid">
        <div class="qv-image-wrapper">
          <img src="${produk.gambar}" alt="${produk.nama}" class="qv-image loaded"
               decoding="async"
               onerror="this.src='https://via.placeholder.com/400?text=No+Image'">
          ${produk.diskon ? `<span class="qv-discount-badge">-${produk.diskon}% OFF</span>` : ''}
          <span class="qv-zoom-hint">Hover to zoom</span>
        </div>
        <div class="qv-details">
          ${kategoriLabel ? `<div class="qv-category">${kategoriLabel}</div>` : ''}
          <h2 class="qv-title">${produk.nama}</h2>

          <div class="qv-rating">
            <div class="star-group">${rating.html}</div>
            <span class="rating-score">${rating.score.toFixed(1)}</span>
            <span class="qv-rating-text">&nbsp;·&nbsp; ${rating.reviewCount} ulasan</span>
          </div>

          <div class="qv-price-row">
            ${buildHargaHTML(produk, 'large')}
          </div>

          <p class="qv-description">${produk.deskripsi}</p>

          <div class="qv-tags">
            ${tags.map(t => `<span class="qv-tag">${t}</span>`).join('')}
          </div>

          <div class="qv-actions">
            <div class="qv-actions-row">
              <button class="btn btn-secondary"
                      onclick='Cart.tambah(${JSON.stringify(produk).replace(/'/g, "&#39;")}, event)'>
                Keranjang
              </button>
              <button class="btn btn-primary"
                      onclick='Cart.checkoutLangsung(${JSON.stringify(produk).replace(/'/g, "&#39;")})'>
                Beli Langsung
              </button>
            </div>
            <button class="btn btn-secondary"
                    style="width:100%"
                    onclick='Wishlist.toggle(${JSON.stringify(produk).replace(/'/g, "&#39;")});
                             this.textContent = Wishlist.adaDiFavorit("${produk.id}") ? "Tersimpan di Favorit" : "Simpan ke Favorit";'>
              ${window.Wishlist?.adaDiFavorit(produk.id) ? 'Tersimpan di Favorit' : 'Simpan ke Favorit'}
            </button>
            <div class="qv-guarantee">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Checkout aman via WhatsApp · Respon cepat
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');

    // Fokus ke modal untuk aksesibilitas
    setTimeout(() => {
      const closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }, 100);
  },

  /**
   * renderHomepageSections — Render featured products dan diskon section.
   */
  renderHomepageSections() {
    const featuredEl = document.getElementById('featuredSection');
    const diskonEl   = document.getElementById('diskonSection');

    if (featuredEl) {
      const featured = getFeaturedProducts().slice(0, 8);
      featuredEl.innerHTML = `
        <div class="kontainer">
          <div class="section-header anim-fade-up">
            <span class="section-tag">Pilihan Kami</span>
            <h2 class="section-title">Produk Pilihan Terbaik</h2>
          </div>
          <div class="mini-products-grid">
            ${featured.map((p, i) => buildMiniCard(p, i)).join('')}
          </div>
        </div>
      `;
      initLazyImages(featuredEl);
    }

    if (diskonEl) {
      const diskonList = getDiscountedProducts().slice(0, 8);
      diskonEl.innerHTML = `
        <div class="kontainer">
          <div class="section-header anim-fade-up">
            <span class="section-tag">Penawaran Terbatas</span>
            <h2 class="section-title">Sedang Diskon Sekarang</h2>
          </div>
          <div class="mini-products-grid">
            ${diskonList.map((p, i) => buildMiniCard(p, i)).join('')}
          </div>
        </div>
      `;
      initLazyImages(diskonEl);
    }

    setTimeout(() => this._initScrollReveal(), 50);
  },

  _initScrollReveal() {
    const targets = document.querySelectorAll('.anim-fade-up:not(.revealed)');
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    targets.forEach(el => observer.observe(el));
  },

  /**
   * pasangNavigasi — Mobile menu, efek scroll navbar, tutup quick view.
   */
  pasangNavigasi() {
    Sound.preloadAll();

    const tombolMenu = document.getElementById('menuToggle');
    const menu       = document.getElementById('mobileMenu');
    if (tombolMenu && menu) {
      tombolMenu.addEventListener('click', () => {
        tombolMenu.classList.toggle('active');
        menu.classList.toggle('active');
      });
    }

    document.querySelectorAll('.desktop-link, .mobile-link, .cat-link').forEach(link => {
      link.addEventListener('click', () => Sound.tabSwitch());
    });

    const navbar         = document.getElementById('navbar');
    const categoryNavbar = document.getElementById('categoryNavbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 100);
        if (categoryNavbar) categoryNavbar.classList.toggle('scrolled', window.pageYOffset > 10);
      });
    }

    const modal       = document.getElementById('quickViewModal');
    const tombolTutup = document.getElementById('closeQuickView');
    const overlay     = document.getElementById('quickViewOverlay');
    const tutupModal  = () => modal?.classList.remove('active');
    tombolTutup?.addEventListener('click', tutupModal);
    overlay?.addEventListener('click', tutupModal);

    // Tutup modal dengan Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal?.classList.contains('active')) {
        tutupModal();
      }
    });
  }
};