// ===== KONFIGURASI & DATA =====
const konfigurasi = {
  nomorWhatsApp: "6281410354213",
  diskonElektronik: 0.85,
  diskonJepangan: 0.90,
  diskonGame: 0.95,
  diskonSpiderman: 0.90
};

// Data produk untuk setiap kategori
const dataProduk = {
  elektronik: [
    { nama: "Laptop Lenovo LOQ", harga: 15500000, gambar: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300" },
    { nama: "Laptop ASUS ROG", harga: 23900000, gambar: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300" },
    { nama: "Laptop ASUS TUF", harga: 13000000, gambar: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300" },
    { nama: "Samsung S24 Ultra", harga: 18500000, gambar: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300" },
    { nama: "Monitor Xiaomi 24 Inch", harga: 2900000, gambar: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300" },
    { nama: "Headphone Gaming", harga: 500000, gambar: "https://images.unsplash.com/photo-1599669454699-248893623440?w=300" },
    { nama: "Keyboard Mechanical", harga: 750000, gambar: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300" },
    { nama: "Mouse Gaming", harga: 350000, gambar: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300" },
    { nama: "SSD NVMe 1TB", harga: 1200000, gambar: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300" },
    { nama: "RAM DDR5 16GB", harga: 900000, gambar: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=300" },
    { nama: "Webcam HD", harga: 450000, gambar: "https://images.unsplash.com/photo-1588513293983-62d9f55b2d8e?w=300" },
    { nama: "Speaker Bluetooth", harga: 650000, gambar: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300" },
    { nama: "Power Bank 20.000mAh", harga: 400000, gambar: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300" },
    { nama: "Router WiFi 6", harga: 850000, gambar: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=300" },
    { nama: "Smartwatch", harga: 1200000, gambar: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300" },
    { nama: "Tablet Android", harga: 3500000, gambar: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300" },
    { nama: "Cooling Pad Laptop", harga: 300000, gambar: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300" },
    { nama: "Flashdisk 128GB", harga: 250000, gambar: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=300" },
    { nama: "Monitor Gaming 27 Inch", harga: 5200000, gambar: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300" },
    { nama: "Microphone USB", harga: 700000, gambar: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300" }
  ],
  jepangan: [
    { nama: "Figure Naruto Uzumaki", harga: 450000, gambar: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=300" },
    { nama: "Manga One Piece Vol.1-10", harga: 850000, gambar: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=300" },
    { nama: "Dakimakura Anime", harga: 320000, gambar: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300" },
    { nama: "Poster Attack on Titan", harga: 75000, gambar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300" },
    { nama: "Kaos Anime Premium", harga: 180000, gambar: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300" },
    { nama: "Nendoroid Hatsune Miku", harga: 580000, gambar: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=300" },
    { nama: "Cosplay Demon Slayer", harga: 650000, gambar: "https://images.unsplash.com/photo-1564187657827-7cc4b85cf690?w=300" },
    { nama: "Artbook Studio Ghibli", harga: 420000, gambar: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300" },
    { nama: "Keychain Anime Set", harga: 150000, gambar: "https://images.unsplash.com/photo-1549298222-1965f8d8fc83?w=300" },
    { nama: "Totebag Kawaii", harga: 120000, gambar: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=300" },
    { nama: "Light Novel Sword Art Online", harga: 280000, gambar: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300" },
    { nama: "Sticker Pack Anime", harga: 65000, gambar: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300" },
    { nama: "Mug Keramik Anime", harga: 95000, gambar: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300" },
    { nama: "Topi Baseball Anime", harga: 145000, gambar: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300" },
    { nama: "Boneka Plush Pokemon", harga: 250000, gambar: "https://images.unsplash.com/photo-1605979399824-5d5c0f3836e9?w=300" },
    { nama: "Wallscroll Jujutsu Kaisen", harga: 185000, gambar: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=300" },
    { nama: "Pin Badge Set Anime", harga: 110000, gambar: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=300" },
    { nama: "Tas Ransel Anime", harga: 380000, gambar: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300" },
    { nama: "Pedang Katana Replika", harga: 720000, gambar: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=300" },
    { nama: "Hoodie Anime Limited", harga: 480000, gambar: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300" }
  ],
  game: [
    { nama: "Mobile Legends 100 Diamond", harga: 25000, gambar: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300" },
    { nama: "Mobile Legends 500 Diamond", harga: 120000, gambar: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300" },
    { nama: "Free Fire 100 Diamond", harga: 15000, gambar: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300" },
    { nama: "Free Fire 500 Diamond", harga: 72000, gambar: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300" },
    { nama: "PUBG Mobile 325 UC", harga: 50000, gambar: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300" },
    { nama: "PUBG Mobile 1800 UC", harga: 265000, gambar: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300" },
    { nama: "Genshin Impact 60 Genesis", harga: 16000, gambar: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300" },
    { nama: "Genshin Impact 300 Genesis", harga: 79000, gambar: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300" },
    { nama: "Steam Wallet 5 Dollar", harga: 80000, gambar: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300" },
    { nama: "Steam Wallet 20 Dollar", harga: 310000, gambar: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300" },
    { nama: "PlayStation Plus 1 Bulan", harga: 75000, gambar: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300" },
    { nama: "PlayStation Plus 12 Bulan", harga: 750000, gambar: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300" },
    { nama: "Xbox Game Pass 1 Bulan", harga: 85000, gambar: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=300" },
    { nama: "Xbox Game Pass Ultimate 3 Bulan", harga: 295000, gambar: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=300" },
    { nama: "Valorant 475 VP", harga: 45000, gambar: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=300" },
    { nama: "Valorant 2400 VP", harga: 220000, gambar: "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?w=300" },
    { nama: "Roblox 800 Robux", harga: 95000, gambar: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=300" },
    { nama: "Roblox 4500 Robux", harga: 530000, gambar: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=300" },
    { nama: "Call of Duty Mobile 80 CP", harga: 16000, gambar: "https://images.unsplash.com/photo-1600861194802-a2b11a0f2a12?w=300" },
    { nama: "Clash of Clans 500 Gems", harga: 65000, gambar: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300" }
  ],
  spiderman: [
    { nama: "Action Figure Spiderman Classic", harga: 450000, gambar: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=300" },
    { nama: "Hot Toys Spiderman", harga: 3500000, gambar: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=300" },
    { nama: "Kostum Spiderman Anak", harga: 250000, gambar: "https://images.unsplash.com/photo-1564187657827-7cc4b85cf690?w=300" },
    { nama: "Kostum Spiderman Dewasa", harga: 650000, gambar: "https://images.unsplash.com/photo-1564187657827-7cc4b85cf690?w=300" },
    { nama: "Tas Ransel Spiderman", harga: 180000, gambar: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300" },
    { nama: "Kaos Spiderman Premium", harga: 150000, gambar: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300" },
    { nama: "Hoodie Spiderman", harga: 320000, gambar: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300" },
    { nama: "Poster Spiderman 3D", harga: 95000, gambar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300" },
    { nama: "Mug Spiderman Keramik", harga: 85000, gambar: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300" },
    { nama: "Gantungan Kunci Spiderman", harga: 45000, gambar: "https://images.unsplash.com/photo-1549298222-1965f8d8fc83?w=300" },
    { nama: "Sticker Pack Spiderman", harga: 35000, gambar: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300" },
    { nama: "Helm Spiderman Replika", harga: 280000, gambar: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300" },
    { nama: "Web Shooter Replika", harga: 420000, gambar: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=300" },
    { nama: "Sarung Bantal Spiderman", harga: 65000, gambar: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300" },
    { nama: "Selimut Spiderman Jumbo", harga: 210000, gambar: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300" },
    { nama: "Lampu Tidur Spiderman", harga: 175000, gambar: "https://images.unsplash.com/photo-1565602636342-c0e0c7ae6c3f?w=300" },
    { nama: "Topeng Spiderman LED", harga: 195000, gambar: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=300" },
    { nama: "Boneka Plush Spiderman", harga: 220000, gambar: "https://images.unsplash.com/photo-1605979399824-5d5c0f3836e9?w=300" },
    { nama: "Pin Badge Spiderman Set", harga: 95000, gambar: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=300" },
    { nama: "Sepatu Spiderman Anak", harga: 380000, gambar: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300" }
  ]
};

// Keranjang belanja global
let keranjangBelanja = [];

// Fungsi untuk menyimpan keranjang ke localStorage
function simpanKeranjang() {
  localStorage.setItem('keranjangBelanja', JSON.stringify(keranjangBelanja));
}

// Fungsi untuk memuat keranjang dari localStorage
function muatKeranjang() {
  const keranjangTersimpan = localStorage.getItem('keranjangBelanja');
  if (keranjangTersimpan) {
    keranjangBelanja = JSON.parse(keranjangTersimpan);
  }
}

// Menyimpan kategori dan diskon saat ini
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

// ===== FUNGSI PRODUK =====
function tampilkanProduk(kategori, diskon) {
  const kontainerProduk = document.getElementById('daftarProduk');
  if (!kontainerProduk) return;
  
  const produkKategori = dataProduk[kategori];
  if (!produkKategori) return;
  
  // Simpan kategori dan diskon saat ini untuk digunakan di fungsi tambahKeKeranjang
  kategoriSaatIni = kategori;
  diskonSaatIni = diskon;
  
  kontainerProduk.innerHTML = '';
  
  produkKategori.forEach((produk, indeks) => {
    const hargaDiskon = Math.round(produk.harga * diskon);
    
    const kartuProduk = document.createElement('div');
    kartuProduk.className = 'kartu-produk';
    kartuProduk.innerHTML = `
      <img src="${produk.gambar}" alt="${produk.nama}" class="gambar-produk" loading="lazy">
      <h3 class="nama-produk">${produk.nama}</h3>
      <div class="harga-lama">Rp ${formatRupiah(produk.harga)}</div>
      <div class="harga-sekarang">Rp ${formatRupiah(hargaDiskon)}</div>
      <button class="tombol btn-tambah-keranjang" onclick="tambahKeKeranjang(${indeks})">
        Tambah ke Keranjang
      </button>
    `;

    kontainerProduk.appendChild(kartuProduk);
  });
}

// Setup event listeners untuk tombol tambah ke keranjang
function setupEventListeners() {
  const tombolTambah = document.querySelectorAll('.btn-tambah-keranjang');
  
  tombolTambah.forEach(tombol => {
    tombol.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const indeks = parseInt(this.getAttribute('data-index'));
      console.log('Tombol diklik! Indeks:', indeks);
      tambahKeKeranjang(indeks);
    });
  });
}

// ===== FUNGSI KERANJANG =====
function tambahKeKeranjang(indeksProduk) {
  console.log('Fungsi tambahKeKeranjang dipanggil dengan indeks:', indeksProduk);
  console.log('Kategori saat ini:', kategoriSaatIni);
  console.log('Diskon saat ini:', diskonSaatIni);

  // Ambil data produk berdasarkan indeks dan kategori saat ini
  const produk = dataProduk[kategoriSaatIni][indeksProduk];

  if (!produk) {
    console.error('Produk tidak ditemukan');
    alert('Terjadi kesalahan! Produk tidak ditemukan.');
    return;
  }

  console.log('Produk ditemukan:', produk);

  const itemKeranjang = {
    nama: produk.nama,
    harga: produk.harga,
    hargaDiskon: Math.round(produk.harga * diskonSaatIni),
    kategori: kategoriSaatIni
  };

  keranjangBelanja.push(itemKeranjang);
  console.log('Item ditambahkan ke keranjang:', itemKeranjang);
  console.log('Total item di keranjang:', keranjangBelanja.length);

  // Simpan keranjang ke localStorage
  simpanKeranjang();

  tampilkanKeranjang();
  animasiKeranjang();

  // Tampilkan notifikasi
  alert('✓ ' + produk.nama + ' berhasil ditambahkan ke keranjang!');
}

function hapusDariKeranjang(indeks) {
  keranjangBelanja.splice(indeks, 1);
  simpanKeranjang();
  tampilkanKeranjang();
}

function kosongkanKeranjang() {
  if (confirm('Yakin ingin mengosongkan keranjang belanja?')) {
    keranjangBelanja = [];
    simpanKeranjang();
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
  
  const kategoriPertama = keranjangBelanja[0].kategori;
  const namaKategori = kapitalisasi(kategoriPertama);
  
  let pesan = `*Halo, saya ingin memesan produk ${namaKategori}:*%0A%0A`;
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

// ===== INISIALISASI =====
console.log('Script berjalan');

// Muat keranjang dari localStorage
muatKeranjang();

// Deteksi halaman dan tampilkan produk sesuai kategori
const halaman = window.location.pathname.split('/').pop().replace('.html', '');
console.log('Halaman saat ini:', halaman);

switch(halaman) {
  case 'elektronik':
    tampilkanProduk('elektronik', konfigurasi.diskonElektronik);
    break;
  case 'jepangan':
    tampilkanProduk('jepangan', konfigurasi.diskonJepangan);
    break;
  case 'game':
    tampilkanProduk('game', konfigurasi.diskonGame);
    break;
  case 'spiderman':
    tampilkanProduk('spiderman', konfigurasi.diskonSpiderman);
    break;
}

// Inisialisasi tampilan keranjang
tampilkanKeranjang();

// Setup menu toggle untuk mobile
tutupMenuOtomatis();

console.log('Inisialisasi selesai');
