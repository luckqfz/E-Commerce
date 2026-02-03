// ==========================================
// TOKO LUDONANZAK - E-COMMERCE SCRIPT
// ==========================================

// ==========================================
// 1. KONFIGURASI DASAR
// ==========================================
const konfigurasi = {
  nomorWhatsApp: "6285695318450",
  
  // Diskon per kategori (0.85 = diskon 15%)
  diskon: {
    elektronik: 0.85,
    bahan_baku: 0.90,
    game: 0.95,
    diy_give: 0.90
  },
  
  // Toggle untuk mengaktifkan/menonaktifkan diskon
  diskonAktif: false,
  
  // Path file audio untuk efek suara
  audio: {
    tambahKeranjang: "../assets/sounds/add-to-cart.mp3",
    hapusItem: "../assets/sounds/remove-item.mp3",
    kosongkanKeranjang: "../assets/sounds/clear-cart.mp3",
    pindahTab: "../assets/sounds/tab-switch.mp3"
  }
};

// ==========================================
// 2. AUDIO PLAYER
// Mengelola efek suara aplikasi
// ==========================================
const audioPlayer = {
  sounds: {},
  
  // Memuat semua file audio saat aplikasi dimulai
  init() {
    Object.keys(konfigurasi.audio).forEach(key => {
      this.sounds[key] = new Audio(konfigurasi.audio[key]);
      this.sounds[key].preload = 'auto';
    });
  },
  
  // Memutar suara tertentu
  play(soundName) {
    if (this.sounds[soundName]) {
      const sound = this.sounds[soundName].cloneNode();
      sound.volume = 0.5;
      sound.play().catch(err => console.log('Audio play error:', err));
    }
  }
};

// ==========================================
// 3. DATA PRODUK
// Database produk untuk setiap kategori
// ==========================================
const dataProduk = {
  elektronik: [
    { nama: "Samsung S25 Ultra", harga: 15500000, gambar: "../assets/images/Elektronik/HPS25U.jpeg" },
    { nama: "iPhone 17 Pro Max", harga: 23900000, gambar: "../assets/images/Elektronik/HP17PM.jpeg" },
    { nama: "RedMagic 11 Pro", harga: 13000000, gambar: "../assets/images/Elektronik/HP11PRO.jpeg" },
    { nama: "Vivo X300 Pro", harga: 18500000, gambar: "../assets/images/Elektronik/HPX300PRO.jpeg" },
    { nama: "Huawei Pura 80 Ultra", harga: 2900000, gambar: "../assets/images/Elektronik/HP80ULTRA.jpeg" },
    { nama: "Lenovo LOQ 15", harga: 500000, gambar: "../assets/images/Elektronik/LPLOQ.jpeg" },
    { nama: "Asus TUF A15", harga: 750000, gambar: "../assets/images/Elektronik/LPTUF.jpeg" },
    { nama: "Lenovo Legion 5", harga: 350000, gambar: "../assets/images/Elektronik/LPLEGION.jpeg" },
    { nama: "Asus ROG Strix", harga: 1200000, gambar: "../assets/images/Elektronik/LPROG.jpeg" },
    { nama: "Macbook Pro M4 16''", harga: 900000, gambar: "../assets/images/Elektronik/LPMacbook.jpeg" },
    { nama: "Mechanical Keyboard", harga: 450000, gambar: "../assets/images/Elektronik/keyboard.jpg" },
    { nama: "Mouse Macro", harga: 650000, gambar: "../assets/images/Elektronik/mouse.jpg" },
    { nama: "Wireless Headset", harga: 400000, gambar: "../assets/images/Elektronik/headset.jpg" },
    { nama: "Microphone", harga: 850000, gambar: "../assets/images/Elektronik/mic.jpg" },
    { nama: "Speaker Stereo", harga: 1200000, gambar: "../assets/images/Elektronik/speaker.jpg" },
    { nama: "Webcam HD", harga: 3500000, gambar: "../assets/images/Elektronik/webcam.jpg" },
    { nama: "Kursi Gaming", harga: 300000, gambar: "../assets/images/Elektronik/kursi.jpeg" },
    { nama: "Deskmate", harga: 250000, gambar: "../assets/images/Elektronik/deskmate.jpg" },
    { nama: "Monitor 16''", harga: 5200000, gambar: "../assets/images/Elektronik/monitor.jpg" },
    { nama: "Monitor Arm", harga: 700000, gambar: "../assets/images/Elektronik/monitorarm.jpg" }
  ],
  
  bahan_baku: [
    { nama: "Kaldu Jamur 12 Sachet", harga: 450000, gambar: "../assets/images/bahanBaku/KALDUJAMUR.jpg" },
    { nama: "Masako 12 Sachet", harga: 850000, gambar: "../assets/images/bahanBaku/MASAKO.jpg" },
    { nama: "Sasa 12 Sachet", harga: 320000, gambar: "../assets/images/bahanBaku/SASA.jpg" },
    { nama: "Gula Pasir 1 Kg", harga: 75000, gambar: "../assets/images/bahanBaku/GULA.jpg" },
    { nama: "Gula Merah 1 Kg", harga: 180000, gambar: "../assets/images/bahanBaku/GULAMERAH.jpg" },
    { nama: "Jahe 500 Gram", harga: 580000, gambar: "../assets/images/bahanBaku/JAHE.jpg" },
    { nama: "Kemiri 500 Gram", harga: 650000, gambar: "../assets/images/bahanBaku/KEMIRI.jpg" },
    { nama: "Bawang Merah 1 Kg", harga: 420000, gambar: "../assets/images/bahanBaku/MERAH.jpg" },
    { nama: "Bawang Bombai 1 Kg", harga: 150000, gambar: "../assets/images/bahanBaku/BOMBAI.jpg" },
    { nama: "Bawang Putih 1 Kg", harga: 120000, gambar: "../assets/images/bahanBaku/PUTIH.jpg" },
    { nama: "Telur 1 Kg", harga: 280000, gambar: "../assets/images/bahanBaku/TELUR.jpg" },
    { nama: "Tepung Terigu 1 Kg", harga: 65000, gambar: "../assets/images/bahanBaku/TEPUNG.jpg" },
    { nama: "Tepung Sagu 1 Kg", harga: 95000, gambar: "../assets/images/bahanBaku/SAGU.jpg" },
    { nama: "Olive Oil 1 Liter", harga: 145000, gambar: "../assets/images/bahanBaku/OLIVEOIL.jpg" },
    { nama: "Parsley 500 Gram", harga: 250000, gambar: "../assets/images/bahanBaku/PARSLEY.jpg" },
    { nama: "Whip Cream 500 Gram", harga: 185000, gambar: "../assets/images/bahanBaku/WHIPCREAM.jpg" },
    { nama: "Spread Cheese 1 Box", harga: 110000, gambar: "../assets/images/bahanBaku/CHEESESPREAD.jpg" },
    { nama: "Butter 1 Box", harga: 380000, gambar: "../assets/images/bahanBaku/BUTTER.jpg" },
    { nama: "Kismis 1 Kg", harga: 720000, gambar: "../assets/images/bahanBaku/KISMIS.jpg" },
    { nama: "Chocolate 1 Box", harga: 480000, gambar: "../assets/images/bahanBaku/COKLATBAR.jpg" }
  ],
  
  game: [
    { nama: "Grand Theft Auto: V", harga: 699000, gambar: "../assets/images/Game/GTA5.jpg" },
    { nama: "Red Dead Redemption 2", harga: 879000, gambar: "../assets/images/Game/RDR2.jpg" },
    { nama: "Elden Ring", harga: 899000, gambar: "../assets/images/Game/EldenRing.jpg" },
    { nama: "Black Myth: Wukong", harga: 900000, gambar: "../assets/images/Game/BlackMythWukong.jpg" },
    { nama: "FarCry: 6", harga: 799000, gambar: "../assets/images/Game/Farcry6.jpg" },
    { nama: "Cyberpunk 2077", harga: 899000, gambar: "../assets/images/Game/CyberPunk2077.jpg" },
    { nama: "Assasin's Creed: Origins", harga: 399000, gambar: "../assets/images/Game/AssasinCreed.jpg" },
    { nama: "Hogwarts Legacy", harga: 899000, gambar: "../assets/images/Game/HogwartsLegacy.jpg" },
    { nama: "Marvel Spiderman: Remasted", harga: 900000, gambar: "../assets/images/Game/MarvelSpiderman.jpg" },
    { nama: "Marvel Spiderman: Miles Morales", harga: 750000, gambar: "../assets/images/Game/SpidermanMiles.jpg" },
    { nama: "Overcooked: 2", harga: 349000, gambar: "../assets/images/Game/Overcooked2.jpg" },
    { nama: "It Takes Two", harga: 470000, gambar: "../assets/images/Game/ItTakesTwo.jpg" },
    { nama: "Split Fiction", harga: 350000, gambar: "../assets/images/Game/SplitFiction.jpg" },
    { nama: "Raft: Survival", harga: 295000, gambar: "../assets/images/Game/Raft.jpg" },
    { nama: "The Forest", harga: 299000, gambar: "../assets/images/Game/TheForest.jpg" },
    { nama: "Subnautica", harga: 299000, gambar: "../assets/images/Game/Subnautica.jpg" },
    { nama: "EA: Sports FC 26", harga: 899000, gambar: "../assets/images/Game/EaSport.jpg" },
    { nama: "Minecraft", harga: 470000, gambar: "../assets/images/Game/Minecraft.jpg" },
    { nama: "Stardew Valley", harga: 199000, gambar: "../assets/images/Game/StardewValley.jpg" },
    { nama: "TheoTown", harga: 50000, gambar: "../assets/images/Game/TheoTown.jpg" }
  ],
  
  diy_give: [
    { nama: "Surprise Kado", harga: 450000, gambar: "../assets/images/DIY_Give/kado.jpg" },
    { nama: "Exploding Box", harga: 3500000, gambar: "../assets/images/DIY_Give/explodingbox.jpg" },
    { nama: "Flower Bouquet", harga: 250000, gambar: "../assets/images/DIY_Give/flowerbuket.jpg" },
    { nama: "Scrapbook", harga: 180000, gambar: "../assets/images/DIY_Give/scrapbook.jpg" },
    { nama: "Sketchbook", harga: 150000, gambar: "../assets/images/DIY_Give/sketchbook.jpg" },
    { nama: "Notebook", harga: 320000, gambar: "../assets/images/DIY_Give/notebook.jpg" },
    { nama: "Book Mark", harga: 320000, gambar: "../assets/images/DIY_Give/bookmark.jpg" },
    { nama: "Kit Krayon", harga: 95000, gambar: "../assets/images/DIY_Give/krayon.jpg" },
    { nama: "Kit Pensin Warna", harga: 85000, gambar: "../assets/images/DIY_Give/pensilwarna.jpg" },
    { nama: "Keychain Nama", harga: 45000, gambar: "../assets/images/DIY_Give/keychainname.jpg" },
    { nama: "Gelang", harga: 35000, gambar: "../assets/images/DIY_Give/gelang.jpg" },
    { nama: "Tumbler", harga: 280000, gambar: "../assets/images/DIY_Give/tumbler.jpg" },
    { nama: "Casing HP", harga: 420000, gambar: "../assets/images/DIY_Give/casehp.jpg" },
    { nama: "Dompet Mini", harga: 65000, gambar: "../assets/images/DIY_Give/dompet.jpg" },
    { nama: "Totebag Hand Painting", harga: 210000, gambar: "../assets/images/DIY_Give/totebag.jpg" },
    { nama: "Frame Foto", harga: 175000, gambar: "../assets/images/DIY_Give/frame.jpg" },
    { nama: "Kartu Ucapan", harga: 195000, gambar: "../assets/images/DIY_Give/kartuucapan.jpg" },
    { nama: "Candle", harga: 220000, gambar: "../assets/images/DIY_Give/lilin.jpg" },
    { nama: "Mini Camera", harga: 95000, gambar: "../assets/images/DIY_Give/minicamera.jpg" },
    { nama: "Mini Album", harga: 380000, gambar: "../assets/images/DIY_Give/minialbum.jpg" }
  ]
};

// ==========================================
// 4. VARIABEL GLOBAL
// Menyimpan state aplikasi
// ==========================================
let keranjangBelanja = [];      // Array untuk menyimpan produk di keranjang
let kategoriSaatIni = '';       // Kategori produk yang sedang ditampilkan
let diskonSaatIni = 1;          // Nilai diskon saat ini

// ==========================================
// 5. FUNGSI NAVIGASI & MENU
// ==========================================

// Toggle menu mobile (hamburger menu)
function toggleMenu() {
  const menuNav = document.getElementById('menuNavbar');
  if (menuNav) {
    menuNav.classList.toggle('aktif');
  }
}

// Menutup menu otomatis saat klik di luar
function tutupMenuOtomatis() {
  document.addEventListener('click', function(event) {
    const menuNav = document.getElementById('menuNavbar');
    const tombolToggle = document.querySelector('.tombol-toggle');
    
    if (!menuNav || !tombolToggle) return;
    
    // Cek apakah klik di dalam menu atau tombol toggle
    const klikDiDalam = menuNav.contains(event.target) || tombolToggle.contains(event.target);
    
    // Jika klik di luar dan menu aktif, tutup menu
    if (!klikDiDalam && menuNav.classList.contains('aktif')) {
      menuNav.classList.remove('aktif');
    }
  });
}

// ==========================================
// 6. FUNGSI TAB (Produk & Keranjang)
// ==========================================
function bukaTab(namaTab) {
  // 1. Sembunyikan semua tab
  const semuaKontenTab = document.querySelectorAll('.konten-tab');
  semuaKontenTab.forEach(konten => konten.classList.remove('aktif'));
  
  // 2. Hapus highlight dari semua tombol tab
  const semuaTombolTab = document.querySelectorAll('.tombol-tab');
  semuaTombolTab.forEach(tombol => tombol.classList.remove('aktif'));
  
  // 3. Tampilkan tab yang dipilih
  const kontenTab = document.getElementById(namaTab);
  if (kontenTab) kontenTab.classList.add('aktif');
  
  // 4. Highlight tombol tab yang aktif
  const tombolAktif = document.querySelector(`[onclick="bukaTab('${namaTab}')"]`);
  if (tombolAktif) tombolAktif.classList.add('aktif');
  
  // 5. Putar efek suara
  audioPlayer.play('pindahTab');
  
  // 6. Update tampilan keranjang jika tab keranjang dibuka
  if (namaTab === 'tabKeranjang') {
    tampilkanKeranjang();
  }
}

// ==========================================
// 7. FUNGSI KERANJANG - PENYIMPANAN
// ==========================================

// Simpan keranjang ke localStorage (penyimpanan browser)
function simpanKeranjang() {
  localStorage.setItem('keranjangBelanja', JSON.stringify(keranjangBelanja));
  updateBadgeKeranjang();
}

// Muat keranjang dari localStorage saat aplikasi dibuka
function muatKeranjang() {
  const keranjangTersimpan = localStorage.getItem('keranjangBelanja');
  if (keranjangTersimpan) {
    keranjangBelanja = JSON.parse(keranjangTersimpan);
  }
  updateBadgeKeranjang();
}

// Update badge (angka merah) di tombol keranjang
function updateBadgeKeranjang() {
  const badge = document.getElementById('badgeKeranjang');
  if (!badge) return;
  
  // Hitung total item di keranjang
  const totalItem = keranjangBelanja.reduce((total, item) => total + item.quantity, 0);
  
  if (totalItem > 0) {
    badge.textContent = totalItem;
    badge.style.display = 'block';
  } else {
    badge.style.display = 'none';
  }
}

// ==========================================
// 8. FUNGSI PRODUK - TAMPILAN
// ==========================================
function tampilkanProduk(kategori, diskon) {
  const kontainerProduk = document.getElementById('daftarProduk');
  if (!kontainerProduk) return;
  
  const produkKategori = dataProduk[kategori];
  if (!produkKategori) return;
  
  // Set kategori dan diskon saat ini
  kategoriSaatIni = kategori;
  diskonSaatIni = diskon;
  
  // Kosongkan kontainer
  kontainerProduk.innerHTML = '';
  
  // Loop setiap produk dan buat kartu produk
  produkKategori.forEach((produk, indeks) => {
    // Hitung harga setelah diskon
    const diskonEfektif = konfigurasi.diskonAktif ? diskon : 1;
    const hargaDiskon = Math.round(produk.harga * diskonEfektif);
    
    // Buat elemen kartu produk
    const kartuProduk = document.createElement('div');
    kartuProduk.className = 'kartu-produk';
    
    // Tampilkan harga (dengan atau tanpa diskon)
    let htmlHarga = '';
    if (konfigurasi.diskonAktif && diskon < 1) {
      htmlHarga = `
        <div class="harga-lama">Rp ${formatRupiah(produk.harga)}</div>
        <div class="harga-sekarang">Rp ${formatRupiah(hargaDiskon)}</div>
      `;
    } else {
      htmlHarga = `
        <div class="harga-sekarang">Rp ${formatRupiah(hargaDiskon)}</div>
      `;
    }
    
    // Isi konten kartu produk
    kartuProduk.innerHTML = `
      <img src="${produk.gambar}" alt="${produk.nama}" class="gambar-produk" loading="lazy">
      <h3 class="nama-produk">${produk.nama}</h3>
      ${htmlHarga}
      <button class="tombol btn-tambah-keranjang" data-index="${indeks}" data-kategori="${kategori}">
        Tambah ke Keranjang
      </button>
    `;
    
    kontainerProduk.appendChild(kartuProduk);
  });
}

// ==========================================
// 9. FUNGSI KERANJANG - MANIPULASI
// ==========================================

// Tambah produk ke keranjang
function tambahKeKeranjang(indeksProduk) {
  // Validasi input
  if (!kategoriSaatIni || !dataProduk[kategoriSaatIni]) {
    console.error('Kategori tidak valid');
    return;
  }
  
  const produk = dataProduk[kategoriSaatIni][indeksProduk];
  if (!produk) {
    console.error('Produk tidak ditemukan');
    return;
  }
  
  // Hitung harga dengan diskon
  const diskonEfektif = konfigurasi.diskonAktif ? diskonSaatIni : 1;
  const hargaDiskon = Math.round(produk.harga * diskonEfektif);
  
  // Cek apakah produk sudah ada di keranjang
  const indeksItemAda = keranjangBelanja.findIndex(item => 
    item.nama === produk.nama && item.kategori === kategoriSaatIni
  );
  
  if (indeksItemAda !== -1) {
    // Jika sudah ada, tambah quantity
    keranjangBelanja[indeksItemAda].quantity += 1;
  } else {
    // Jika belum ada, tambahkan item baru
    keranjangBelanja.push({
      nama: produk.nama,
      harga: produk.harga,
      hargaDiskon: hargaDiskon,
      kategori: kategoriSaatIni,
      quantity: 1
    });
  }
  
  simpanKeranjang();
  audioPlayer.play('tambahKeranjang');
  tampilkanKeranjang();
}

// Ubah jumlah (quantity) produk di keranjang
function ubahQuantity(indeks, perubahan) {
  if (indeks < 0 || indeks >= keranjangBelanja.length) return;
  
  keranjangBelanja[indeks].quantity += perubahan;
  
  // Hapus item jika quantity menjadi 0
  if (keranjangBelanja[indeks].quantity <= 0) {
    keranjangBelanja.splice(indeks, 1);
    audioPlayer.play('hapusItem');
  }
  
  simpanKeranjang();
  tampilkanKeranjang();
}

// Hapus produk dari keranjang
function hapusDariKeranjang(indeks) {
  keranjangBelanja.splice(indeks, 1);
  simpanKeranjang();
  audioPlayer.play('hapusItem');
  tampilkanKeranjang();
}

// Kosongkan seluruh keranjang
function kosongkanKeranjang() {
  if (confirm('Yakin ingin mengosongkan keranjang belanja?')) {
    keranjangBelanja = [];
    simpanKeranjang();
    audioPlayer.play('kosongkanKeranjang');
    tampilkanKeranjang();
  }
}

// Tampilkan isi keranjang
function tampilkanKeranjang() {
  const kontainerItem = document.getElementById('itemKeranjang');
  const kontainerTotal = document.getElementById('totalKeranjang');
  const tombolKosongkan = document.getElementById('tombolKosongkan');
  
  if (!kontainerItem || !kontainerTotal || !tombolKosongkan) return;
  
  // Jika keranjang kosong
  if (keranjangBelanja.length === 0) {
    kontainerItem.innerHTML = '<div class="keranjang-kosong">Keranjang masih kosong</div>';
    kontainerTotal.innerHTML = '';
    tombolKosongkan.classList.add('tersembunyi');
    return;
  }
  
  // Tampilkan tombol kosongkan
  tombolKosongkan.classList.remove('tersembunyi');
  kontainerItem.innerHTML = '';
  let totalHarga = 0;
  
  // Loop setiap item di keranjang
  keranjangBelanja.forEach((item, indeks) => {
    const subtotal = item.hargaDiskon * item.quantity;
    totalHarga += subtotal;
    
    const divItem = document.createElement('div');
    divItem.className = 'item-keranjang';
    divItem.innerHTML = `
      <div class="info-item">
        <div class="nama-item">${indeks + 1}. ${item.nama} ${item.quantity > 1 ? `x${item.quantity}` : ''}</div>
        <div class="harga-item">Rp ${formatRupiah(item.hargaDiskon)} ${item.quantity > 1 ? `<span class="subtotal">= Rp ${formatRupiah(subtotal)}</span>` : ''}</div>
      </div>
      <div class="kontrol-quantity">
        <button class="tombol-quantity" onclick="ubahQuantity(${indeks}, -1)">−</button>
        <span class="angka-quantity">${item.quantity}</span>
        <button class="tombol-quantity" onclick="ubahQuantity(${indeks}, 1)">+</button>
        <button class="tombol-hapus" onclick="hapusDariKeranjang(${indeks})">×</button>
      </div>
    `;
    
    kontainerItem.appendChild(divItem);
  });
  
  // Tampilkan total harga
  kontainerTotal.innerHTML = `
    <div class="total-keranjang">
      Total: <span class="harga-total">Rp ${formatRupiah(totalHarga)}</span>
    </div>
  `;
}

// ==========================================
// 10. FUNGSI CHECKOUT (WhatsApp)
// ==========================================
function checkout() {
  if (keranjangBelanja.length === 0) {
    alert('Keranjang masih kosong! Silakan tambahkan produk terlebih dahulu.');
    return;
  }
  
  // Buat pesan WhatsApp
  let pesan = `*Halo, saya ingin memesan produk :*%0A%0A`;
  let totalHarga = 0;
  
  keranjangBelanja.forEach((item, indeks) => {
    const subtotal = item.hargaDiskon * item.quantity;
    totalHarga += subtotal;
    pesan += `${indeks + 1}. ${item.nama}${item.quantity > 1 ? ` x${item.quantity}` : ''}%0A   Harga: Rp ${formatRupiah(item.hargaDiskon)}${item.quantity > 1 ? ` = Rp ${formatRupiah(subtotal)}` : ''}%0A%0A`;
  });
  
  pesan += `*Total Pembayaran:* Rp ${formatRupiah(totalHarga)}%0A%0A`;
  pesan += `Terima kasih!`;
  
  // Buka WhatsApp dengan pesan yang sudah disiapkan
  const urlWhatsApp = `https://wa.me/${konfigurasi.nomorWhatsApp}?text=${pesan}`;
  window.open(urlWhatsApp, '_blank');
}

// ==========================================
// 11. FUNGSI HELPER (Pembantu)
// ==========================================

// Format angka menjadi format rupiah (1000000 -> 1.000.000)
function formatRupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ==========================================
// 12. EVENT LISTENERS
// ==========================================

// Event delegation untuk tombol tambah keranjang
document.addEventListener('click', function(e) {
  const tombol = e.target.closest('.btn-tambah-keranjang');
  
  if (tombol) {
    e.preventDefault();
    e.stopPropagation();
    
    const indeks = parseInt(tombol.getAttribute('data-index'));
    const kategori = tombol.getAttribute('data-kategori');
    
    if (kategori) kategoriSaatIni = kategori;
    
    tambahKeKeranjang(indeks);
  }
});

// ==========================================
// 13. INISIALISASI APLIKASI
// Fungsi ini dipanggil saat halaman selesai dimuat
// ==========================================
function initApp() {
  // 1. Inisialisasi audio player
  audioPlayer.init();
  
  // 2. Muat keranjang dari localStorage
  muatKeranjang();
  
  // 3. Setup menu toggle untuk mobile
  tutupMenuOtomatis();
  
  // 4. Deteksi halaman dan tampilkan produk sesuai kategori
  const halaman = window.location.pathname.split('/').pop().replace('.html', '');
  
  switch(halaman) {
    case 'elektronik':
      tampilkanProduk('elektronik', konfigurasi.diskon.elektronik);
      break;
    case 'bahan_baku':
      tampilkanProduk('bahan_baku', konfigurasi.diskon.bahan_baku);
      break;
    case 'game':
      tampilkanProduk('game', konfigurasi.diskon.game);
      break;
    case 'diy_give':
      tampilkanProduk('diy_give', konfigurasi.diskon.diy_give);
      break;
    default:
      console.log('Halaman beranda');
  }
  
  // 5. Inisialisasi tampilan keranjang
  tampilkanKeranjang();
}

// Load saat halaman siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}