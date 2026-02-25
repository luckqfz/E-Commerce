// ============================================================
//  Mengelola: tambah, hapus, ubah jumlah, hitung total,
//  checklist barang, dan checkout via WhatsApp.
//  Data disimpan di localStorage.
// ============================================================

import { CONFIG, state, utils } from '../utils/helpers.js';
import { Toast }                from './ui.js';
import { hargaSetelahDiskon }   from '../data/products.js';
import { Sound }                from '../utils/sound.js';

export const Cart = {

  // Set berisi ID produk yang di-checklist untuk checkout
  _checkedIds: new Set(),

  /** Muat isi keranjang dari localStorage saat halaman dibuka */
  init() {
    const tersimpan = utils.muatDariStorage(CONFIG.storageKeys.cart);
    state.cart = tersimpan || [];
    // Semua item default ter-centang
    this._checkedIds = new Set(state.cart.map(i => i.id));
    this.perbaruiBadge();
    this.pasangEvent();
  },

  /** Animasi terbang dari tombol ke ikon keranjang */
  animasiTerbang(event) {
    const ikonKeranjang = document.getElementById('cartBtn');
    if (!ikonKeranjang || !event) return;

    const sumber = (event.currentTarget || event.target).getBoundingClientRect();
    const tujuan = ikonKeranjang.getBoundingClientRect();

    const bola = document.createElement('div');
    bola.classList.add('fly-to-cart');
    bola.textContent = '🛒';

    bola.style.left = `${sumber.left + sumber.width / 2}px`;
    bola.style.top  = `${sumber.top  + sumber.height / 2}px`;

    const deltaX = tujuan.left + tujuan.width  / 2 - (sumber.left + sumber.width  / 2);
    const deltaY = tujuan.top  + tujuan.height / 2 - (sumber.top  + sumber.height / 2);
    bola.style.setProperty('--fly-x', `${deltaX}px`);
    bola.style.setProperty('--fly-y', `${deltaY}px`);

    document.body.appendChild(bola);
    bola.addEventListener('animationend', () => bola.remove());

    setTimeout(() => {
      ikonKeranjang.classList.add('cart-bounce');
      ikonKeranjang.addEventListener(
        'animationend',
        () => ikonKeranjang.classList.remove('cart-bounce'),
        { once: true }
      );
    }, 650);
  },

  /**
   * tambah — Masukkan produk ke keranjang.
   * Menyimpan hargaDiskon agar total selalu akurat.
   */
  tambah(produk, event) {
    const sudahAda = state.cart.find(item => item.id === produk.id);

    if (sudahAda) {
      sudahAda.quantity += 1;
      Toast.success(`Jumlah ${produk.nama} ditambahkan`);
      Sound.addToCart();
    } else {
      const hargaBayar = hargaSetelahDiskon(produk);
      state.cart.push({
        ...produk,
        hargaBayar,            // harga setelah diskon, dipakai saat hitung total
        quantity: 1,
        ditambahkanPada: Date.now()
      });
      this._checkedIds.add(produk.id);  // default ter-centang
      Toast.success(`${produk.nama} ditambahkan ke keranjang`);
      Sound.addToCart();
    }

    if (event) this.animasiTerbang(event);

    this.simpan();
    this.perbaruiBadge();
    this.render();
  },

  /** Hapus satu item dari keranjang */
  hapus(idProduk) {
    state.cart = state.cart.filter(item => item.id !== idProduk);
    this._checkedIds.delete(idProduk);
    this.simpan();
    this.perbaruiBadge();
    this.render();
    Toast.info('Produk dihapus dari keranjang');
    Sound.removeItem();
  },

  /** Tambah/kurangi jumlah. Jika 0 → hapus */
  ubahJumlah(idProduk, perubahan) {
    const item = state.cart.find(item => item.id === idProduk);
    if (!item) return;

    item.quantity += perubahan;

    if (item.quantity <= 0) {
      this.hapus(idProduk);
    } else {
      if (perubahan > 0) Sound.addToCart();
      else Sound.removeItem();
      this.simpan();
      this.render();
    }
  },

  /** Toggle centang/batal centang satu item */
  toggleCheck(idProduk) {
    if (this._checkedIds.has(idProduk)) {
      this._checkedIds.delete(idProduk);
    } else {
      this._checkedIds.add(idProduk);
    }
    this.render();
  },

  /** Centang / batal centang semua sekaligus */
  toggleCheckAll(centang) {
    if (centang) {
      state.cart.forEach(item => this._checkedIds.add(item.id));
    } else {
      this._checkedIds.clear();
    }
    this.render();
  },

  /** Kosongkan seluruh isi keranjang */
  kosongkan() {
    state.cart = [];
    this._checkedIds.clear();
    this.simpan();
    this.perbaruiBadge();
    this.render();
    Toast.info('Keranjang dikosongkan');
    Sound.clearCart();
  },

  /** Hitung total harga item yang ter-centang saja */
  hitungTotal() {
    return state.cart
      .filter(item => this._checkedIds.has(item.id))
      .reduce((total, item) => {
        const harga = item.hargaBayar ?? item.harga;
        return total + harga * item.quantity;
      }, 0);
  },

  /** Hitung total semua item tanpa filter */
  hitungTotalSemua() {
    return state.cart.reduce((total, item) => {
      const harga = item.hargaBayar ?? item.harga;
      return total + harga * item.quantity;
    }, 0);
  },

  simpan() {
    utils.simpanKeStorage(CONFIG.storageKeys.cart, state.cart);
  },

  perbaruiBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
      const totalItem = state.cart.reduce((sum, item) => sum + item.quantity, 0);
      badge.textContent = totalItem;
      badge.classList.toggle('active', totalItem > 0);
    }
  },

  /** Render ulang daftar produk di dalam modal keranjang */
  render() {
    const konten     = document.getElementById('cartContent');
    const footer     = document.getElementById('cartFooter');
    const totalHarga = document.getElementById('cartTotalPrice');
    const selectedCount = document.getElementById('cartSelectedCount');

    if (!konten) return;

    if (state.cart.length === 0) {
      konten.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">🛍️</span>
          <p>Keranjang masih kosong</p>
        </div>
      `;
      if (footer) footer.style.display = 'none';
      return;
    }

    const semuaCentang = state.cart.every(item => this._checkedIds.has(item.id));
    const adaCentang   = state.cart.some(item => this._checkedIds.has(item.id));

    konten.innerHTML = `
      <div class="cart-select-all">
        <label class="cart-checkbox-label">
          <input type="checkbox" class="cart-checkbox"
                 id="checkAll"
                 ${semuaCentang ? 'checked' : ''}
                 onchange="Cart.toggleCheckAll(this.checked)">
          <span class="cart-checkbox-custom"></span>
          <span>Pilih Semua (${state.cart.length} item)</span>
        </label>
      </div>
      <div class="cart-items-list">
        ${state.cart.map(item => {
          const checked   = this._checkedIds.has(item.id);
          const hargaBayar = item.hargaBayar ?? item.harga;
          const adaDiskon  = item.diskon && item.diskon > 0;
          return `
            <div class="cart-item ${checked ? 'checked' : 'unchecked'}">
              <label class="cart-checkbox-label item-check">
                <input type="checkbox" class="cart-checkbox"
                       ${checked ? 'checked' : ''}
                       onchange="Cart.toggleCheck('${item.id}')">
                <span class="cart-checkbox-custom"></span>
              </label>
              <img src="${item.gambar}" alt="${item.nama}" class="cart-item-image"
                   onerror="this.src='https://via.placeholder.com/80?text=No+Image'">
              <div class="cart-item-details">
                <div class="cart-item-name">${item.nama}</div>
                <div class="cart-item-price">
                  ${adaDiskon
                    ? `<span class="cart-price-original">Rp ${utils.formatRupiah(item.harga)}</span>
                       <span class="cart-price-final">Rp ${utils.formatRupiah(hargaBayar)}</span>
                       <span class="cart-discount-tag">-${item.diskon}%</span>`
                    : `<span class="cart-price-final">Rp ${utils.formatRupiah(hargaBayar)}</span>`
                  }
                </div>
                <div class="cart-item-controls">
                  <button class="qty-btn" onclick="Cart.ubahJumlah('${item.id}', -1)">−</button>
                  <span class="qty-value">${item.quantity}</span>
                  <button class="qty-btn" onclick="Cart.ubahJumlah('${item.id}', 1)">+</button>
                  <button class="remove-btn" onclick="Cart.hapus('${item.id}')">×</button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    if (footer) footer.style.display = adaCentang ? 'block' : 'none';
    if (totalHarga) {
      const total = this.hitungTotal();
      const jumlahDipilih = state.cart.filter(i => this._checkedIds.has(i.id))
                                      .reduce((s, i) => s + i.quantity, 0);
      totalHarga.textContent = `Rp ${utils.formatRupiah(total)}`;
      if (selectedCount) selectedCount.textContent = `(${jumlahDipilih} item dipilih)`;
    }
  },

  pasangEvent() {
    const tombolKeranjang = document.getElementById('cartBtn');
    const modalKeranjang  = document.getElementById('cartModal');
    const tombolTutup     = document.getElementById('closeCart');
    const overlay         = document.getElementById('cartOverlay');
    const tombolCheckout  = document.getElementById('checkoutBtn');

    if (tombolKeranjang && modalKeranjang) {
      tombolKeranjang.addEventListener('click', () => {
        modalKeranjang.classList.add('active');
        this.render();
      });
    }

    const tutupModal = () => modalKeranjang?.classList.remove('active');
    tombolTutup?.addEventListener('click', tutupModal);
    overlay?.addEventListener('click', tutupModal);

    if (tombolCheckout) tombolCheckout.addEventListener('click', () => this.checkout());
  },

  /**
   * checkout — Kirim hanya item yang ter-centang ke WhatsApp.
   */
  checkout() {
    const dipilih = state.cart.filter(item => this._checkedIds.has(item.id));

    if (dipilih.length === 0) {
      Toast.error('Pilih minimal satu produk untuk checkout');
      return;
    }

    let pesan = '*Halo, saya ingin memesan:*%0A%0A';

    dipilih.forEach((item, index) => {
      const hargaBayar = item.hargaBayar ?? item.harga;
      const subtotal   = hargaBayar * item.quantity;
      pesan += `${index + 1}. ${item.nama}`;
      if (item.diskon) pesan += ` *(Diskon ${item.diskon}%)*`;
      if (item.quantity > 1) pesan += ` x${item.quantity}`;
      pesan += `%0A   Rp ${utils.formatRupiah(hargaBayar)}`;
      if (item.quantity > 1) pesan += ` = Rp ${utils.formatRupiah(subtotal)}`;
      pesan += '%0A%0A';
    });

    pesan += `*Total: Rp ${utils.formatRupiah(this.hitungTotal())}*%0A%0A`;
    pesan += 'Terima kasih! 🙏';

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${pesan}`, '_blank');
    Toast.success('Mengarahkan ke WhatsApp...');
    Sound.checkout();
  },

  /**
   * checkoutLangsung — Beli 1 produk langsung tanpa ke keranjang.
   */
  checkoutLangsung(produk) {
    const hargaBayar = hargaSetelahDiskon(produk);
    let pesan = `*Halo, saya ingin membeli:*%0A%0A`;
    pesan += `1. ${produk.nama}`;
    if (produk.diskon) pesan += ` *(Diskon ${produk.diskon}%)*`;
    pesan += `%0A   Rp ${utils.formatRupiah(hargaBayar)}%0A%0A`;
    pesan += `*Total: Rp ${utils.formatRupiah(hargaBayar)}*%0A%0A`;
    pesan += 'Terima kasih! 🙏';
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${pesan}`, '_blank');
    Toast.success('Mengarahkan ke WhatsApp...');
    Sound.checkout();
  }
};