// ============================================================
//  Semua produk toko disimpan di sini.
//
//  Field opsional per produk:
//  - diskon      : angka 0–100 (persen diskon, misal 20 = 20%)
//  - featured    : true — ditampilkan di homepage sebagai pilihan
//  - populer     : true — muncul di filter "Populer"
// ============================================================

export const PRODUCTS = {

  // ELEKTRONIK
  elektronik: [
    { id: 'elk001', nama: "Samsung S25 Ultra",      harga: 23000000, gambar: "src/assets/images/Elektronik/HPS25U.jpeg",     diskon: 10, featured: true  },
    { id: 'elk002', nama: "iPhone 17 Pro Max",       harga: 25000000, gambar: "src/assets/images/Elektronik/HP17PM.jpeg",    diskon: 0                   },
    { id: 'elk003', nama: "RedMagic 11 Pro",         harga: 18000000, gambar: "src/assets/images/Elektronik/HP11PRO.jpeg",   diskon: 15                  },
    { id: 'elk004', nama: "Vivo X300 Pro",           harga: 15000000, gambar: "src/assets/images/Elektronik/HPX300PRO.jpeg", diskon: 0                   },
    { id: 'elk005', nama: "Huawei Pura 80 Ultra",    harga: 21000000, gambar: "src/assets/images/Elektronik/HP80ULTRA.jpeg", diskon: 5                   },
    { id: 'elk006', nama: "Lenovo LOQ 15",           harga: 15000000, gambar: "src/assets/images/Elektronik/LPLOQ.jpeg",     diskon: 0,  featured: true  },
    { id: 'elk007', nama: "Asus TUF A15",            harga: 15000000, gambar: "src/assets/images/Elektronik/LPTUF.jpeg",     diskon: 8                   },
    { id: 'elk008', nama: "Lenovo Legion 5",         harga: 18000000, gambar: "src/assets/images/Elektronik/LPLEGION.jpeg",  diskon: 0                   },
    { id: 'elk009', nama: "Asus ROG Strix",          harga: 28000000, gambar: "src/assets/images/Elektronik/LPROG.jpeg",     diskon: 12                  },
    { id: 'elk010', nama: "Macbook Pro M4 16''",     harga: 37000000, gambar: "src/assets/images/Elektronik/LPMACBOOK.jpeg", diskon: 0                   },
    { id: 'elk011', nama: "Mechanical Keyboard",     harga:   450000, gambar: "src/assets/images/Elektronik/keyboard.jpg",   diskon: 20                  },
    { id: 'elk012', nama: "Mouse Macro",             harga:   250000, gambar: "src/assets/images/Elektronik/mouse.jpg",      diskon: 0                   },
    { id: 'elk013', nama: "Wireless Headset",        harga:   400000, gambar: "src/assets/images/Elektronik/headset.jpg",    diskon: 15                  },
    { id: 'elk014', nama: "Microphone",              harga:   850000, gambar: "src/assets/images/Elektronik/mic.jpg",        diskon: 0                   },
    { id: 'elk015', nama: "Speaker Stereo",          harga:   120000, gambar: "src/assets/images/Elektronik/speaker.jpg",    diskon: 0                   },
    { id: 'elk016', nama: "Webcam HD",               harga:  2500000, gambar: "src/assets/images/Elektronik/webcam.jpg",     diskon: 0                   },
    { id: 'elk017', nama: "Kursi Gaming",            harga:   850000, gambar: "src/assets/images/Elektronik/kursi.jpeg",     diskon: 25                  },
    { id: 'elk018', nama: "Deskmate",                harga:   220000, gambar: "src/assets/images/Elektronik/deskmate.jpg",   diskon: 0                   },
    { id: 'elk019', nama: "Monitor 16''",            harga:  3400000, gambar: "src/assets/images/Elektronik/monitor.jpg",    diskon: 10                  },
    { id: 'elk020', nama: "Monitor Arm",             harga:   350000, gambar: "src/assets/images/Elektronik/monitorarm.jpg", diskon: 0                   }
  ],

  // BAHAN BAKU
  bahan_baku: [
    { id: 'bhn001', nama: "Kaldu Jamur 12 Sachet", harga:  60000, gambar: "src/assets/images/bahanBaku/KALDUJAMUR.jpg",   diskon: 0                  },
    { id: 'bhn002', nama: "Masako 12 Sachet",      harga:  10000, gambar: "src/assets/images/bahanBaku/MASAKO.jpg",       diskon: 10                 },
    { id: 'bhn003', nama: "Sasa 12 Sachet",        harga:  12000, gambar: "src/assets/images/bahanBaku/SASA.jpg",         diskon: 0                  },
    { id: 'bhn004', nama: "Gula Pasir 1 Kg",       harga:  15000, gambar: "src/assets/images/bahanBaku/GULA.jpg",         diskon: 0                  },
    { id: 'bhn005', nama: "Gula Merah 1 Kg",       harga:  22000, gambar: "src/assets/images/bahanBaku/GULAMERAH.jpg",    diskon: 5                  },
    { id: 'bhn006', nama: "Jahe 500 Gram",         harga:  16500, gambar: "src/assets/images/bahanBaku/JAHE.jpg",         diskon: 0                  },
    { id: 'bhn007', nama: "Kemiri 500 Gram",       harga:  38000, gambar: "src/assets/images/bahanBaku/KEMIRI.jpg",       diskon: 0                  },
    { id: 'bhn008', nama: "Bawang Merah 1 Kg",     harga:  22000, gambar: "src/assets/images/bahanBaku/MERAH.jpg",        diskon: 0                  },
    { id: 'bhn009', nama: "Bawang Bombai 1 Kg",    harga:  30000, gambar: "src/assets/images/bahanBaku/BOMBAI.jpg",       diskon: 0                  },
    { id: 'bhn010', nama: "Bawang Putih 1 Kg",     harga:  35000, gambar: "src/assets/images/bahanBaku/PUTIH.jpg",        diskon: 0                  },
    { id: 'bhn011', nama: "Telur 1 Kg",            harga:  33500, gambar: "src/assets/images/bahanBaku/TELUR.jpg",        diskon: 0                  },
    { id: 'bhn012', nama: "Tepung Terigu 1 Kg",    harga:  19000, gambar: "src/assets/images/bahanBaku/TEPUNG.jpg",       diskon: 0                  },
    { id: 'bhn013', nama: "Tepung Sagu 1 Kg",      harga:  16000, gambar: "src/assets/images/bahanBaku/SAGU.jpg",         diskon: 0                  },
    { id: 'bhn014', nama: "Olive Oil 1 Liter",     harga:  80000, gambar: "src/assets/images/bahanBaku/OLIVEOIL.jpg",     diskon: 15                 },
    { id: 'bhn015', nama: "Parsley 500 Gram",      harga:  65500, gambar: "src/assets/images/bahanBaku/PARSLEY.jpg",      diskon: 0                  },
    { id: 'bhn016', nama: "Whip Cream 500 Gram",   harga:  22000, gambar: "src/assets/images/bahanBaku/WHIPCREAM.jpg",    diskon: 0                  },
    { id: 'bhn017', nama: "Spread Cheese 1 Box",   harga:  19000, gambar: "src/assets/images/bahanBaku/CHEESESPREAD.jpg", diskon: 0                  },
    { id: 'bhn018', nama: "Butter 1 Box",          harga:  39000, gambar: "src/assets/images/bahanBaku/BUTTER.jpg",       diskon: 0                  },
    { id: 'bhn019', nama: "Kismis 1 Kg",           harga:  60000, gambar: "src/assets/images/bahanBaku/KISMIS.jpg",       diskon: 20                 },
    { id: 'bhn020', nama: "Chocolate 1 Box",       harga:  27500, gambar: "src/assets/images/bahanBaku/COKLATBAR.jpg",    diskon: 0,  featured: true }
  ],

  // GAME DIGITAL
  game: [
    { id: 'game001', nama: "Grand Theft Auto: V",             harga: 699000, gambar: "src/assets/images/Game/GTA5.jpg",            populer: true, diskon: 30, featured: true },
    { id: 'game002', nama: "Red Dead Redemption 2",           harga: 879000, gambar: "src/assets/images/Game/RDR2.jpg",            populer: true, diskon: 50               },
    { id: 'game003', nama: "Elden Ring",                      harga: 899000, gambar: "src/assets/images/Game/EldenRing.jpg",                      diskon: 0                },
    { id: 'game004', nama: "Black Myth: Wukong",              harga: 900000, gambar: "src/assets/images/Game/BlackMythWukong.jpg",                diskon: 0                },
    { id: 'game005', nama: "FarCry: 6",                       harga: 799000, gambar: "src/assets/images/Game/Farcry6.jpg",                        diskon: 40               },
    { id: 'game006', nama: "Cyberpunk 2077",                  harga: 899000, gambar: "src/assets/images/Game/CyberPunk2077.jpg",   populer: true, diskon: 25               },
    { id: 'game007', nama: "Assassin's Creed: Origins",       harga: 399000, gambar: "src/assets/images/Game/AssasinCreed.jpg",                   diskon: 35               },
    { id: 'game008', nama: "Hogwarts Legacy",                 harga: 899000, gambar: "src/assets/images/Game/HogwartsLegacy.jpg",                 diskon: 15               },
    { id: 'game009', nama: "Marvel Spiderman: Remastered",    harga: 900000, gambar: "src/assets/images/Game/MarvelSpiderman.jpg",                diskon: 35                },
    { id: 'game010', nama: "Marvel Spiderman: Miles Morales", harga: 750000, gambar: "src/assets/images/Game/SpidermanMiles.jpg",  populer: true, diskon: 10               },
    { id: 'game011', nama: "Overcooked: 2",                   harga: 349000, gambar: "src/assets/images/Game/Overcooked2.jpg",                    diskon: 0                },
    { id: 'game012', nama: "It Takes Two",                    harga: 470000, gambar: "src/assets/images/Game/ItTakesTwo.jpg",                     diskon: 0                },
    { id: 'game013', nama: "Split Fiction",                   harga: 350000, gambar: "src/assets/images/Game/SplitFiction.jpg",                   diskon: 0                },
    { id: 'game014', nama: "Raft: Survival",                  harga: 295000, gambar: "src/assets/images/Game/Raft.jpg",                           diskon: 0                },
    { id: 'game015', nama: "The Forest",                      harga: 299000, gambar: "src/assets/images/Game/TheForest.jpg",                      diskon: 0                },
    { id: 'game016', nama: "Subnautica",                      harga: 299000, gambar: "src/assets/images/Game/Subnautica.jpg",                     diskon: 0                },
    { id: 'game017', nama: "EA: Sports FC 26",                harga: 899000, gambar: "src/assets/images/Game/EaSport.jpg",                        diskon: 5                },
    { id: 'game018', nama: "Minecraft",                       harga: 470000, gambar: "src/assets/images/Game/Minecraft.jpg",       populer: true, diskon: 0,  featured: true },
    { id: 'game019', nama: "Stardew Valley",                  harga: 199000, gambar: "src/assets/images/Game/StardewValley.jpg",                  diskon: 0                },
    { id: 'game020', nama: "TheoTown",                        harga:  50000, gambar: "src/assets/images/Game/TheoTown.jpg",                       diskon: 0                }
  ],

  // DIY GIVE
  diy_give: [
    { id: 'diy001', nama: "Surprise Kado",         harga:  450000, gambar: "src/assets/images/DIY_Give/kado.jpg",         diskon: 0                },
    { id: 'diy002', nama: "Exploding Box",         harga:  150000, gambar: "src/assets/images/DIY_Give/explodingbox.jpg", diskon: 10               },
    { id: 'diy003', nama: "Flower Bouquet",        harga:  250000, gambar: "src/assets/images/DIY_Give/flowerbuket.jpg",  diskon: 0,  featured: true },
    { id: 'diy004', nama: "Scrapbook",             harga:  75000,  gambar: "src/assets/images/DIY_Give/scrapbook.jpg",    diskon: 0                },
    { id: 'diy005', nama: "Sketchbook",            harga:  40000,  gambar: "src/assets/images/DIY_Give/sketchbook.jpg",   diskon: 0                },
    { id: 'diy006', nama: "Notebook",              harga:  25000,  gambar: "src/assets/images/DIY_Give/notebook.jpg",     diskon: 15               },
    { id: 'diy007', nama: "Book Mark",             harga:  3000,   gambar: "src/assets/images/DIY_Give/bookmark.jpg",     diskon: 0                },
    { id: 'diy008', nama: "Kit Krayon",            harga:  95000,  gambar: "src/assets/images/DIY_Give/krayon.jpg",       diskon: 0                },
    { id: 'diy009', nama: "Kit Pensil Warna",      harga:  120000, gambar: "src/assets/images/DIY_Give/pensilwarna.jpg",  diskon: 0                },
    { id: 'diy010', nama: "Keychain Nama",         harga:  35000,  gambar: "src/assets/images/DIY_Give/keychainname.jpg", diskon: 0                },
    { id: 'diy011', nama: "Gelang",                harga:  20000,  gambar: "src/assets/images/DIY_Give/gelang.jpg",       diskon: 0                },
    { id: 'diy012', nama: "Tumbler",               harga:  180000, gambar: "src/assets/images/DIY_Give/tumbler.jpg",      diskon: 20, featured: true },
    { id: 'diy013', nama: "Casing HP",             harga:  42000,  gambar: "src/assets/images/DIY_Give/casehp.jpg",       diskon: 0                },
    { id: 'diy014', nama: "Dompet Mini",           harga:  35000,  gambar: "src/assets/images/DIY_Give/dompet.jpg",       diskon: 0                },
    { id: 'diy015', nama: "Totebag Hand Painting", harga:  75000,  gambar: "src/assets/images/DIY_Give/totebag.jpg",      diskon: 0                },
    { id: 'diy016', nama: "Frame Foto",            harga:  45000,  gambar: "src/assets/images/DIY_Give/frame.jpg",        diskon: 0                },
    { id: 'diy017', nama: "Kartu Ucapan",          harga:  95000,  gambar: "src/assets/images/DIY_Give/kartuucapan.jpg",  diskon: 0                },
    { id: 'diy018', nama: "Candle",                harga:  220000, gambar: "src/assets/images/DIY_Give/lilin.jpg",        diskon: 10               },
    { id: 'diy019', nama: "Mini Camera",           harga:  499999, gambar: "src/assets/images/DIY_Give/minicamera.jpg",   diskon: 0                },
    { id: 'diy020', nama: "Mini Album",            harga:  80000,  gambar: "src/assets/images/DIY_Give/minialbum.jpg",    diskon: 5                }
  ],

  // BUKU
  buku: [
    { id: 'buku001', nama: "Seporsi Mie Ayam sebelum Mati (Novel)",         harga:  95000, gambar: "src/assets/images/Buku/seporsi.jpeg",                 diskon: 0                },
    { id: 'buku002', nama: "Laut Bercerita (Novel)",                        harga:  99999, gambar: "src/assets/images/Buku/laut.jpeg",                    diskon: 10               },
    { id: 'buku003', nama: "Hujan (Novel)",                                 harga:  88000, gambar: "src/assets/images/Buku/hujan.jpeg",                   diskon: 0                },
    { id: 'buku004', nama: "Dompet Ayah Sepatu Ibu (Novel)",                harga:  85000, gambar: "src/assets/images/Buku/dompetsepatu.jpeg",            diskon: 0                },
    { id: 'buku005', nama: "Bumi Manusia (Novel)",                          harga:  12000, gambar: "src/assets/images/Buku/bumimanusia.jpeg",             diskon: 0                },
    { id: 'buku006', nama: "Atomic Habits (Growth)",                        harga:  135000, gambar: "src/assets/images/Buku/atomic.jpeg",                 diskon: 15,  featured: true },
    { id: 'buku007', nama: "Berani Tidak Disukai (Growth)",                 harga:  120000, gambar: "src/assets/images/Buku/beranitidakdisukai.jpeg",     diskon: 0                },
    { id: 'buku008', nama: "Thinking, Fast and Slow (Growth)",              harga:  150000, gambar: "src/assets/images/Buku/fastslow.jpeg",               diskon: 0                },
    { id: 'buku009', nama: "Filosofi Teras (Growth)",                       harga:  99000, gambar: "src/assets/images/Buku/filosofiteras.jpeg",           diskon: 0                },
    { id: 'buku010', nama: "Mindset (Growth)",                              harga:  125000, gambar: "src/assets/images/Buku/mindset.jpeg",                diskon: 0                },
    { id: 'buku011', nama: "Animal Farm (Classic)",                         harga:  65000, gambar: "src/assets/images/Buku/animalfarm.jpeg",              diskon: 0                },
    { id: 'buku012', nama: "The Alchemist (Classic)",                       harga:  85000, gambar: "src/assets/images/Buku/thealchemist.jpeg",            diskon: 20               },
    { id: 'buku013', nama: "1984 (Classic)",                                harga:  90000, gambar: "src/assets/images/Buku/1984.jpeg",                    diskon: 0                },
    { id: 'buku014', nama: "The Metamorphosis (Classic)",                   harga:  70000, gambar: "src/assets/images/Buku/metamorphosis.jpeg",           diskon: 0                },
    { id: 'buku015', nama: "The Little Prince (Classic)",                   harga:  75000, gambar: "src/assets/images/Buku/thelittle.jpeg",               diskon: 0                },
    { id: 'buku016', nama: "Sapiens (History)",                             harga:  160000, gambar: "src/assets/images/Buku/sapiens.jpeg",                diskon: 0                },
    { id: 'buku017', nama: "Perang Dunia I (History)",                      harga:  95000, gambar: "src/assets/images/Buku/pd1.jpeg",                     diskon: 0                },
    { id: 'buku018', nama: "Perang Dunia II (History)",                     harga:  135000, gambar: "src/assets/images/Buku/pd2.jpeg",                    diskon: 10               },
    { id: 'buku019', nama: "Revolusi Prancis (History)",                    harga:  90000, gambar: "src/assets/images/Buku/prancis.jpeg",                 diskon: 0                },
    { id: 'buku020', nama: "Metode Jakarta (History)",                      harga:  135000, gambar: "src/assets/images/Buku/jakarta.jpeg",                diskon: 5                }
  ]
};

// ============================================================
//  Helper: hitung harga setelah diskon
// ============================================================
export function hargaSetelahDiskon(produk) {
  if (!produk.diskon || produk.diskon <= 0) return produk.harga;
  return Math.round(produk.harga * (1 - produk.diskon / 100));
}

// ============================================================
//  Ambil semua produk featured dari semua kategori
// ============================================================
export function getFeaturedProducts() {
  const semua = [];
  for (const kategori of Object.values(PRODUCTS)) {
    for (const p of kategori) {
      if (p.featured) semua.push(p);
    }
  }
  return semua;
}

// ============================================================
//  Ambil semua produk yang sedang diskon (urut terbesar)
// ============================================================
export function getDiscountedProducts() {
  const semua = [];
  for (const kategori of Object.values(PRODUCTS)) {
    for (const p of kategori) {
      if (p.diskon && p.diskon > 0) semua.push(p);
    }
  }
  return semua.sort((a, b) => b.diskon - a.diskon);
}