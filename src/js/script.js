// ============================================================
//  Entry point — Toko Ludonanzak
//  + Page Loader  + Scroll Reveal  + Search Preview
//  + Scroll To Top Button
// ============================================================

import { PRODUCTS }       from './data/products.js';
import { Tema }           from './modules/theme.js';
import { Cart }           from './modules/cart.js';
import { Wishlist }       from './modules/wishlist.js';
import { UI }             from './modules/ui.js';
import { Filter }         from './modules/filter.js';
import { SearchPreview }  from './modules/searchPreview.js';

// ── Page Loader ───────────────────────────────────────────────
function jalankanLoader() {
  const loader = document.getElementById('pageLoader');
  const bar    = document.getElementById('loaderBar');
  if (!loader || !bar) return { loader: null };

  let progress = 0;
  const interval = setInterval(() => {
    const increment = progress < 70 ? Math.random() * 18 + 8 : Math.random() * 4;
    progress = Math.min(progress + increment, 89);
    bar.style.width = progress + '%';
  }, 120);

  return { interval, bar, loader };
}

function selesaikanLoader({ interval, bar, loader }) {
  if (!loader) return;
  clearInterval(interval);
  bar.style.width = '100%';
  bar.style.transition = 'width 1s ease';
  setTimeout(() => loader.classList.add('loaded'), 1000);
}

// ── Scroll Reveal ─────────────────────────────────────────────
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.welcome-card, .kartu-kategori, .feature-item, ' +
    '.section-header, .mini-product-card, .promo-banner'
  );

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.classList.add(`reveal-delay-${(i % 4) + 1}`);
  });

  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Cursor Glow (desktop only) ────────────────────────────────
function initCursorGlow() {
  if (window.matchMedia('(hover: none)').matches) return;

  const glow = document.createElement('div');
  glow.id = 'cursorGlow';
  glow.style.cssText = `
    position: fixed; pointer-events: none; z-index: 99998;
    width: 280px; height: 280px; border-radius: 50%;
    background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
  `;
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.opacity = '1';
  });
  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });

  (function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top  = glowY + 'px';
    requestAnimationFrame(animateGlow);
  })();
}

// ── Scroll To Top Button ───────────────────────────────────────
function initScrollToTop() {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Kembali ke atas');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Hash Scroll (setelah navigasi dari search) ────────────────
function initHashScroll() {
  const hash = window.location.hash;
  if (!hash.startsWith('#produk-')) return;

  const idProduk = hash.replace('#produk-', '');

  const coba = (attempt = 0) => {
    const wishBtn = document.querySelector(`.wishlist-btn[data-product-id="${idProduk}"]`);
    const kartu   = wishBtn?.closest('.product-card');

    if (kartu) {
      history.replaceState(null, '', window.location.pathname);

      setTimeout(() => {
        kartu.scrollIntoView({ behavior: 'smooth', block: 'center' });
        kartu.classList.add('product-highlight');
        setTimeout(() => kartu.classList.remove('product-highlight'), 2200);
      }, 150);
    } else if (attempt < 12) {
      setTimeout(() => coba(attempt + 1), 150);
    }
  };

  coba();
}

// ── Ambil nama halaman dengan aman (handle trailing slash) ────
function getNamaFile() {
  const raw = window.location.pathname
    .split('/')
    .pop()                    // ambil segmen terakhir
    .replace('.html', '')     // hapus ekstensi
    .trim();
  // Jika kosong (root URL "/") → anggap index
  return raw === '' ? 'index' : raw;
}

// ── Main App ──────────────────────────────────────────────────
function mulaiAplikasi() {
  const loaderCtx = jalankanLoader();

  Tema.init();
  Cart.init();
  Wishlist.init();
  UI.pasangNavigasi();

  // Inisialisasi search preview (semua halaman)
  SearchPreview.init(Cart);

  const namaFile = getNamaFile();

  // Halaman kategori produk
  if (namaFile !== 'index' && PRODUCTS[namaFile]) {
    Filter.init(namaFile, Cart, Wishlist);
  }

  // Halaman utama
  if (namaFile === 'index') {
    UI.renderHomepageSections();
  }

  const finalize = () => {
    selesaikanLoader(loaderCtx);
    initScrollReveal();
    initCursorGlow();
    initHashScroll();
    initScrollToTop();
  };

  if (document.readyState === 'complete') {
    finalize();
  } else {
    window.addEventListener('load', finalize);
  }

  console.log('🛍️ Toko Ludonanzak berhasil dimuat!');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mulaiAplikasi);
} else {
  mulaiAplikasi();
}

// Global expose for inline onclick & search close button
window.Cart          = Cart;
window.Wishlist      = Wishlist;
window.UI            = UI;
window.Filter        = Filter;
window.SearchPreview = SearchPreview;
window.PRODUCTS      = PRODUCTS;

window.TampilProduk   = Filter;
window.ProductDisplay = Filter;