// ===== THEME SWITCHER =====
function setTheme(themeName) {
  // Hapus semua kelas tema
  document.body.classList.remove('tema-dark', 'tema-light');
  
  // Tambahkan kelas tema baru jika bukan default
  if (themeName === 'dark') {
    document.body.classList.add('tema-dark');
  } else if (themeName === 'light') {
    document.body.classList.add('tema-light');
  }
  
  // Simpan preferensi tema di localStorage
  localStorage.setItem('theme', themeName);
  
  // Update tombol aktif
  updateActiveButton(themeName);
}

function updateActiveButton(themeName) {
  // Hapus kelas aktif dari semua tombol
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Tambahkan kelas aktif ke tombol yang dipilih
  const activeBtn = document.querySelector(`[data-theme="${themeName}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// ===== LOAD TEMA SAAT HALAMAN DIMUAT =====
function loadSavedTheme() {
  // Ambil tema yang tersimpan dari localStorage
  const savedTheme = localStorage.getItem('theme') || 'default';
  
  // Terapkan tema yang tersimpan
  if (savedTheme === 'dark') {
    document.body.classList.add('tema-dark');
  } else if (savedTheme === 'light') {
    document.body.classList.add('tema-light');
  }
  
  // Update tombol aktif
  updateActiveButton(savedTheme);
}

// ===== KONFIGURASI & DATA E-COMMERCE =====
const konfigurasi = {
  nomorWhatsApp: "6281410354213",
  diskonElektronik: 0.85,
  diskonbahan_baku: 0.90,
  diskonGame: 0.95,
  diskondiy_give: 0.90,
  diskonAktif: false, // Set ke false untuk mematikan semua diskon
  
  // Konfigurasi audio
  audio: {
    tambahKeranjang: "../assets/sounds/add-to-cart.mp3",
    hapusItem: "../assets/sounds/remove-item.mp3",
    kosongkanKeranjang: "../assets/sounds/clear-cart.mp3",
    pindahTab: "../assets/sounds/tab-switch.mp3"
  }
};

// Objek untuk menyimpan audio yang sudah di-load
const audioPlayer = {
  sounds: {},
  
  // Fungsi untuk load audio
  init() {
    Object.keys(konfigurasi.audio).forEach(key => {
      this.sounds[key] = new Audio(konfigurasi.audio[key]);
      this.sounds[key].preload = 'auto';
    });
  },
  
  // Fungsi untuk play audio
  play(soundName) {
    if (this.sounds[soundName]) {
      const sound = this.sounds[soundName].cloneNode();
      sound.volume = 0.5;
      sound.play().catch(err => console.log('Audio play error:', err));
    }
  }
};

// Data produk untuk setiap kategori
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
    { nama: "Grand Theft Auto: V", harga: 699000, gambar: "../assets/images/Game/GTAV.jpg" },
    { nama: "Red Dead Redemption 2", harga: 879000, gambar: "../assets/images/Game/RDR2.jpg" },
    { nama: "Elden Ring", harga: 899000, gambar: "../assets/images/Game/EldenRing.jpg" },
    { nama: "Black Myth: Wukong", harga: 900000, gambar: "../assets/images/Game/BlackMythWukong.jpg" },
    { nama: "FarCry: 6", harga: 799000, gambar: "../assets/images/Game/Farcry6.jpg" },
    { nama: "Cyberpunk 2077", harga: 899000, gambar: "../assets/images/Game/cyberPunk2077.jpg" },
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
    { nama: "Action Figure diy_give Classic", harga: 450000, gambar: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=300" },
    { nama: "Hot Toys diy_give", harga: 3500000, gambar: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=300" },
    { nama: "Kostum diy_give Anak", harga: 250000, gambar: "https://images.unsplash.com/photo-1564187657827-7cc4b85cf690?w=300" },
    { nama: "Kostum diy_give Dewasa", harga: 650000, gambar: "https://images.unsplash.com/photo-1564187657827-7cc4b85cf690?w=300" },
    { nama: "Tas Ransel diy_give", harga: 180000, gambar: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300" },
    { nama: "Kaos diy_give Premium", harga: 150000, gambar: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300" },
    { nama: "Hoodie diy_give", harga: 320000, gambar: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300" },
    { nama: "Poster diy_give 3D", harga: 95000, gambar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300" },
    { nama: "Mug diy_give Keramik", harga: 85000, gambar: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300" },
    { nama: "Gantungan Kunci diy_give", harga: 45000, gambar: "https://images.unsplash.com/photo-1549298222-1965f8d8fc83?w=300" },
    { nama: "Sticker Pack diy_give", harga: 35000, gambar: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300" },
    { nama: "Helm diy_give Replika", harga: 280000, gambar: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300" },
    { nama: "Web Shooter Replika", harga: 420000, gambar: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=300" },
    { nama: "Sarung Bantal diy_give", harga: 65000, gambar: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300" },
    { nama: "Selimut diy_give Jumbo", harga: 210000, gambar: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300" },
    { nama: "Lampu Tidur diy_give", harga: 175000, gambar: "https://images.unsplash.com/photo-1565602636342-c0e0c7ae6c3f?w=300" },
    { nama: "Topeng diy_give LED", harga: 195000, gambar: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=300" },
    { nama: "Boneka Plush diy_give", harga: 220000, gambar: "https://images.unsplash.com/photo-1605979399824-5d5c0f3836e9?w=300" },
    { nama: "Pin Badge diy_give Set", harga: 95000, gambar: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=300" },
    { nama: "Sepatu diy_give Anak", harga: 380000, gambar: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300" }
  ]
};

let keranjangBelanja = [];
let kategoriSaatIni = '';
let diskonSaatIni = 1;

// ===== FUNGSI NAVIGASI =====
function toggleMenu() {
  const menuNav = document.getElementById('menuNavbar');
  if (menuNav) {
    menuNav.classList.toggle('aktif');
  }
}

function tutupMenuOtomatis() {
  document.addEventListener('click', function(event) {
    const menuNav = document.getElementById('menuNavbar');
    const tombolToggle = document.querySelector('.tombol-toggle');
    
    if (!menuNav || !tombolToggle) return;
    
    const klikDiDalam = menuNav.contains(event.target) || tombolToggle.contains(event.target);
    
    if (!klikDiDalam && menuNav.classList.contains('aktif')) {
      menuNav.classList.remove('aktif');
    }
  });
}

// ===== FUNGSI KERANJANG =====
function simpanKeranjang() {
  localStorage.setItem('keranjangBelanja', JSON.stringify(keranjangBelanja));
}

function muatKeranjang() {
  const keranjangTersimpan = localStorage.getItem('keranjangBelanja');
  if (keranjangTersimpan) {
    keranjangBelanja = JSON.parse(keranjangTersimpan);
  }
}

// ===== FUNGSI PRODUK =====
function tampilkanProduk(kategori, diskon) {
  const kontainerProduk = document.getElementById('daftarProduk');
  if (!kontainerProduk) return;
  
  const produkKategori = dataProduk[kategori];
  if (!produkKategori) return;
  
  kategoriSaatIni = kategori;
  diskonSaatIni = diskon;
  
  kontainerProduk.innerHTML = '';
  
  produkKategori.forEach((produk, indeks) => {
    const diskonEfektif = konfigurasi.diskonAktif ? diskon : 1;
    const hargaDiskon = Math.round(produk.harga * diskonEfektif);
    
    const kartuProduk = document.createElement('div');
    kartuProduk.className = 'kartu-produk';
    
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

function tambahKeKeranjang(indeksProduk) {
  if (!kategoriSaatIni) {
    console.error('Kategori tidak ditentukan!');
    return;
  }
  
  if (!dataProduk[kategoriSaatIni]) {
    console.error('Data produk tidak ditemukan');
    return;
  }
  
  if (indeksProduk < 0 || indeksProduk >= dataProduk[kategoriSaatIni].length) {
    console.error('Indeks produk tidak valid');
    return;
  }
  
  const produk = dataProduk[kategoriSaatIni][indeksProduk];
  if (!produk) {
    console.error('Produk tidak ditemukan');
    return;
  }
  
  const diskonEfektif = konfigurasi.diskonAktif ? diskonSaatIni : 1;
  
  const itemKeranjang = {
    nama: produk.nama,
    harga: produk.harga,
    hargaDiskon: Math.round(produk.harga * diskonEfektif),
    kategori: kategoriSaatIni
  };
  
  keranjangBelanja.push(itemKeranjang);
  simpanKeranjang();
  audioPlayer.play('tambahKeranjang');
  tampilkanKeranjang();
  animasiKeranjang();
}

function hapusDariKeranjang(indeks) {
  keranjangBelanja.splice(indeks, 1);
  simpanKeranjang();
  audioPlayer.play('hapusItem');
  tampilkanKeranjang();
}

function kosongkanKeranjang() {
  if (confirm('Yakin ingin mengosongkan keranjang belanja?')) {
    keranjangBelanja = [];
    simpanKeranjang();
    audioPlayer.play('kosongkanKeranjang');
    tampilkanKeranjang();
  }
}

function tampilkanKeranjang() {
  const kontainerItem = document.getElementById('itemKeranjang');
  const kontainerTotal = document.getElementById('totalKeranjang');
  const tombolKosongkan = document.getElementById('tombolKosongkan');
  
  if (!kontainerItem || !kontainerTotal || !tombolKosongkan) return;
  
  if (keranjangBelanja.length === 0) {
    kontainerItem.innerHTML = '<div class="keranjang-kosong">Keranjang masih kosong</div>';
    kontainerTotal.innerHTML = '';
    tombolKosongkan.classList.add('tersembunyi');
    return;
  }
  
  tombolKosongkan.classList.remove('tersembunyi');
  kontainerItem.innerHTML = '';
  let totalHarga = 0;
  
  keranjangBelanja.forEach((item, indeks) => {
    totalHarga += item.hargaDiskon;
    
    const divItem = document.createElement('div');
    divItem.className = 'item-keranjang';
    divItem.innerHTML = `
      <div class="info-item">
        <div class="nama-item">${indeks + 1}. ${item.nama}</div>
        <div class="harga-item">Rp ${formatRupiah(item.hargaDiskon)}</div>
      </div>
      <button class="tombol-hapus" onclick="hapusDariKeranjang(${indeks})">×</button>
    `;
    
    kontainerItem.appendChild(divItem);
  });
  
  kontainerTotal.innerHTML = `
    <div class="total-keranjang">
      Total: <span class="harga-total">Rp ${formatRupiah(totalHarga)}</span>
    </div>
  `;
}

function animasiKeranjang() {
  const keranjang = document.querySelector('.keranjang-belanja');
  if (!keranjang) return;
  
  keranjang.style.transition = 'transform 0.2s';
  keranjang.style.transform = 'scale(1.05)';
  setTimeout(() => {
    keranjang.style.transform = 'scale(1)';
  }, 200);
}

// ===== FUNGSI CHECKOUT =====
function checkout() {
  if (keranjangBelanja.length === 0) {
    alert('Keranjang masih kosong! Silakan tambahkan produk terlebih dahulu.');
    return;
  }
  
  let pesan = `*Halo, saya ingin memesan produk :*%0A%0A`;
  let totalHarga = 0;
  
  keranjangBelanja.forEach((item, indeks) => {
    totalHarga += item.hargaDiskon;
    pesan += `${indeks + 1}. ${item.nama}%0A   Harga: Rp ${formatRupiah(item.hargaDiskon)}%0A%0A`;
  });
  
  pesan += `*Total Pembayaran:* Rp ${formatRupiah(totalHarga)}%0A%0A`;
  pesan += `Terima kasih!`;
  
  const urlWhatsApp = `https://wa.me/${konfigurasi.nomorWhatsApp}?text=${pesan}`;
  window.open(urlWhatsApp, '_blank');
}

// ===== FUNGSI HELPER =====
function formatRupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function kapitalisasi(teks) {
  return teks.charAt(0).toUpperCase() + teks.slice(1);
}

// ===== FUNGSI UNTUK PINDAH TAB =====
function setupNavigationSound() {
  const navLinks = document.querySelectorAll('.menu-navbar a, nav a, .nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      audioPlayer.play('pindahTab');
    });
  });
}

// ===== EVENT DELEGATION UNTUK TOMBOL TAMBAH KERANJANG =====
document.addEventListener('click', function(e) {
  const tombol = e.target.closest('.btn-tambah-keranjang');
  
  if (tombol) {
    e.preventDefault();
    e.stopPropagation();
    
    const indeks = parseInt(tombol.getAttribute('data-index'));
    const kategori = tombol.getAttribute('data-kategori');
    
    if (kategori) {
      kategoriSaatIni = kategori;
    }
    
    tambahKeKeranjang(indeks);
  }
});

// ===== INISIALISASI =====
function initApp() {
  // Load tema yang tersimpan
  loadSavedTheme();
  
  // Inisialisasi audio player
  audioPlayer.init();
  
  // Setup sound untuk navigasi
  setupNavigationSound();
  
  // Muat keranjang dari localStorage
  muatKeranjang();
  
  // Setup menu toggle
  tutupMenuOtomatis();
  
  // Deteksi halaman dan tampilkan produk sesuai kategori
  const halaman = window.location.pathname.split('/').pop().replace('.html', '');
  
  switch(halaman) {
    case 'elektronik':
      tampilkanProduk('elektronik', konfigurasi.diskonElektronik);
      break;
    case 'bahan_baku':
      tampilkanProduk('bahan_baku', konfigurasi.diskonbahan_baku);
      break;
    case 'game':
      tampilkanProduk('game', konfigurasi.diskonGame);
      break;
    case 'diy_give':
      tampilkanProduk('diy_give', konfigurasi.diskondiy_give);
      break;
    default:
      console.log('Halaman beranda');
  }
  
  // Inisialisasi tampilan keranjang
  tampilkanKeranjang();
}

// Load saat halaman siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();

}



