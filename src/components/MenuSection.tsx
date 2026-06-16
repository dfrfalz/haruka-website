"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LayoutGrid, Music, Image as ImageIcon, Video, Sparkles, X, Terminal, Command, Info, Users, Crown, Gamepad2 } from "lucide-react";

const popularMenus = [
  { cmd: ".tiktok", icon: Video, desc: "Download video dari TikTok tanpa watermark dengan kualitas tinggi." },
  { cmd: ".instagram", icon: ImageIcon, desc: "Download foto, video, reels, dan story dari Instagram." },
  { cmd: ".sticker", icon: Sparkles, desc: "Ubah gambar atau video pendek menjadi stiker WhatsApp." },
  { cmd: ".hd", icon: ImageIcon, desc: "Tingkatkan resolusi dan perjelas foto yang buram/pecah." },
  { cmd: ".play", icon: Music, desc: "Cari dan putar lagu favorit Anda secara langsung." },
];

const allMenus = [
  {
    category: "MEDIA TOOLS",
    icon: Video,
    color: "text-blue-500",
    bg: "bg-blue-100",
    commands: [
      { name: ".getpp", desc: "Mengambil foto profil pengguna WhatsApp" },
      { name: ".hd", desc: "Meningkatkan resolusi dan kualitas foto blur" },
      { name: ".img2pdf", desc: "Mengubah gambar menjadi file dokumen PDF" },
      { name: ".instagram", desc: "Download postingan foto/video/reels/story Instagram" },
      { name: ".iqc", desc: "Membuat desain quote maker dari teks Anda" },
      { name: ".iqc2", desc: "Membuat desain quote maker versi desain 2" },
      { name: ".lirik", desc: "Mencari lirik dari judul lagu pilihan" },
      { name: ".pdf", desc: "Mengubah teks panjang menjadi dokumen PDF" },
      { name: ".pin", desc: "Download media gambar/video dari Pinterest" },
      { name: ".play", desc: "Mencari dan memutar lagu dari YouTube" },
      { name: ".rvo", desc: "Membaca dan menyimpan pesan 'View Once' (Sekali Lihat)" },
      { name: ".setpp", desc: "Mengubah foto profil bot" },
      { name: ".ssweb", desc: "Mengambil screenshot penuh dari sebuah URL website" },
      { name: ".swdl", desc: "Download status WhatsApp teman" },
      { name: ".tiktok", desc: "Download video TikTok tanpa watermark (HD)" },
      { name: ".toimg", desc: "Mengubah stiker bergerak/diam menjadi gambar biasa" },
      { name: ".tourl", desc: "Upload gambar ke server sementara menjadi link URL" },
      { name: ".tovideo", desc: "Mengubah stiker bergerak (GIF) menjadi video MP4" },
      { name: ".uhd", desc: "Meningkatkan ketajaman foto ke tingkat Ultra HD" },
      { name: ".ytmp3", desc: "Download audio/musik (MP3) dari link YouTube" },
      { name: ".ytmp4", desc: "Download video (MP4) dari link YouTube" }
    ]
  },
  {
    category: "EDIT FOTO",
    icon: ImageIcon,
    color: "text-purple-500",
    bg: "bg-purple-100",
    commands: [
      { name: ".harukaedit 🅟", desc: "Filter dan koreksi warna otomatis gaya eksklusif Haruka" },
      { name: ".to4k", desc: "Upscale resolusi gambar menjadi 4K" },
      { name: ".toalbino 🅟", desc: "Filter foto menjadi nuansa pucat/albino" },
      { name: ".toanime", desc: "Mengubah wajah orang di foto menjadi karakter anime" },
      { name: ".tobabi", desc: "Filter wajah lucu bertema babi" },
      { name: ".tobadut", desc: "Filter wajah badut lucu" },
      { name: ".toblur", desc: "Memberi efek blur/sensor pada bagian tertentu" },
      { name: ".tobotak", desc: "Efek menghilangkan rambut (botak) pada foto" },
      { name: ".tocadar", desc: "Menambahkan cadar ke wajah perempuan di foto" },
      { name: ".tocrayon", desc: "Efek lukisan krayon pada gambar" },
      { name: ".toglow 🅟", desc: "Efek glowing dan mencerahkan wajah maksimal" },
      { name: ".togta", desc: "Mengubah foto dengan gaya poster game GTA" },
      { name: ".tohantu", desc: "Filter seram menyerupai hantu" },
      { name: ".tohitam", desc: "Ubah foto menjadi hitam putih (vintage)" },
      { name: ".tojas", desc: "Memasangkan jas formal secara otomatis pada foto" },
      { name: ".tojawa", desc: "Memakaikan pakaian adat Jawa (blangkon, dll)" },
      { name: ".tokaya", desc: "Filter gaya mewah ala sultan/orang kaya" },
      { name: ".tolego", desc: "Mengubah foto menjadi susunan balok Lego" },
      { name: ".tolego2", desc: "Variasi style balok Lego (Versi 2)" },
      { name: ".tolukisan", desc: "Mengubah foto menjadi lukisan kanvas estetik" },
      { name: ".tomcpe", desc: "Efek gaya kotak-kotak Minecraft" },
      { name: ".tomcpe2", desc: "Efek gaya kotak-kotak Minecraft (Versi 2)" },
      { name: ".tominiatur", desc: "Efek tilt-shift agar objek terlihat seperti miniatur kecil" },
      { name: ".tomirror 🅟", desc: "Efek cermin simetris (kiri-kanan sama)" },
      { name: ".tomiskin", desc: "Filter gembel/berantakan lucu" },
      { name: ".tomonyet", desc: "Filter hewan primata/monyet" },
      { name: ".tomullet", desc: "Menambahkan model rambut mullet gaya 80an" },
      { name: ".toninja", desc: "Memakaikan kostum dan topeng ninja" },
      { name: ".topacar", desc: "Menggabungkan foto Anda agar terlihat berpacaran" },
      { name: ".topemadam", desc: "Kostum seragam pemadam kebakaran" },
      { name: ".topengantin", desc: "Gaun dan jas setelan pengantin pernikahan" },
      { name: ".topixel", desc: "Efek retro pixel art 8-bit" },
      { name: ".topocong", desc: "Filter horor pocong" },
      { name: ".topolisi", desc: "Memakaikan seragam dinas kepolisian" },
      { name: ".topunk", desc: "Filter gaya rambut dan aksesoris punk rock" },
      { name: ".toputih", desc: "Mencerahkan warna kulit secara ekstrim" },
      { name: ".torobot", desc: "Mengubah subjek manusia menjadi cyborg/robot" },
      { name: ".tosd", desc: "Memakaikan seragam sekolah anak SD (Merah Putih)" },
      { name: ".tosma", desc: "Memakaikan seragam anak SMA (Abu-abu)" },
      { name: ".tosmp", desc: "Memakaikan seragam anak SMP (Biru Putih)" },
      { name: ".tosunda", desc: "Pakaian tradisional khas adat Sunda" },
      { name: ".tovintage", desc: "Filter warna foto kuno kecoklatan tahun 90an" }
    ]
  },
  {
    category: "STICKER & AI",
    icon: Sparkles,
    color: "text-emerald-500",
    bg: "bg-emerald-100",
    commands: [
      { name: ".brat", desc: "Membuat stiker teks gaya Brat berwarna hijau" },
      { name: ".brathd", desc: "Membuat stiker Brat dengan resolusi super jernih (HD)" },
      { name: ".bratpink", desc: "Membuat stiker teks Brat dengan tema warna pink" },
      { name: ".bratvid", desc: "Membuat stiker animasi video dari teks Brat" },
      { name: ".caristicker 🅟", desc: "Mencari stiker WhatsApp acak dari database server" },
      { name: ".emojimix", desc: "Menggabungkan dua emoji standar menjadi satu stiker unik" },
      { name: ".hapuswm", desc: "Menghapus watermark/teks yang menempel pada media" },
      { name: ".removebg", desc: "Menghilangkan latar belakang foto (background transparan)" },
      { name: ".smeme", desc: "Menambahkan teks di atas dan bawah foto/stiker (meme)" },
      { name: ".stiker / .s", desc: "Mengubah gambar atau video pendek menjadi stiker WA" },
      { name: ".swm", desc: "Membuat stiker dengan mencantumkan nama pembuat (watermark Anda)" }
    ]
  },
  {
    category: "FUN",
    icon: Gamepad2,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    commands: [
      { name: ".karaoke", desc: "Memisahkan suara vokal dan musik instrumen dari file audio" },
      { name: ".morse", desc: "Menerjemahkan teks ke sandi morse atau sebaliknya" },
      { name: ".tebakgambar", desc: "Mulai permainan menebak gambar tersembunyi" }
    ]
  },
  {
    category: "GRUP",
    icon: Users,
    color: "text-cyan-500",
    bg: "bg-cyan-100",
    commands: [
      { name: ".delete", desc: "Menghapus pesan dari anggota grup (Khusus Admin Grup)" },
      { name: ".demote", desc: "Mencabut status admin dari seorang anggota" },
      { name: ".hidetag", desc: "Menandai seluruh anggota grup tanpa menampilkan list nomor" },
      { name: ".promote", desc: "Menaikkan jabatan member biasa menjadi admin grup" },
      { name: ".spamtag", desc: "Menandai seluruh anggota grup berulang kali" }
    ]
  },
  {
    category: "INFORMASI BOT",
    icon: Info,
    color: "text-slate-500",
    bg: "bg-slate-200",
    commands: [
      { name: ".allmenu", desc: "Menampilkan semua list perintah tanpa kategori" },
      { name: ".buyprem", desc: "Informasi harga dan cara berlangganan status premium" },
      { name: ".donasi", desc: "Dukung operasional bot dengan memberikan donasi" },
      { name: ".help", desc: "Menampilkan panduan dasar cara pemakaian bot" },
      { name: ".menu", desc: "Menampilkan menu utama dan status bot" },
      { name: ".request", desc: "Mengirimkan saran atau komplain bug langsung ke pemilik bot" }
    ]
  },
  {
    category: "OWNER",
    icon: Crown,
    color: "text-rose-500",
    bg: "bg-rose-100",
    commands: [
      { name: ".addbot", desc: "Menerima undangan untuk memasukkan bot ke dalam grup" },
      { name: ".addcase", desc: "Menyuntikkan kode fitur baru secara dinamis" },
      { name: ".addprem", desc: "Mendaftarkan nomor pengguna ke database premium" },
      { name: ".addtoxic", desc: "Menambah kata-kata terlarang ke sistem filter grup" },
      { name: ".antidel", desc: "Fitur mencegat dan memforward pesan yang dihapus pengguna" },
      { name: ".autodl", desc: "Menghidupkan fitur auto-download media dari sosmed" },
      { name: ".autosw", desc: "Menghidupkan fitur otomatis melihat story WA pengguna" },
      { name: ".batalprem", desc: "Membatalkan pesanan / status pendaftaran premium" },
      { name: ".delcase", desc: "Menghapus kode fitur tertentu dari sistem" },
      { name: ".delprem", desc: "Mencabut izin premium dari pengguna" },
      { name: ".deltoxic", desc: "Menghapus kata-kata dari daftar sensor kata kasar" },
      { name: ".editcase", desc: "Mengedit script fitur (case) langsung via chat" },
      { name: ".getcase", desc: "Melihat isi baris kode dari sebuah fitur" },
      { name: ".getsc", desc: "Mengunduh file script (source code) bot keseluruhan" },
      { name: ".grup", desc: "Mengubah setelan grup (Hanya Admin bisa chat / Semua member)" },
      { name: ".listprem", desc: "Melihat daftar pengguna yang berlangganan premium saat ini" },
      { name: ".listtoxic", desc: "Melihat daftar hitam kata-kata sensor/kasar" },
      { name: ".on", desc: "Mengubah status bot dari tidur menjadi merespon (Online)" },
      { name: ".restart", desc: "Merestart server / script bot" },
      { name: ".toxic", desc: "Setelan umum untuk menyalakan/mematikan filter bahasa kasar" }
    ]
  }
];

export default function MenuSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="menu" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative scroll-mt-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-4 bg-white/60 border border-blue-100 shadow-sm">
              <Command size={16} className="text-blue-500" />
              <span className="text-sm font-medium tracking-wide text-slate-700">RATUSAN FITUR</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Menu Paling Populer</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Haruka dilengkapi dengan ratusan perintah untuk membantu aktivitas digital Anda. Berikut adalah beberapa yang paling sering digunakan.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularMenus.map((menu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel bg-white/60 p-6 rounded-3xl border border-white/80 hover:bg-white/80 transition-all shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 group cursor-default"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                  <menu.icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-slate-800 font-mono bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">{menu.cmd}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{menu.desc}</p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: popularMenus.length * 0.1 }}
            className="bg-gradient-to-br from-blue-600 to-cyan-500 p-6 rounded-3xl border border-white/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all flex flex-col items-center justify-center text-center cursor-pointer group relative overflow-hidden"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all backdrop-blur-sm z-10">
              <LayoutGrid size={32} />
            </div>
            <h3 className="relative font-bold text-xl text-white mb-1 z-10">Lihat Seluruh Menu</h3>
            <p className="relative text-blue-100 text-sm z-10">Jelajahi ratusan fitur keren lainnya</p>
          </motion.div>
        </div>
      </section>

      {/* Full Menu Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8 sm:px-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-4xl bg-[#f8fafc] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-white"
            >
              {/* Modal Header */}
              <div className="px-6 md:px-8 py-5 border-b border-slate-200 bg-white flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-sm">
                    <Terminal size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">Daftar Menu Haruka</h2>
                    <p className="text-sm text-slate-500 font-medium">Lebih dari 100+ perintah siap membantu Anda</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-600 text-slate-500 flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body (Scrollable Table View) */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar bg-slate-50/50">
                <div className="space-y-10">
                  {allMenus.map((cat, idx) => (
                    <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
                      {/* Category Header */}
                      <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
                        <div className={`w-10 h-10 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center`}>
                          <cat.icon size={20} />
                        </div>
                        <h3 className="font-bold text-slate-800 tracking-tight text-lg">{cat.category}</h3>
                      </div>
                      
                      {/* Commands Rows (Excel-like List) */}
                      <div className="divide-y divide-slate-100">
                        {cat.commands.map((cmd, i) => (
                          <div key={i} className="flex flex-col sm:flex-row sm:items-center px-6 py-3.5 hover:bg-blue-50/50 transition-colors group">
                            <div className="w-full sm:w-1/3 mb-2 sm:mb-0 flex items-center">
                              <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-700 transition-colors shadow-sm">
                                {cmd.name}
                              </span>
                            </div>
                            <div className="w-full sm:w-2/3 text-sm text-slate-600 font-medium leading-relaxed">
                              {cmd.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
