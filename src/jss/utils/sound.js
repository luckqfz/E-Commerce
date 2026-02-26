// ============================================================
//  SOUND MANAGER — Toko Ludonanzak
//  Memutar efek suara dari folder src/assets/sounds/
//  
//  Cara pakai:
//    import { Sound } from '../utils/sound.js';
//    Sound.addToCart();
// ============================================================

const BASE_PATH = 'src/assets/sounds/';

// Preload semua audio agar langsung siap saat dipanggil
const _cache = {};

function getAudio(name, file) {
  if (!_cache[name]) {
    _cache[name] = new Audio(`${BASE_PATH}${file}`);
    _cache[name].preload = 'auto';
  }
  return _cache[name];
}

export const Sound = {
  /** Volume global 0.0 – 1.0 */
  volume: 0.5,

  /**
   * play — Memutar suara berdasarkan nama.
   * currentTime = 0 agar bisa diputar ulang cepat.
   */
  play(name) {
    const audio = _cache[name];
    if (!audio) return;
    audio.currentTime = 0;
    audio.volume = this.volume;
    audio.play().catch(() => {});  // abaikan autoplay-policy error
  },

  // ── Shortcut per-aksi ──────────────────────────────────────

  /** Saat produk ditambahkan ke keranjang */
  addToCart() {
    getAudio('addToCart', 'add-to-cart.mp3');
    this.play('addToCart');
  },

  /** Saat satu item dihapus dari keranjang */
  removeItem() {
    getAudio('removeItem', 'remove-item.mp3');
    this.play('removeItem');
  },

  /** Saat keranjang dikosongkan semua */
  clearCart() {
    getAudio('clearCart', 'clear-cart.mp3');
    this.play('clearCart');
  },

  /** Saat berpindah halaman / tab navigasi */
  tabSwitch() {
    getAudio('tabSwitch', 'tab-switch.mpeg');
    this.play('tabSwitch');
  },

  /** Saat checkout berhasil dikirim ke WhatsApp */
  checkout() {
    getAudio('checkout', 'checkout.mp3');
    this.play('checkout');
  },

  /** Preload semua file supaya tidak ada delay pertama kali */
  preloadAll() {
    getAudio('addToCart',  'add-to-cart.mp3');
    getAudio('removeItem', 'remove-item.mp3');
    getAudio('clearCart',  'clear-cart.mp3');
    getAudio('tabSwitch',  'tab-switch.mpeg');
    getAudio('checkout',   'checkout.mp3');
  }
};