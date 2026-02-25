// ============================================================
//  TOKO LUDONANZAK — TEMA (LIGHT / DARK MODE)
//  · 2026
//
//  Mengatur tampilan terang atau gelap.
//  Pilihan pengguna disimpan ke localStorage.
// ============================================================

import { CONFIG, state, utils } from '../utils/helpers.js';
import { Toast }                from './ui.js';

export const Tema = {

  /** Muat tema tersimpan saat halaman pertama kali dibuka */
  init() {
    const temaTersimpan = utils.muatDariStorage(CONFIG.storageKeys.theme);
    state.theme = temaTersimpan || 'light';
    this.terapkan();
    this.pasangToggle();
  },

  /** Terapkan tema ke atribut HTML dan ganti ikon tombol */
  terapkan() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const ikon = document.querySelector('#themeToggle .theme-icon');
    if (ikon) {
      ikon.textContent = state.theme === 'dark' ? '☀️' : '🌙';
    }
  },

  /** Switch tema dan simpan pilihan ke localStorage */
  toggle() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    this.terapkan();
    utils.simpanKeStorage(CONFIG.storageKeys.theme, state.theme);
    Toast.info(`Mode ${state.theme === 'dark' ? 'Gelap' : 'Terang'} aktif`);
  },

  /** Pasang event click pada tombol toggle tema di navbar */
  pasangToggle() {
    const tombol = document.getElementById('themeToggle');
    if (tombol) tombol.addEventListener('click', () => this.toggle());
  }
};