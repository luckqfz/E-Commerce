// ============================================================
//  Tombol hati (❤️) di kartu produk menggunakan modul ini.
//  Data disimpan di localStorage.
// ============================================================

import { CONFIG, state, utils } from '../utils/helpers.js';
import { Toast }                from './ui.js';

export const Wishlist = {

  /** Muat daftar favorit dari localStorage saat halaman dibuka */
  init() {
    const tersimpan = utils.muatDariStorage(CONFIG.storageKeys.wishlist);
    state.wishlist = tersimpan || [];
    this.perbaruiBadge();
    this.pasangEvent();
  },

  /**
   * toggle — Tambah/hapus produk dari favorit.
   * Jika sudah ada → hapus. Jika belum → tambahkan.
   */
  toggle(produk) {
    const indeks = state.wishlist.findIndex(item => item.id === produk.id);

    if (indeks > -1) {
      state.wishlist.splice(indeks, 1);
      Toast.info(`${produk.nama} dihapus dari favorit`);
    } else {
      state.wishlist.push(produk);
      Toast.success(`${produk.nama} ditambahkan ke favorit`, '❤️');
    }

    this.simpan();
    this.perbaruiBadge();
    this.perbaruiTombol();
  },

  /** Cek apakah produk dengan ID tertentu sudah ada di favorit */
  adaDiFavorit(idProduk) {
    return state.wishlist.some(item => item.id === idProduk);
  },

  /** Simpan daftar favorit ke localStorage */
  simpan() {
    utils.simpanKeStorage(CONFIG.storageKeys.wishlist, state.wishlist);
  },

  /** Perbarui angka badge ikon hati di navbar */
  perbaruiBadge() {
    const badge = document.getElementById('wishlistBadge');
    if (badge) {
      badge.textContent = state.wishlist.length;
      badge.classList.toggle('active', state.wishlist.length > 0);
    }
  },

  /**
   * perbaruiTombol — Segarkan semua tombol hati di halaman
   * agar mencerminkan status favorit terkini.
   */
  perbaruiTombol() {
    document.querySelectorAll('.wishlist-btn').forEach(tombol => {
      const idProduk = tombol.dataset.productId;
      tombol.classList.toggle('active', this.adaDiFavorit(idProduk));
    });
  },

  /** Render ulang daftar produk favorit di modal wishlist */
  render() {
    const konten = document.getElementById('wishlistContent');
    if (!konten) return;

    if (state.wishlist.length === 0) {
      konten.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">💔</span>
          <p>Belum ada produk favorit</p>
        </div>
      `;
      return;
    }

    konten.innerHTML = state.wishlist.map(item => `
      <div class="cart-item">
        <img src="${item.gambar}" alt="${item.nama}" class="cart-item-image"
             onerror="this.src='https://via.placeholder.com/80?text=No+Image'">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.nama}</div>
          <div class="cart-item-price">Rp ${utils.formatRupiah(item.harga)}</div>
          <div class="cart-item-controls" style="margin-top: 8px;">
            <button class="btn btn-primary"
                    onclick="Cart.tambah(${JSON.stringify(item).replace(/"/g, '&quot;')}); Wishlist.render();">
              <span>+ Keranjang</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  /** Pasang semua event listener untuk modal favorit */
  pasangEvent() {
    const tombolWishlist = document.getElementById('wishlistBtn');
    const modalWishlist  = document.getElementById('wishlistModal');
    const tombolTutup    = document.getElementById('closeWishlist');
    const overlay        = document.getElementById('wishlistOverlay');

    if (tombolWishlist && modalWishlist) {
      tombolWishlist.addEventListener('click', () => {
        modalWishlist.classList.add('active');
        this.render();
      });
    }

    const tutupModal = () => modalWishlist?.classList.remove('active');
    tombolTutup?.addEventListener('click', tutupModal);
    overlay?.addEventListener('click', tutupModal);
  }
};