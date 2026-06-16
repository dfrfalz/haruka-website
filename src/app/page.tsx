"use client";

import { motion, useScroll } from "framer-motion";
import { MessageCircle, Zap, Image as ImageIcon, Sparkles, CheckCheck, Send, Bot, ChevronRight, Smartphone, BrainCircuit } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import Link from "next/link";

export default function PortfolioPage() {
  const [messages, setMessages] = useState<{ text?: string, isUser: boolean, image?: string, isSticker?: boolean }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const sequence = [
      { text: "Hai Haruka!", isUser: true, delay: 1000 },
      { text: "Halo! Aku Haruka, asisten virtual cerdasmu 💫 Ada yang bisa aku bantu hari ini?", isUser: false, delay: 2500 },
      { text: "Haruka bisa apa aja sih?", isUser: true, delay: 3000 },
      { text: "Banyak banget! Haruka bisa buatin stiker, download lagu/video, main tebak-tebakan, sampai bantu cari jawaban soal lho! 🚀", isUser: false, delay: 3500 },
      { text: "Wah, keren banget! 🤩 Coba bikinin stiker dong", isUser: true, delay: 3000 },
      { text: "Boleh! Kirim aja fotonya terus kasih caption .sticker ya!", isUser: false, delay: 2500 },
      { text: ".sticker", image: "https://res.cloudinary.com/dvpm3w0ed/image/upload/v1781596118/lvkddsl4q83eiblznjvc.jpg", isUser: true, delay: 4000 },
      { text: "Tunggu sebentar ya, Haruka lagi proses... ⏳", isUser: false, delay: 2000 },
      { image: "https://res.cloudinary.com/dvpm3w0ed/image/upload/v1781596118/lvkddsl4q83eiblznjvc.jpg", isSticker: true, isUser: false, delay: 3000 },
      { text: "Ini dia stikernya! ✨", isUser: false, delay: 1000 },
    ];

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const playSequence = () => {
      if (currentIndex >= sequence.length) {
        // Reset after a long pause to loop the animation
        timeoutId = setTimeout(() => {
          setMessages([]);
          currentIndex = 0;
          playSequence();
        }, 5000);
        return;
      }

      const currentStep = sequence[currentIndex];

      // If it's the bot's turn, show typing indicator first
      if (!currentStep.isUser) {
        setIsTyping(true);
        timeoutId = setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, currentStep]);
          currentIndex++;
          playSequence();
        }, 1500); // 1.5s typing duration
      } else {
        // User sends immediately after delay
        timeoutId = setTimeout(() => {
          setMessages(prev => [...prev, currentStep]);
          currentIndex++;
          playSequence();
        }, currentStep.delay);
      }
    };

    playSequence();

    return () => clearTimeout(timeoutId);
  }, []);

  const features = [
    { icon: Sparkles, title: "AI Terintegrasi", desc: "Percakapan natural dan cerdas dengan teknologi AI terkini." },
    { icon: Zap, title: "Respon Kilat", desc: "Berjalan 24/7 tanpa henti dengan latensi mendekati nol." },
    { icon: ImageIcon, title: "Media Processing", desc: "Bisa mengolah gambar, stiker, hingga download video." },
    { icon: MessageCircle, title: "Manajemen Grup", desc: "Fitur auto-moderasi, tag-all, dan game grup interaktif." }
  ];

  return (
    <div className="min-h-screen relative flex flex-col overflow-x-clip">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-300/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] bg-purple-300/15 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Side: Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8"
        >
          <div className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full w-fit bg-white/60 border border-cyan-100 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium tracking-wide text-slate-700">BOT ONLINE 24/7</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-800 leading-tight">
              Tingkatkan Chat<br />
              WhatsApp dengan<br />
              <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#2563eb,45%,#cffafe,55%,#06b6d4)] bg-[length:250%_100%] animate-[text-shimmer_6s_linear_infinite] drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]">Haruka AI.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed">
              Bot WhatsApp cerdas dengan desain elegan dan fitur modern. Haruka siap membantu membalas pesan, membuat stiker, hingga mengelola grup secara otomatis.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 relative z-50">
            <a
              href="https://wa.me/6285187839726"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 text-white font-medium px-8 py-4 shadow-lg shadow-green-500/30 transition-all hover:shadow-green-500/50 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat di WhatsApp</span>
              </div>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('menu');
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="glass-panel hover:bg-white/60 text-slate-700 font-medium px-8 py-4 rounded-2xl transition-all hover:-translate-y-1 flex items-center gap-2 cursor-pointer"
            >
              Lihat Fitur Lengkap
            </button>
          </div>
        </motion.div>

        {/* Right Side: WA Mockup / Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-[400px] mx-auto"
        >
          {/* Character Peeking from behind */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
              rotate: [-5, 0, -5]
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8, type: "spring", bounce: 0.4 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" }
            }}
            className="absolute -right-40 sm:-right-80 bottom-8 sm:bottom-8 w-48 h-48 sm:w-[18rem] sm:h-[18rem] rounded-full overflow-hidden border-[6px] border-white shadow-[0_10px_30px_rgba(34,211,238,0.4)] z-[-1] pointer-events-none bg-gradient-to-br from-cyan-50 to-blue-100"
          >
            <img
              src="https://res.cloudinary.com/dvpm3w0ed/image/upload/v1781598890/leze0fhyvw09vgz3hgrh.png"
              alt="Haruka Character"
              className="w-full h-full object-cover object-[center_20%] scale-110"
            />
          </motion.div>

          {/* Phone Mockup Frame */}
          <div className="glass-panel bg-white/60 p-4 rounded-[2.5rem] shadow-2xl border border-white/80 relative z-10">
            <div className="absolute top-0 inset-x-0 h-8 flex justify-center items-start pt-2 z-20">
              <div className="w-24 h-6 bg-slate-800 rounded-full flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
              </div>
            </div>

            <div className="bg-[#EFEFEF] w-full h-[600px] rounded-[1.8rem] overflow-hidden flex flex-col border border-slate-200 relative shadow-inner">

              {/* WA Header */}
              <div className="bg-white px-4 py-4 pt-10 border-b border-slate-200 flex items-center gap-3 shadow-sm z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 p-[2px]">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-cyan-500 overflow-hidden">
                    <img src="https://res.cloudinary.com/dvpm3w0ed/image/upload/v1781592603/n6cveugcynuh100dygut.jpg" alt="Haruka Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">Haruka Bot</h3>
                  <p className="text-xs text-green-500">online</p>
                </div>
              </div>

              {/* WA Chat Area */}
              <div ref={chatContainerRef} className="flex-1 p-4 bg-[#E5DDD5] relative overflow-y-auto flex flex-col gap-3 scrollbar-hide">
                {/* WA Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

                <div className="text-center my-2">
                  <span className="bg-white/80 backdrop-blur-sm text-slate-500 text-[10px] px-3 py-1 rounded-lg uppercase tracking-wider font-medium shadow-sm">
                    Today
                  </span>
                </div>

                {messages.map((msg, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    key={i}
                    className={`max-w-[85%] relative ${msg.isSticker
                      ? "self-start bg-transparent shadow-none"
                      : `rounded-2xl px-4 py-2 text-sm shadow-sm ${msg.isUser
                        ? "bg-[#D9FDD3] text-slate-800 self-end rounded-tr-sm"
                        : "bg-white text-slate-800 self-start rounded-tl-sm"
                      }`
                      }`}
                  >
                    {msg.image && !msg.isSticker && (
                      <div className="mb-2 mt-1 rounded-xl overflow-hidden border border-black/5">
                        <img src={msg.image} alt="Sent image" className="w-full h-auto max-h-48 object-cover" />
                      </div>
                    )}

                    {msg.isSticker && (
                      <div className="w-32 h-32 mb-1">
                        <img src={msg.image} alt="Sticker" className="w-full h-full object-contain drop-shadow-md" />
                      </div>
                    )}

                    {msg.text && <p className="leading-relaxed">{msg.text}</p>}

                    {!msg.isSticker && (
                      <div className="flex justify-end items-center gap-1 mt-1 opacity-70">
                        <span className="text-[10px]">10:42 AM</span>
                        {msg.isUser && <CheckCheck size={14} className="text-blue-500" />}
                      </div>
                    )}
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex justify-start shrink-0"
                  >
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center justify-center gap-1.5 w-16 h-10 shrink-0">
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* WA Input Area */}
              <div className="bg-[#F0F0F0] p-2 flex items-center gap-2 z-10">
                <div className="flex-1 bg-white rounded-full px-4 py-2.5 text-sm text-slate-400 shadow-sm border border-slate-200">
                  Ketik pesan...
                </div>
                <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <Send size={16} className="ml-1" />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-24 z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Fitur Andalan Haruka</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Dirancang dengan presisi untuk memenuhi semua kebutuhan grup dan personal Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass-panel bg-white/50 p-6 rounded-3xl border border-white/80 hover:bg-white/70 transition-all hover:shadow-xl hover:shadow-cyan-500/5 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                <feat.icon size={24} />
              </div>
              <h3 className="font-semibold text-lg text-slate-800 mb-2">{feat.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Interactive Cara Kerja Section */}
      <section id="cara-kerja" className="w-full max-w-4xl mx-auto px-6 pb-32 relative z-10 scroll-mt-24">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Di Balik Keajaiban <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Haruka</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Lihat bagaimana interaksi diproses dalam hitungan milidetik untuk memberikan Anda pengalaman chat yang luar biasa.</p>
        </div>

        <div ref={containerRef} className="relative pl-8 md:pl-16">
          {/* Background Track (Jalur abu-abu mati) */}
          <div className="absolute left-0 md:left-4 top-10 bottom-16 w-1 bg-slate-200/60 rounded-full z-0" />

          {/* Vertical Glowing Line (Garis menyala yang mengikuti scroll) */}
          <motion.div
            className="absolute left-0 md:left-4 top-10 bottom-16 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 origin-top z-0 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-20 relative">
            {/* Step 1 */}
            <div className="relative">
              {/* Circle on the line */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.3 }}
                className="absolute -left-[37px] md:-left-[53px] top-6 w-6 h-6 rounded-full bg-white border-[4px] border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] z-20"
              />

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel bg-white/60 p-8 rounded-3xl shadow-lg shadow-cyan-500/5 border border-white/80 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-emerald-400 flex items-center justify-center text-white shadow-md">
                    <Smartphone size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">1. Anda Mengirim Pesan</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">Pesan teks, gambar, atau perintah dari WhatsApp Anda dikirimkan dalam sekejap mata secara aman.</p>
              </motion.div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.3 }}
                className="absolute -left-[37px] md:-left-[53px] top-6 w-6 h-6 rounded-full bg-white border-[4px] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20"
              />

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel bg-white/60 p-8 rounded-3xl shadow-lg shadow-blue-500/5 border border-white/80 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                    <BrainCircuit size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">2. Haruka AI Memproses</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">Otak cerdas Haruka bekerja secara paralel menganalisis pesan, mencari jawaban, atau memproses media (stiker).</p>
              </motion.div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.3 }}
                className="absolute -left-[37px] md:-left-[53px] top-6 w-6 h-6 rounded-full bg-white border-[4px] border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] z-20"
              />

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-panel bg-white/60 p-8 rounded-3xl shadow-lg shadow-purple-500/5 border border-white/80 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-400 to-blue-500 flex items-center justify-center text-white shadow-md">
                    <Zap size={24} className="fill-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">3. Balasan Seketika</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">Dalam kurang dari 1 detik, jawaban pintar atau stiker yang Anda minta sudah mendarat di chat Anda.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Channel CTA Section */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-24 relative z-10">
        <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-cyan-500/20 text-center relative overflow-hidden border border-white/20 backdrop-blur-md">
          {/* Decorative background blurs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

          {/* Silver Shine / Light Sweep Animation */}
          <motion.div
            animate={{ x: ["-200%", "300%"] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
            className="absolute top-0 bottom-0 w-full md:w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-0"
            style={{ skewX: -25 }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full mb-3 shadow-xl overflow-hidden border-[3px] border-white/50 bg-white">
              <img src="https://res.cloudinary.com/dvpm3w0ed/image/upload/v1781597828/r6cd43ch9ockzckbn7to.jpg" alt="Haruka by Lost Channel" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white/90 mb-2 tracking-widest font-mono">◈ 𝑯𝑨𝑹𝑼𝑲𝑨 𝗯𝘆 𝗟𝗼𝘀𝘁 ◈</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight mt-2">Ikuti Update Terbaru</h2>
            <p className="text-cyan-50 max-w-2xl mx-auto mb-8 text-lg font-medium">Bergabunglah dengan Saluran WhatsApp Resmi Haruka untuk mendapatkan info fitur baru, tips penggunaan, dan pengumuman penting secara langsung!</p>

            <a
              href="https://whatsapp.com/channel/0029VbCXd7KDOQId5i70vf0W"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-teal-600 font-bold px-8 py-4 rounded-2xl hover:bg-slate-50 hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl hover:shadow-white/20"
            >
              <span>Gabung Saluran Sekarang</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel bg-white/40 border-t border-white/60 py-8 text-center z-10 mt-auto">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Haruka WhatsApp Bot. Crafted with elegance.
        </p>
      </footer>
    </div>
  );
}
