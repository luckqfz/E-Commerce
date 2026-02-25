// ============================================================
//  TOKO LUDONANZAK — FUNGSI BANTUAN (UTILS)
//  · 2026
//
//  Berisi:
//  - CONFIG  : pengaturan global aplikasi
//  - state   : status aplikasi yang berubah saat interaksi
//  - utils   : fungsi bantu (format, debounce, storage)
// ============================================================


// ------------------------------------------------------------
// KONFIGURASI GLOBAL
// ------------------------------------------------------------
export const CONFIG = {
  whatsappNumber: "6285695318450",

  storageKeys: {
    cart:     'ludonanzak_cart',
    wishlist: 'ludonanzak_wishlist',
    theme:    'ludonanzak_theme'
  },

  animations: {
    duration: 300,
    easing: 'ease-in-out'
  }
};


// ------------------------------------------------------------
// STATUS APLIKASI (STATE)
// Tidak disimpan ke localStorage — selalu reset saat refresh.
// ------------------------------------------------------------
export const state = {
  cart:             [],        // isi keranjang belanja saat ini
  wishlist:         [],        // daftar produk favorit saat ini
  theme:            'light',   // tema aktif: 'light' atau 'dark'
  currentCategory:  '',        // kategori halaman yang sedang dibuka
  filteredProducts: [],        // produk yang tampil setelah filter/sort
  searchQuery:      '',        // kata kunci pencarian dari search bar
  activeFilter:     'all',     // filter aktif: 'all' | 'populer' | 'murah'
  sortBy:           'default', // urutan: 'default' | 'name-asc' | dll
  viewMode:         'grid'     // mode tampilan: 'grid' atau 'list'
};


// ------------------------------------------------------------
// FUNGSI BANTUAN
// ------------------------------------------------------------
export const utils = {

  /**
   * formatRupiah — Mengubah angka menjadi format Rupiah
   * Contoh: 23000000 → "23.000.000"
   */
  formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID').format(angka);
  },

  /**
   * debounce — Menunda eksekusi fungsi sampai pengguna
   * berhenti mengetik selama 'tunggu' milidetik.
   */
  debounce(fungsi, tunggu) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fungsi(...args), tunggu);
    };
  },

  /**
   * simpanKeStorage — Menyimpan data ke localStorage browser.
   */
  simpanKeStorage(kunci, data) {
    try {
      localStorage.setItem(kunci, JSON.stringify(data));
    } catch (e) {
      console.error('Gagal menyimpan ke storage:', e);
    }
  },

  /**
   * muatDariStorage — Mengambil data dari localStorage.
   * Mengembalikan null jika data tidak ditemukan.
   */
  muatDariStorage(kunci) {
    try {
      const data = localStorage.getItem(kunci);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Gagal memuat dari storage:', e);
      return null;
    }
  }
};