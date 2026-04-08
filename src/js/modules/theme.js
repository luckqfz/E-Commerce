// ============================================================
//  TOKO LUDONANZAK — TEMA (LIGHT / DARK MODE)
//  · 2026
//
//  Mengatur tampilan terang atau gelap.
//  Pilihan pengguna disimpan ke localStorage.
// ============================================================

import { CONFIG, state, utils } from '../utils/helpers.js';
import { Toast }                from './ui.js';

const SVG_MOON = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const SVG_SUN  = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

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
    if (!ikon) return;

    const isDark   = state.theme === 'dark';
    const hasSVG   = !!ikon.querySelector('svg');

    if (hasSVG || ikon.innerHTML.trim().startsWith('<svg')) {
      // Halaman yang pakai SVG icon (index.html)
      ikon.innerHTML = isDark ? SVG_SUN : SVG_MOON;
    } else {
      // Halaman yang pakai emoji (game.html, dll.)
      ikon.textContent = isDark ? '☀️' : '🌙';
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