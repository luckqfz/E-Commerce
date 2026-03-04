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
    { id: 'elk001', nama: "Samsung S25 Ultra",       harga: 23000000, gambar: "src/assets/images/Elektronik/HPS25U.jpeg",    diskon: 10, featured: true, 
      deskripsi: "Smartphone flagship dengan performa super cepat dan kamera kelas profesional. Cocok untuk multitasking berat, gaming, dan fotografi detail tinggi. Desain premium dengan layar luas membuat pengalaman penggunaan makin nyaman."  },
    { id: 'elk002', nama: "iPhone 17 Pro Max",       harga: 25000000, gambar: "src/assets/images/Elektronik/HP17PM.jpeg",    diskon: 0, 
      deskripsi: "HP premium dengan ekosistem Apple yang smooth dan stabil. Ditenagai chipset terbaru untuk performa maksimal, serta kamera canggih yang cocok untuk foto dan video berkualitas tinggi. Max"                   },
    { id: 'elk003', nama: "RedMagic 11 Pro",         harga: 18000000, gambar: "src/assets/images/Elektronik/HP11PRO.jpeg",   diskon: 15, 
      deskripsi: "Smartphone gaming dengan performa ekstrem. Dilengkapi sistem pendingin khusus, refresh rate tinggi, dan respons sentuhan cepat. Cocok buat kamu yang hidupnya cuma rank dan push trophy."                  },
    { id: 'elk004', nama: "Vivo X300 Pro",           harga: 15000000, gambar: "src/assets/images/Elektronik/HPX300PRO.jpeg", diskon: 0, 
      deskripsi: "Smartphone dengan fokus kamera dan desain elegan. Cocok untuk pengguna yang suka fotografi dan butuh performa stabil untuk aktivitas sehari-hari."                   },
    { id: 'elk005', nama: "Huawei Pura 80 Ultra",    harga: 21000000, gambar: "src/assets/images/Elektronik/HP80ULTRA.jpeg", diskon: 5, 
      deskripsi: "HP flagship dengan desain premium dan kualitas kamera unggulan. Performa tinggi dipadukan dengan efisiensi baterai yang baik."                   },
    { id: 'elk006', nama: "Lenovo LOQ 15",           harga: 15000000, gambar: "src/assets/images/Elektronik/LPLOQ.jpeg",     diskon: 0,  featured: true, 
      deskripsi: "Laptop gaming entry-mid dengan performa solid. Cocok untuk gaming ringan sampai menengah serta kebutuhan editing dan produktivitas."  },
    { id: 'elk007', nama: "Asus TUF A15",            harga: 15000000, gambar: "src/assets/images/Elektronik/LPTUF.jpeg",     diskon: 8, 
      deskripsi: "Laptop gaming tangguh dengan build kuat dan performa stabil. Cocok untuk gamer yang butuh durability dan performa tanpa drama."                   },
    { id: 'elk008', nama: "Lenovo Legion 5",         harga: 18000000, gambar: "src/assets/images/Elektronik/LPLEGION.jpeg",  diskon: 0, 
      deskripsi: "Laptop gaming powerful dengan sistem pendingin yang baik. Performa tinggi untuk gaming berat dan multitasking."                   },
    { id: 'elk009', nama: "Asus ROG Strix",          harga: 28000000, gambar: "src/assets/images/Elektronik/LPROG.jpeg",     diskon: 12, 
      deskripsi: "Laptop gaming premium dengan desain futuristik dan performa kelas atas. Cocok buat yang pengen gaming maksimal tanpa kompromi."                  },
    { id: 'elk010', nama: "Macbook Pro M4 16''",     harga: 37000000, gambar: "src/assets/images/Elektronik/LPMACBOOK.jpeg", diskon: 0, 
      deskripsi: "Laptop profesional dengan performa super cepat dan efisiensi tinggi. Cocok untuk editing, programming, dan pekerjaan berat lainnya. Baterai tahan lama, layar tajam, dan ekosistem solid."                   },
    { id: 'elk011', nama: "Mechanical Keyboard",     harga:   450000, gambar: "src/assets/images/Elektronik/keyboard.jpg",   diskon: 20, 
      deskripsi: "Keyboard dengan switch mekanikal yang responsif dan tahan lama. Memberikan pengalaman mengetik dan gaming yang lebih presisi."                  },
    { id: 'elk012', nama: "Mouse Macro",             harga:   250000, gambar: "src/assets/images/Elektronik/mouse.jpg",      diskon: 0, 
      deskripsi: "Mouse gaming dengan fitur macro yang bisa dikustomisasi. Cocok untuk gaming maupun pekerjaan yang butuh shortcut cepat."                   },
    { id: 'elk013', nama: "Wireless Headset",        harga:   400000, gambar: "src/assets/images/Elektronik/headset.jpg",    diskon: 15, 
      deskripsi: "Headset tanpa kabel dengan kualitas suara jernih dan bass kuat. Dilengkapi desain ergonomis yang nyaman digunakan dalam waktu lama, cocok untuk gaming, meeting, maupun hiburan."                  },
    { id: 'elk014', nama: "Microphone",              harga:   850000, gambar: "src/assets/images/Elektronik/mic.jpg",        diskon: 0, 
      deskripsi: "Microphone berkualitas tinggi dengan sensitivitas suara yang baik. Cocok untuk streaming, podcast, recording, dan meeting online agar suara terdengar lebih jelas dan profesional."                   },
    { id: 'elk015', nama: "Speaker Stereo",          harga:   120000, gambar: "src/assets/images/Elektronik/speaker.jpg",    diskon: 0, 
      deskripsi: "Speaker dengan output suara stereo yang jernih dan bertenaga. Desain modern dengan efek lampu RGB, cocok untuk hiburan musik, gaming, dan menambah estetika setup."                   },
    { id: 'elk016', nama: "Webcam HD",               harga:  2500000, gambar: "src/assets/images/Elektronik/webcam.jpg",     diskon: 0, 
      deskripsi: "Webcam dengan resolusi 4K yang menghasilkan gambar tajam dan jernih. Cocok untuk video conference, streaming, dan kebutuhan konten digital."                   },
    { id: 'elk017', nama: "Kursi Gaming",            harga:   850000, gambar: "src/assets/images/Elektronik/kursi.jpeg",     diskon: 25, 
      deskripsi: "Kursi ergonomis dengan desain sporty yang memberikan kenyamanan maksimal. Dilengkapi sandaran yang dapat diatur, cocok untuk penggunaan lama saat gaming maupun bekerja."                  },
    { id: 'elk018', nama: "Deskmate",                harga:   220000, gambar: "src/assets/images/Elektronik/deskmate.jpg",   diskon: 0, 
      deskripsi: "Alas meja dengan permukaan halus yang mendukung pergerakan mouse lebih presisi. Desain unik menambah estetika meja kerja atau gaming setup."                   },
    { id: 'elk019', nama: "Monitor 16''",            harga:  3400000, gambar: "src/assets/images/Elektronik/monitor.jpg",    diskon: 10, 
      deskripsi: "Monitor dengan kualitas tampilan tajam dan warna yang hidup. Cocok untuk gaming, editing, maupun pekerjaan sehari-hari dengan pengalaman visual yang nyaman."                  },
    { id: 'elk020', nama: "Monitor Arm",             harga:   350000, gambar: "src/assets/images/Elektronik/monitorarm.jpg", diskon: 0, 
      deskripsi: "Dudukan monitor fleksibel yang dapat diatur posisi dan ketinggiannya. Membantu menghemat ruang meja serta meningkatkan kenyamanan dan ergonomi saat bekerja."                   }
  ],

  // BAHAN BAKU
  bahan_baku: [
    { id: 'bhn001', nama: "Kaldu Jamur 12 Sachet", harga:  60000, gambar: "src/assets/images/bahanBaku/KALDUJAMUR.jpg",   diskon: 0, 
      deskripsi: "Penyedap rasa berbahan jamur yang memberikan rasa gurih alami pada masakan. Cocok untuk berbagai jenis hidangan seperti tumis, sup, dan mie."                  },
    { id: 'bhn002', nama: "Masako 12 Sachet",      harga:  10000, gambar: "src/assets/images/bahanBaku/MASAKO.jpg",       diskon: 10, 
      deskripsi: "Kaldu bubuk praktis dengan rasa ayam yang lezat. Membantu memperkuat cita rasa masakan sehari-hari agar lebih nikmat."                 },
    { id: 'bhn003', nama: "Sasa 12 Sachet",        harga:  12000, gambar: "src/assets/images/bahanBaku/SASA.jpg",         diskon: 0, 
      deskripsi: "MSG berkualitas untuk meningkatkan rasa gurih pada makanan. Cocok digunakan dalam berbagai jenis masakan."                  },
    { id: 'bhn004', nama: "Gula Pasir 1 Kg",       harga:  15000, gambar: "src/assets/images/bahanBaku/GULA.jpg",         diskon: 0, 
      deskripsi: "Gula pasir berkualitas dengan tekstur halus dan bersih. Cocok untuk minuman, kue, dan berbagai olahan makanan."                  },
    { id: 'bhn005', nama: "Gula Merah 1 Kg",       harga:  22000, gambar: "src/assets/images/bahanBaku/GULAMERAH.jpg",    diskon: 5, 
      deskripsi: "Pemanis alami dengan cita rasa khas yang cocok untuk masakan tradisional dan minuman herbal."                  },
    { id: 'bhn006', nama: "Jahe 500 Gram",         harga:  16500, gambar: "src/assets/images/bahanBaku/JAHE.jpg",         diskon: 0, 
      deskripsi: "Jahe segar yang memberikan rasa hangat dan aroma khas. Cocok untuk minuman kesehatan dan bumbu masakan."                  },
    { id: 'bhn007', nama: "Kemiri 500 Gram",       harga:  38000, gambar: "src/assets/images/bahanBaku/KEMIRI.jpg",       diskon: 0, 
      deskripsi: "Bumbu dapur yang memberikan rasa gurih dan tekstur kental pada masakan seperti opor dan sambal."                  },
    { id: 'bhn008', nama: "Bawang Merah 1 Kg",     harga:  22000, gambar: "src/assets/images/bahanBaku/MERAH.jpg",        diskon: 0, 
      deskripsi: "Bumbu dasar wajib untuk berbagai masakan Indonesia. Memberikan aroma dan rasa khas yang menggugah selera."                  },
    { id: 'bhn009', nama: "Bawang Bombai 1 Kg",    harga:  30000, gambar: "src/assets/images/bahanBaku/BOMBAI.jpg",       diskon: 0, 
      deskripsi: "Bawang dengan rasa manis ringan yang cocok untuk tumisan, steak, dan berbagai hidangan western maupun lokal."                  },
    { id: 'bhn010', nama: "Bawang Putih 1 Kg",     harga:  35000, gambar: "src/assets/images/bahanBaku/PUTIH.jpg",        diskon: 0, 
      deskripsi: "Bumbu utama dengan aroma kuat dan rasa khas. Digunakan hampir di semua jenis masakan."                  },
    { id: 'bhn011', nama: "Telur 1 Kg",            harga:  33500, gambar: "src/assets/images/bahanBaku/TELUR.jpg",        diskon: 0, 
      deskripsi: "Sumber protein yang praktis dan serbaguna. Bisa diolah menjadi berbagai jenis makanan."                  },
    { id: 'bhn012', nama: "Tepung Terigu 1 Kg",    harga:  19000, gambar: "src/assets/images/bahanBaku/TEPUNG.jpg",       diskon: 0, 
      deskripsi: "Tepung serbaguna untuk membuat kue, gorengan, dan berbagai olahan makanan lainnya."                  },
    { id: 'bhn013', nama: "Tepung Sagu 1 Kg",      harga:  16000, gambar: "src/assets/images/bahanBaku/SAGU.jpg",         diskon: 0, 
      deskripsi: "Tepung dengan tekstur khas yang cocok untuk membuat makanan tradisional dan pengental masakan."                  },
    { id: 'bhn014', nama: "Olive Oil 1 Liter",     harga:  80000, gambar: "src/assets/images/bahanBaku/OLIVEOIL.jpg",     diskon: 15, 
      deskripsi: "Minyak sehat dengan kandungan lemak baik. Cocok untuk memasak maupun dressing salad."                 },
    { id: 'bhn015', nama: "Parsley 500 Gram",      harga:  65500, gambar: "src/assets/images/bahanBaku/PARSLEY.jpg",      diskon: 0, 
      deskripsi: "Rempah aromatik yang memberikan rasa segar pada masakan seperti pasta, sup, dan steak."                  },
    { id: 'bhn016', nama: "Whip Cream 500 Gram",   harga:  22000, gambar: "src/assets/images/bahanBaku/WHIPCREAM.jpg",    diskon: 0, 
      deskripsi: "Krim dengan tekstur lembut untuk membuat dessert, kue, dan minuman creamy."                  },
    { id: 'bhn017', nama: "Spread Cheese 1 Box",   harga:  19000, gambar: "src/assets/images/bahanBaku/CHEESESPREAD.jpg", diskon: 0, 
      deskripsi: "Keju oles dengan rasa gurih dan creamy. Cocok untuk roti, kue, atau camilan."                  },
    { id: 'bhn018', nama: "Butter 1 Box",          harga:  39000, gambar: "src/assets/images/bahanBaku/BUTTER.jpg",       diskon: 0, 
      deskripsi: "Mentega berkualitas untuk memasak dan membuat kue dengan aroma khas yang lezat."                  },
    { id: 'bhn019', nama: "Kismis 1 Kg",           harga:  60000, gambar: "src/assets/images/bahanBaku/KISMIS.jpg",       diskon: 20, 
      deskripsi: "Buah kering manis yang cocok untuk campuran kue, roti, atau camilan sehat."                 },
    { id: 'bhn020', nama: "Chocolate 1 Box",       harga:  27500, gambar: "src/assets/images/bahanBaku/COKLATBAR.jpg",    diskon: 0,  featured: true, 
      deskripsi: "Cokelat dengan rasa manis legit, cocok untuk baking, topping, atau camilan." }
  ],

  // GAME DIGITAL
  game: [
    { id: 'game001', nama: "Grand Theft Auto: V",             harga: 699000, gambar: "src/assets/images/Game/GTA5.jpg",            populer: true, diskon: 30, featured: true, 
      deskripsi: "Game open-world dengan kebebasan eksplorasi luas, menghadirkan cerita kriminal yang seru serta berbagai aktivitas di dunia yang hidup<br/> Genre: Action, Open World, Adventure" },
    { id: 'game002', nama: "Red Dead Redemption 2",           harga: 879000, gambar: "src/assets/images/Game/RDR2.jpg",            populer: true, diskon: 50, 
      deskripsi: "Petualangan koboi dengan cerita mendalam, dunia realistis, dan pengalaman eksplorasi yang sangat imersif. <br/> Genre: Action, Adventure, Open World"               },
    { id: 'game003', nama: "Elden Ring",                      harga: 899000, gambar: "src/assets/images/Game/EldenRing.jpg",                      diskon: 0, 
      deskripsi: "RPG dengan dunia luas dan pertarungan menantang, cocok untuk pemain yang menyukai eksplorasi dan tantangan tinggi. <br/> Genre: Action RPG, Souls-like, Open World"                },
    { id: 'game004', nama: "Black Myth: Wukong",              harga: 900000, gambar: "src/assets/images/Game/BlackMythWukong.jpg",                diskon: 0, 
      deskripsi: "Game aksi dengan visual memukau yang terinspirasi mitologi, menghadirkan pertarungan cepat dan sinematik. <br/> Genre: Action, RPG"                },
    { id: 'game005', nama: "FarCry: 6",                       harga: 799000, gambar: "src/assets/images/Game/Farcry6.jpg",                        diskon: 40, 
      deskripsi: "FPS open-world dengan latar revolusi, penuh aksi dan eksplorasi. <br/> Genre: FPS, Action, Open World"               },
    { id: 'game006', nama: "Cyberpunk 2077",                  harga: 899000, gambar: "src/assets/images/Game/CyberPunk2077.jpg",   populer: true, diskon: 25, 
      deskripsi: "Dunia futuristik dengan cerita mendalam, pilihan karakter, dan gameplay bebas dalam kota modern. <br/> Genre: RPG, Open World, Sci-Fi"               },
    { id: 'game007', nama: "Assassin's Creed: Origins",       harga: 399000, gambar: "src/assets/images/Game/AssasinCreed.jpg",                   diskon: 35, 
      deskripsi: "Jelajahi Mesir kuno dengan gameplay stealth dan combat dalam cerita asal-usul Assassin. <br/> Genre: Action RPG, Adventure, Open World"               },
    { id: 'game008', nama: "Hogwarts Legacy",                 harga: 899000, gambar: "src/assets/images/Game/HogwartsLegacy.jpg",                 diskon: 15, 
      deskripsi: "RPG dunia sihir yang memungkinkan pemain belajar sihir, menjelajah Hogwarts, dan menentukan jalan cerita. <br/> Genre: RPG, Open World, Fantasy"               },
    { id: 'game009', nama: "Marvel Spiderman: Remastered",    harga: 900000, gambar: "src/assets/images/Game/MarvelSpiderman.jpg",                diskon: 35, 
      deskripsi: "Game superhero dengan mekanik ayunan ikonik dan pertarungan dinamis di kota besar. <br/> Genre: Action, Adventure, Open World"                },
    { id: 'game010', nama: "Marvel Spiderman: Miles Morales", harga: 750000, gambar: "src/assets/images/Game/SpidermanMiles.jpg",  populer: true, diskon: 10, 
      deskripsi: "Petualangan Spider-Man baru dengan kemampuan unik dan gameplay lebih cepat. <br/> Genre: Action, Adventure"               },
    { id: 'game011', nama: "Overcooked: 2",                   harga: 349000, gambar: "src/assets/images/Game/Overcooked2.jpg",                    diskon: 0, 
      deskripsi: "Game memasak co-op yang seru dan chaotic, cocok dimainkan bersama teman. <br/> Genre: Simulation, Party, Co-op"                },
    { id: 'game012', nama: "It Takes Two",                    harga: 470000, gambar: "src/assets/images/Game/ItTakesTwo.jpg",                     diskon: 0, 
      deskripsi: "Game co-op dengan gameplay kreatif dan cerita emosional tentang kerja sama. <br/> Genre: Adventure, Puzzle, Co-op"                },
    { id: 'game013', nama: "Split Fiction",                   harga: 350000, gambar: "src/assets/images/Game/SplitFiction.jpg",                   diskon: 0, 
      deskripsi: "Petualangan kooperatif dengan dunia unik dan gameplay variatif. <br/> Genre: Adventure, Co-op"                },
    { id: 'game014', nama: "Raft: Survival",                  harga: 295000, gambar: "src/assets/images/Game/Raft.jpg",                           diskon: 0, 
      deskripsi: "Bertahan hidup di tengah laut dengan membangun rakit dan mengumpulkan resource. <br/> Genre: Survival, Adventure"                },
    { id: 'game015', nama: "The Forest",                      harga: 299000, gambar: "src/assets/images/Game/TheForest.jpg",                      diskon: 0, 
      deskripsi: "Game survival dengan elemen horor di hutan misterius penuh ancaman. <br/> Genre: Survival, Horror"                },
    { id: 'game016', nama: "Subnautica",                      harga: 299000, gambar: "src/assets/images/Game/Subnautica.jpg",                     diskon: 0, 
      deskripsi: "Eksplorasi dunia bawah laut yang luas sambil bertahan hidup dan mengungkap misteri. <br/> Genre: Survival, Adventure, Exploration"                },
    { id: 'game017', nama: "EA: Sports FC 26",                harga: 899000, gambar: "src/assets/images/Game/EaSport.jpg",                        diskon: 5, 
      deskripsi: "Game sepak bola realistis dengan berbagai tim dan mode permainan kompetitif. <br/> Genre: Sports, Simulation"                },
    { id: 'game018', nama: "Minecraft",                       harga: 470000, gambar: "src/assets/images/Game/Minecraft.jpg",       populer: true, diskon: 0,  featured: true, 
      deskripsi: "Game sandbox kreatif untuk membangun, bertahan hidup, dan eksplorasi tanpa batas. <br/> Genre: Sandbox, Survival, Adventure" },
    { id: 'game019', nama: "Stardew Valley",                  harga: 199000, gambar: "src/assets/images/Game/StardewValley.jpg",                  diskon: 0, 
      deskripsi: "Simulasi bertani santai dengan berbagai aktivitas seperti berkebun dan membangun relasi. <br/> Genre: Simulation, RPG, Casual"                },
    { id: 'game020', nama: "TheoTown",                        harga:  50000, gambar: "src/assets/images/Game/TheoTown.jpg",                       diskon: 0, 
      deskripsi: "Game simulasi menjadi walikota dengan kendali penuh, anda bia membangun lahan sawit sampai mengatur tata letak kota. <br/> Genre: Simulation, Strategy"                }
  ],

  // DIY GIVE
  diy_give: [
    { id: 'diy001', nama: "Surprise Kado",         harga:  450000, gambar: "src/assets/images/DIY_Give/kado.jpg",         diskon: 0, 
      deskripsi: "Paket hadiah dengan tampilan menarik yang siap diberikan untuk orang tersayang, praktis tanpa perlu mikir isi dari nol."                },
    { id: 'diy002', nama: "Exploding Box",         harga:  150000, gambar: "src/assets/images/DIY_Give/explodingbox.jpg", diskon: 10, 
      deskripsi: "Kotak hadiah unik yang saat dibuka menampilkan dekorasi dan foto, memberikan kejutan yang langsung terasa."               },
    { id: 'diy003', nama: "Flower Bouquet",        harga:  250000, gambar: "src/assets/images/DIY_Give/flowerbuket.jpg",  diskon: 0,  
      featured: true, deskripsi: "Rangkaian bunga cantik untuk hadiah atau dekorasi dengan kesan elegan dan romantis, hampir selalu jadi pilihan aman." },
    { id: 'diy004', nama: "Scrapbook",             harga:  75000,  gambar: "src/assets/images/DIY_Give/scrapbook.jpg",    diskon: 0, 
      deskripsi: "Buku kreatif untuk menyimpan kenangan dalam bentuk foto dan tulisan, cocok untuk kamu yang lagi niat jadi lebih perhatian."                },
    { id: 'diy005', nama: "Sketchbook",            harga:  40000,  gambar: "src/assets/images/DIY_Give/sketchbook.jpg",   diskon: 0, 
      deskripsi: "Buku gambar dengan kertas berkualitas untuk menggambar atau menuangkan ide, atau sekadar coretan iseng."                },
    { id: 'diy006', nama: "Notebook",              harga:  25000,  gambar: "src/assets/images/DIY_Give/notebook.jpg",     diskon: 15, 
      deskripsi: "Buku catatan praktis untuk aktivitas sehari-hari dengan desain simpel, isinya tergantung niat kamu."               },
    { id: 'diy007', nama: "Book Mark",             harga:  3000,   gambar: "src/assets/images/DIY_Give/bookmark.jpg",     diskon: 0, 
      deskripsi: "Penanda buku dengan desain menarik untuk memudahkan membaca tanpa harus cari halaman lagi."                },
    { id: 'diy008', nama: "Kit Krayon",            harga:  95000,  gambar: "src/assets/images/DIY_Give/krayon.jpg",       diskon: 0, 
      deskripsi: "Set krayon dengan warna lengkap untuk menggambar dan mewarnai, cocok untuk semua umur yang lagi butuh santai."                },
    { id: 'diy009', nama: "Kit Pensil Warna",      harga:  120000, gambar: "src/assets/images/DIY_Give/pensilwarna.jpg",  diskon: 0, 
      deskripsi: "Set pensil warna dengan pilihan lengkap untuk hasil gambar lebih hidup ga kaya hidupmu yang ga berwarna."                },
    { id: 'diy010', nama: "Keychain Nama",         harga:  35000,  gambar: "src/assets/images/DIY_Give/keychainname.jpg", diskon: 0, 
      deskripsi: "Gantungan kunci dengan desain bunga yang cantik sebagai aksesoris kecil yang tetap menarik."                },
    { id: 'diy011', nama: "Gelang",                harga:  20000,  gambar: "src/assets/images/DIY_Give/gelang.jpg",       diskon: 0, 
      deskripsi: "Aksesoris gelang dengan desain menarik untuk menunjang penampilan sehari-hari tanpa usaha berlebihan."                },
    { id: 'diy012', nama: "Tumbler",               harga:  180000, gambar: "src/assets/images/DIY_Give/tumbler.jpg",      diskon: 20, 
      featured: true, deskripsi: "Botol minum praktis dengan desain menarik yang mudah dibawa, biar kamu nggak lupa minum." },
    { id: 'diy013', nama: "Casing HP",             harga:  42000,  gambar: "src/assets/images/DIY_Give/casehp.jpg",       diskon: 0, 
      deskripsi: "Pelindung HP dengan desain menarik yang membantu melindungi dari benturan yang tidak direncanakan."                },
    { id: 'diy014', nama: "Dompet Mini",           harga:  35000,  gambar: "src/assets/images/DIY_Give/dompet.jpg",       diskon: 0, 
      deskripsi: "Dompet kecil yang ringan dan praktis untuk menyimpan uang dan kartu, walau isinya kadang minimalis."                },
    { id: 'diy015', nama: "Totebag Hand Painting", harga:  75000,  gambar: "src/assets/images/DIY_Give/totebag.jpg",      diskon: 0, 
      deskripsi: "Tas dengan desain lukisan tangan yang unik dan artistik, cocok untuk aktivitas santai atau sekadar gaya."                },
    { id: 'diy016', nama: "Frame Foto",            harga:  45000,  gambar: "src/assets/images/DIY_Give/frame.jpg",        diskon: 0, 
      deskripsi: "Bingkai foto untuk menyimpan dan menampilkan momen berharga sebagai dekorasi yang lebih hidup (cocok untuk yang HTS)."                },
    { id: 'diy017', nama: "Kartu Ucapan",          harga:  95000,  gambar: "src/assets/images/DIY_Give/kartuucapan.jpg",  diskon: 0, 
      deskripsi: "Kartu dengan desain menarik untuk menyampaikan pesan yang kadang lebih bermakna daripada chat."                },
    { id: 'diy018', nama: "Candle",                harga:  220000, gambar: "src/assets/images/DIY_Give/lilin.jpg",        diskon: 10, 
      deskripsi: "Lilin aromaterapi dengan wangi menenangkan untuk menciptakan suasana rileks di ruangan."               },
    { id: 'diy019', nama: "Mini Camera",           harga:  499999, gambar: "src/assets/images/DIY_Give/minicamera.jpg",   diskon: 0, 
      deskripsi: "Kamera mini dengan desain lucu untuk mengabadikan momen tanpa ribet."                },
    { id: 'diy020', nama: "Mini Album",            harga:  80000,  gambar: "src/assets/images/DIY_Give/minialbum.jpg",    diskon: 5, 
      deskripsi: "Album foto kecil untuk menyimpan kenangan penting agar tidak hanya tersimpan di galeri."                }
  ],

  // BUKU
  buku: [
    { id: 'buku001', nama: "Seporsi Mie Ayam sebelum Mati (Novel)",         harga:  95000, gambar: "src/assets/images/Buku/seporsi.jpeg",                 diskon: 0, 
      deskripsi: "Novel reflektif tentang kehidupan, kehilangan, dan makna sederhana dari kebahagiaan. Cerita mengajak pembaca merenungi arti pertemanan dan waktu yang terus berjalan. <br> Penulis : Brian Khrisna (±365 halaman)"                },
    { id: 'buku002', nama: "Laut Bercerita (Novel)",                        harga:  99999, gambar: "src/assets/images/Buku/laut.jpeg",                    diskon: 10, 
      deskripsi: "Kisah perjuangan aktivis mahasiswa di masa Orde Baru yang penuh ketegangan, kehilangan, dan pencarian keadilan. Emosional dan menyentuh. <br> Penulis : Leila S. Chudori (±379 halaman)"               },
    { id: 'buku003', nama: "Hujan (Novel)",                                 harga:  88000, gambar: "src/assets/images/Buku/hujan.jpeg",                   diskon: 0, 
      deskripsi: "Perpaduan romansa dan fiksi ilmiah tentang cinta, kehilangan, dan kesempatan kedua di masa depan yang canggih. <br> Penulis : Tere Liye (±320 halaman)"                },
    { id: 'buku004', nama: "Dompet Ayah Sepatu Ibu (Novel)",                harga:  85000, gambar: "src/assets/images/Buku/dompetsepatu.jpeg",            diskon: 0, 
      deskripsi: "Cerita hangat tentang keluarga, pengorbanan orang tua, dan perjuangan ekonomi yang dekat dengan kehidupan sehari-hari. <br> Penulis : J.S. Khairen (±220 halaman)"                },
    { id: 'buku005', nama: "Bumi Manusia (Novel)",                          harga:  12000, gambar: "src/assets/images/Buku/bumimanusia.jpeg",             diskon: 0, 
      deskripsi: "Roman sejarah tentang cinta dan perjuangan di masa kolonial Belanda, penuh kritik sosial dan semangat perlawanan. <br> Penulis : Pramoedya Ananta Toer (±535 halaman)"                },
    { id: 'buku006', nama: "Atomic Habits (Growth)",                        harga:  135000, gambar: "src/assets/images/Buku/atomic.jpeg",                 diskon: 15,  featured: true, 
      deskripsi: "Panduan membangun kebiasaan kecil yang berdampak besar untuk perubahan hidup jangka panjang secara praktis dan terstruktur. <br> Penulis : James Clear (±320 halaman)" },
    { id: 'buku007', nama: "Berani Tidak Disukai (Growth)",                 harga:  120000, gambar: "src/assets/images/Buku/beranitidakdisukai.jpeg",     diskon: 0, 
      deskripsi: "Buku pengembangan diri berbasis psikologi Adler yang mengajarkan cara hidup lebih bebas tanpa terjebak ekspektasi orang lain. <br> Penulis : Ichiro Kishimi & Fumitake Koga (±288 halaman)"                },
    { id: 'buku008', nama: "Thinking, Fast and Slow (Growth)",              harga:  150000, gambar: "src/assets/images/Buku/fastslow.jpeg",               diskon: 0, 
      deskripsi: "Membahas dua sistem berpikir manusia: cepat (intuisi) dan lambat (logis), serta bagaimana keduanya memengaruhi keputusan. <br> Penulis : Daniel Kahneman (±499 halaman)"                },
    { id: 'buku009', nama: "Filosofi Teras (Growth)",                       harga:  99000, gambar: "src/assets/images/Buku/filosofiteras.jpeg",           diskon: 0, 
      deskripsi: "Pengantar filsafat Stoikisme yang dikemas ringan dan relevan dengan kehidupan modern. <br> Penulis : Henry Manampiring (±346 halaman)"                },
    { id: 'buku010', nama: "Mindset (Growth)",                              harga:  125000, gambar: "src/assets/images/Buku/mindset.jpeg",                diskon: 0, 
      deskripsi: "Menjelaskan perbedaan fixed mindset dan growth mindset serta dampaknya pada kesuksesan dan perkembangan diri. <br> Penulis : Carol S. Dweck (±276 halaman)"                },
    { id: 'buku011', nama: "Animal Farm (Classic)",                         harga:  65000, gambar: "src/assets/images/Buku/animalfarm.jpeg",              diskon: 0, 
      deskripsi: "Novel satir politik tentang pemberontakan hewan yang menyindir kekuasaan dan korupsi. <br> Penulis : George Orwell (±112 halaman)"                },
    { id: 'buku012', nama: "The Alchemist (Classic)",                       harga:  85000, gambar: "src/assets/images/Buku/thealchemist.jpeg",            diskon: 20, 
      deskripsi: "Kisah perjalanan spiritual seorang gembala dalam mencari harta karun dan makna takdir hidupnya. <br> Penulis : Paulo Coelho (±208 halaman)"               },
    { id: 'buku013', nama: "1984 (Classic)",                                harga:  90000, gambar: "src/assets/images/Buku/1984.jpeg",                    diskon: 0, 
      deskripsi: "Novel distopia tentang pengawasan totaliter dan manipulasi kebenaran dalam masyarakat masa depan. <br> Penulis : George Orwell (±328 halaman)"                },
    { id: 'buku014', nama: "The Metamorphosis (Classic)",                   harga:  70000, gambar: "src/assets/images/Buku/metamorphosis.jpeg",           diskon: 0, 
      deskripsi: "Cerita tentang seorang pria yang berubah menjadi serangga dan menghadapi keterasingan serta penolakan sosial. <br> Penulis : Franz Kafka (±200 halaman edisi lengkap)"                },
    { id: 'buku015', nama: "The Little Prince (Classic)",                   harga:  75000, gambar: "src/assets/images/Buku/thelittle.jpeg",               diskon: 0, 
      deskripsi: "Dongeng filosofis tentang persahabatan, cinta, dan cara orang dewasa memandang dunia. <br> Penulis : Antoine de Saint-Exupéry (±96 halaman)"                },
    { id: 'buku016', nama: "Sapiens (History)",                             harga:  160000, gambar: "src/assets/images/Buku/sapiens.jpeg",                diskon: 0, 
      deskripsi: "Mengulas perjalanan evolusi manusia dari pemburu-pengumpul hingga peradaban modern serta dampaknya bagi dunia saat ini. <br> Penulis : Yuval Noah Harari (±498 halaman)"                },
    { id: 'buku017', nama: "Perang Dunia I (History)",                      harga:  95000, gambar: "src/assets/images/Buku/pd1.jpeg",                     diskon: 0, 
      deskripsi: "Membahas latar belakang, jalannya konflik, hingga dampak global Perang Dunia Pertama terhadap tatanan dunia. <br> Penulis : (Edisi Indonesia umum) (±300 halaman)"                },
    { id: 'buku018', nama: "Perang Dunia II (History)",                     harga:  135000, gambar: "src/assets/images/Buku/pd2.jpeg",                    diskon: 10, 
      deskripsi: "Ulasan lengkap tentang konflik terbesar abad ke-20, tokoh penting, serta perubahan besar yang ditimbulkannya. <br> Penulis : (Edisi Indonesia umum) (±450 halaman)"               },
    { id: 'buku019', nama: "Revolusi Prancis (History)",                    harga:  90000, gambar: "src/assets/images/Buku/prancis.jpeg",                 diskon: 0, 
      deskripsi: "Mengulas perkembangan filsafat dan pemikiran intelektual Prancis dari masa klasik hingga modern. <br> Penulis : (Edisi Indonesia umum) (±250 halaman)"                },
    { id: 'buku020', nama: "Metode Jakarta (History)",                      harga:  135000, gambar: "src/assets/images/Buku/jakarta.jpeg",                diskon: 5, 
      deskripsi: "Refleksi sosial dan politik tentang Indonesia dari berbagai sudut pandang sejarah dan budaya. <br> Penulis : (Edisi Indonesia umum) (±230 halaman)"                }
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
