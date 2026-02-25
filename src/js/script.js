// ============================================================
//  Struktur file:
//
//  src/js/
//  ├── script.js          ← (ini) entry point
//  ├── data/
//  │   └── products.js    ← semua data produk
//  ├── modules/
//  │   ├── cart.js        ← keranjang belanja & checkout WhatsApp
//  │   ├── wishlist.js    ← favorit produk
//  │   ├── ui.js          ← render produk, modal, toast
//  │   ├── filter.js      ← filter, sort, search
//  │   └── theme.js       ← dark / light mode
//  └── utils/
//      └── helpers.js     ← CONFIG, state, utils (format, debounce, storage)
//
// ============================================================

// ============================================================
//  Entry point aplikasi Toko Ludonanzak
// ============================================================

import { PRODUCTS } from './data/products.js';
import { Tema }     from './modules/theme.js';
import { Cart }     from './modules/cart.js';
import { Wishlist } from './modules/wishlist.js';
import { UI }       from './modules/ui.js';
import { Filter }   from './modules/filter.js';

function mulaiAplikasi() {
  Tema.init();
  Cart.init();
  Wishlist.init();
  UI.pasangNavigasi();

  const namaFile = window.location.pathname.split('/').pop().replace('.html', '');

  // Halaman kategori produk → tampilkan produk + filter
  if (PRODUCTS[namaFile]) {
    Filter.init(namaFile, Cart, Wishlist);
  }

  // Halaman utama (index) → tampilkan banner, featured, diskon
  if (namaFile === 'index' || namaFile === '') {
    UI.renderHomepageSections();
  }

  console.log('🛍️ Toko Ludonanzak berhasil dimuat!');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mulaiAplikasi);
} else {
  mulaiAplikasi();
}

// Ekspos ke scope global agar inline onclick bisa berjalan
window.Cart     = Cart;
window.Wishlist = Wishlist;
window.UI       = UI;
window.Filter   = Filter;

window.TampilProduk   = Filter;
window.ProductDisplay = Filter;