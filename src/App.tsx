/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Lightbulb, 
  BookOpen, 
  Briefcase, 
  Brain, 
  Quote, 
  MessageSquare, 
  Mail, 
  Moon, 
  Sun, 
  ChevronRight, 
  Send,
  TrendingUp,
  CheckCircle2,
  User,
  Github,
  Instagram,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SideHustle, Post, Testimonial } from './types';

// Mock Data
const IDE_DATA: SideHustle[] = [
  {
    id: '1',
    title: 'Jualan Online (Reseller/Dropship)',
    description: 'Menjual produk orang lain tanpa harus stok barang sendiri.',
    modal: 'Rp 0 - Rp 100rb',
    potensi: 'Rp 500rb - Rp 5jt / bulan',
    category: 'E-commerce'
  },
  {
    id: '2',
    title: 'Jasa Desain Grafis',
    description: 'Membuat logo, poster, atau konten media sosial untuk UMKM.',
    modal: 'Skill & Laptop',
    potensi: 'Rp 200rb - Rp 1jt / project',
    category: 'Creative'
  },
  {
    id: '3',
    title: 'Content Creator (TikTok/Reels)',
    description: 'Membangun personal branding dan mendapatkan endorse.',
    modal: 'Smartphone',
    potensi: 'Tak terbatas',
    category: 'Media'
  },
  {
    id: '4',
    title: 'Jasa Pengetikan & Transkrip',
    description: 'Membantu mahasiswa atau profesional merapikan dokumen.',
    modal: 'Laptop',
    potensi: 'Rp 50rb - Rp 200rb / tugas',
    category: 'Service'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Andi Pratama',
    role: 'Pelajar SMA',
    content: 'Berawal dari baca tips di sini, sekarang jualan thrift shop sudah bisa buat bayar SPP sendiri!',
    avatar: 'https://picsum.photos/seed/andi/100/100'
  },
  {
    id: '2',
    name: 'Siti Aminah',
    role: 'Mahasiswa',
    content: 'Freelance desain grafis ternyata seru banget. Gak nyangka hobi bisa jadi cuan.',
    avatar: 'https://picsum.photos/seed/siti/100/100'
  }
];

const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    author: 'Budi',
    title: 'Gimana cara bagi waktu sekolah sama jualan?',
    content: 'Halo semua, saya baru mau mulai jualan pulsa tapi takut ganggu waktu belajar. Ada saran?',
    date: '2 jam yang lalu',
    comments: [
      { id: 'c1', author: 'Admin', content: 'Coba buat jadwal khusus setelah jam sekolah ya Budi!', date: '1 jam yang lalu' }
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [newPost, setNewPost] = useState({ author: '', title: '', content: '' });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;
    
    const post: Post = {
      id: Date.now().toString(),
      author: newPost.author || 'Anonim',
      title: newPost.title,
      content: newPost.content,
      date: 'Baru saja',
      comments: []
    };
    
    setPosts([post, ...posts]);
    setNewPost({ author: '', title: '', content: '' });
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'ide', label: 'Ide', icon: Lightbulb },
    { id: 'tips', label: 'Tips', icon: BookOpen },
    { id: 'freelance', label: 'Freelance', icon: Briefcase },
    { id: 'mindset', label: 'Mindset', icon: Brain },
    { id: 'motivator', label: 'Motivator', icon: Quote },
    { id: 'diskusi', label: 'Diskusi', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-16 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-[40px] mt-4 px-8 md:px-16 py-12 gap-12">
              <div className="absolute inset-0 bg-gradient-to-br from-bg-light to-bg-medium -z-10" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4 -z-10" />
              
              <div className="flex-1 text-left max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-black mb-6"
                >
                  <TrendingUp size={16} />
                  <span>#1 Komunitas Side Hustle Anak Muda</span>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-8xl font-black mb-6 text-footer dark:text-white text-important leading-[1.05] font-display"
                >
                  Ubah Passion <br />
                  <span className="text-primary italic">Jadi Penghasilan 💸</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-text-dark dark:text-gray-100 mb-10 font-medium leading-relaxed max-w-lg font-sans"
                >
                  Temukan cara paling cerdas untuk mandiri secara finansial tanpa harus mengorbankan masa mudamu.
                </motion.p>
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: '#8EA48B' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('ide')}
                    className="btn-primary text-lg px-10 py-4 shadow-xl shadow-primary/20"
                  >
                    Mulai Sekarang
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('diskusi')}
                    className="px-10 py-4 rounded-2xl border-2 border-primary text-primary font-black hover:bg-primary/5 transition-colors"
                  >
                    Tanya Komunitas
                  </motion.button>
                </div>
              </div>

              <div className="flex-1 hidden md:flex justify-center items-center relative">
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.5 }}
                   className="relative w-full max-w-md aspect-square bg-white/40 backdrop-blur-sm rounded-[60px] flex items-center justify-center overflow-hidden border-4 border-white/50 shadow-2xl"
                >
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                   <TrendingUp size={160} className="text-primary opacity-10 absolute -right-10 -bottom-10 rotate-12" />
                   <Lightbulb size={200} className="text-primary animate-pulse drop-shadow-[0_0_30px_rgba(76,175,80,0.4)]" />
                   
                   {/* Floating Elements */}
                   <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3"
                   >
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-text-muted font-black uppercase tracking-wider">Terverifikasi</p>
                        <p className="text-sm font-black text-text-dark">100+ Ide Usaha</p>
                      </div>
                   </motion.div>

                   <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3"
                   >
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-text-muted font-black uppercase tracking-wider">Potensi Cuan</p>
                        <p className="text-sm font-black text-text-dark">Hingga Jutaan</p>
                      </div>
                   </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Highlight Box */}
            <section className="bg-primary text-white p-8 rounded-[30px] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Brain size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-important">Kenapa Harus Mulai Sekarang?</h3>
                  <p className="font-medium opacity-90">Masa muda adalah waktu terbaik untuk bereksperimen tanpa takut gagal total.</p>
                </div>
              </div>
              <button className="px-8 py-3 bg-white text-primary font-black rounded-xl hover:bg-primary-soft hover:text-white transition-all shrink-0">
                Baca Selengkapnya
              </button>
            </section>

            {/* Categories */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: 'ide', title: 'Ide Usaha', desc: 'Temukan peluang cuan sesuai minatmu.', icon: Lightbulb },
                { id: 'tips', title: 'Tips & Trik', desc: 'Strategi jitu mengelola bisnis kecilmu.', icon: BookOpen },
                { id: 'freelance', title: 'Freelance', desc: 'Jual keahlianmu ke klien profesional.', icon: Briefcase },
              ].map((cat, idx) => (
                <motion.div 
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, backgroundColor: '#2B4336', color: '#FFFFFF' }}
                  onClick={() => setActiveTab(cat.id)}
                  className="card-standard p-8 cursor-pointer text-center group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:text-white transition-colors">
                    <cat.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-footer text-important">{cat.title}</h3>
                  <p className="text-text-dark dark:text-gray-100 group-hover:text-white/90 leading-relaxed">{cat.desc}</p>
                </motion.div>
              ))}
            </section>

            {/* Trending */}
            <section className="bg-bg-medium -mx-4 px-4 py-16 rounded-3xl">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="text-primary" />
                <h2 className="text-3xl font-bold text-footer text-important">Trending Side Hustles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {IDE_DATA.map((ide, idx) => (
                  <motion.div 
                    key={ide.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -5, backgroundColor: '#324D3E', color: '#FFFFFF' }}
                    className="card-standard p-6 flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block group-hover:bg-white/20 group-hover:text-white transition-colors">
                        {ide.category}
                      </span>
                      <h4 className="font-bold text-lg mb-2 text-text-dark group-hover:text-white">{ide.title}</h4>
                      <p className="text-sm text-text-muted dark:text-gray-100 group-hover:text-white/80 mb-4 leading-relaxed">{ide.description}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700 group-hover:border-white/20">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-text-dark dark:text-gray-200 group-hover:text-white/90">Potensi:</span>
                        <span className="font-bold text-primary group-hover:text-white">{ide.potensi}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="bg-bg-medium -mx-4 px-4 py-16 rounded-3xl">
              <h2 className="text-3xl font-bold text-center mb-12 text-footer text-important">Apa Kata Mereka?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {TESTIMONIALS.map((t, idx) => (
                  <motion.div 
                    key={t.id} 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="card-standard p-8 flex gap-6 items-start bg-white group"
                  >
                    <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/10 group-hover:border-white/20" referrerPolicy="no-referrer" />
                    <div>
                      <p className="italic text-text-dark dark:text-gray-100 group-hover:text-white/90 mb-4 leading-relaxed font-medium">"{t.content}"</p>
                      <h5 className="font-bold text-text-dark group-hover:text-white">{t.name}</h5>
                      <p className="text-sm text-primary group-hover:text-white/80 font-bold">{t.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'ide':
        return (
          <div className="space-y-12 pb-20">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-5xl font-display font-black mb-4 text-footer text-important italic">Peluang Emas 💎</h2>
              <p className="text-text-dark font-bold leading-relaxed text-lg">Pilih strategi yang paling relevan dengan gaya hidup dan ambisimu.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {IDE_DATA.map((ide, idx) => (
                <motion.div 
                  key={ide.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, backgroundColor: '#324D3E', color: '#FFFFFF' }}
                  className="card-standard p-8 flex flex-col group"
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-white transition-colors text-important">{ide.title}</h3>
                  <p className="text-text-dark dark:text-gray-100 group-hover:text-white/90 mb-6 flex-grow leading-relaxed">{ide.description}</p>
                  <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700 group-hover:border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-muted dark:text-gray-200 group-hover:text-white/90">Modal:</span>
                      <span className="font-bold px-3 py-1 bg-bg-light/50 dark:bg-gray-800 rounded-lg text-sm group-hover:bg-white/10 group-hover:text-white">{ide.modal}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-muted dark:text-gray-200 group-hover:text-white/90">Potensi:</span>
                      <span className="font-bold text-primary group-hover:text-white">{ide.potensi}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Additional Mock Cards */}
              <div className="card-standard p-8 border-dashed border-2 border-primary/30 flex flex-col items-center justify-center text-center opacity-70 bg-white/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <ChevronRight />
                </div>
                <h3 className="font-bold mb-2 text-footer text-important">Ide Lainnya Segera Hadir</h3>
                <p className="text-sm text-text-muted font-medium leading-relaxed">Kami terus mengkurasi ide-ide segar untukmu.</p>
              </div>
            </div>
          </div>
        );

      case 'tips':
        return (
          <div className="max-w-4xl mx-auto space-y-16 pb-20">
            <div className="text-center">
              <h2 className="text-5xl font-display font-black mb-4 text-footer text-important italic">Strategi Cerdas 📈</h2>
              <p className="text-text-dark font-bold leading-relaxed text-lg">Bukan sekadar memulai, tapi bagaimana cara bertumbuh dengan elegan.</p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Cara Mulai Usaha Tanpa Ganggu Sekolah",
                  content: "Kunci utamanya adalah manajemen waktu. Gunakan waktu luang setelah mengerjakan PR atau saat akhir pekan. Jangan memaksakan diri jika sedang musim ujian.",
                  points: ["Buat jadwal harian", "Pilih bisnis yang fleksibel", "Mulai dari skala kecil"]
                },
                {
                  title: "Tips Konsisten Saat Semangat Menurun",
                  content: "Wajar jika semangat naik turun. Ingat kembali tujuan awalmu memulai side hustle ini. Apakah untuk beli gadget baru? Atau bantu orang tua?",
                  points: ["Ingat 'Why' kamu", "Cari komunitas pendukung", "Rayakan pencapaian kecil"]
                },
                {
                  title: "Cara Mendapatkan Pelanggan Pertama",
                  content: "Manfaatkan lingkaran terdekatmu. Teman sekolah, saudara, atau tetangga adalah calon pelanggan potensial pertamamu.",
                  points: ["Gunakan WhatsApp Status", "Berikan promo perkenalan", "Minta testimoni jujur"]
                }
              ].map((article, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -5, backgroundColor: '#324D3E', color: '#FFFFFF' }}
                  className="card-standard p-8 bg-white group"
                >
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors text-important">{article.title}</h3>
                  <p className="text-text-dark dark:text-gray-100 group-hover:text-white/90 mb-6 leading-relaxed">{article.content}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {article.points.map((p, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-bold text-primary bg-primary/10 p-3 rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
                        <CheckCircle2 size={16} />
                        {p}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary text-white p-10 rounded-[30px] shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Checklist Persiapan ✅</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Tentukan produk/jasa",
                  "Riset harga pasar",
                  "Siapkan nama brand",
                  "Buat akun media sosial bisnis",
                  "Siapkan sistem pembayaran",
                  "Mulai promosi ke teman"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'freelance':
        return (
          <div className="max-w-5xl mx-auto space-y-16 pb-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-footer text-important">Dunia Freelance 💻</h2>
              <p className="text-text-dark font-medium leading-relaxed">Jual keahlianmu secara profesional ke seluruh dunia.</p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {[
                  { step: "01", title: "Tentukan Skill", desc: "Apa yang kamu kuasai? Desain? Menulis? Coding? Atau admin sosmed?", icon: Brain },
                  { step: "02", title: "Buat Portfolio", desc: "Kumpulkan hasil karyamu. Bisa dari tugas sekolah atau project iseng.", icon: Briefcase },
                  { step: "03", title: "Cari Client", desc: "Mulai dari platform lokal atau situs freelance internasional.", icon: User },
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10, backgroundColor: '#324D3E', color: '#FFFFFF' }}
                    className="card-standard p-8 relative overflow-hidden group bg-white border-2 border-transparent hover:border-primary/20"
                  >
                    <div className="text-7xl font-black text-primary/5 absolute -right-4 -top-4 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-inner">
                      <step.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-3 group-hover:text-white transition-colors text-important">{step.title}</h3>
                    <p className="text-text-dark dark:text-gray-100 group-hover:text-white/90 font-bold leading-relaxed">{step.desc}</p>
                    
                    {/* Arrow for mobile or visual indicator */}
                    <div className="mt-6 flex items-center gap-2 text-primary group-hover:text-white font-black text-sm">
                      Langkah Selanjutnya <ChevronRight size={16} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-footer">Gimana Cara Dapat Klien?</h3>
                <ul className="space-y-4">
                  {[
                    "Optimasi profil LinkedIn",
                    "Aktif di komunitas profesi",
                    "Tawarkan jasa ke UMKM lokal",
                    "Gunakan platform seperti Upwork/Fiverr",
                    "Konsisten posting karya di Instagram/Behance"
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-text-dark dark:text-gray-300 font-medium">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-standard p-8 bg-primary/5 border-primary/10">
                <h4 className="font-bold text-xl mb-4 text-footer">Tips Profil Menarik ✨</h4>
                <div className="space-y-4 text-sm">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <p className="font-bold text-primary mb-1">Foto Profil</p>
                    <p className="text-text-dark dark:text-gray-300 font-bold">Gunakan foto yang rapi, cerah, dan profesional.</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <p className="font-bold text-primary mb-1">Headline</p>
                    <p className="text-text-dark dark:text-gray-300 font-bold">Tuliskan apa yang bisa kamu bantu, bukan cuma jabatan.</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                    <p className="font-bold text-primary mb-1">Bio/About</p>
                    <p className="text-text-dark dark:text-gray-300 font-bold">Ceritakan pengalaman dan solusi yang kamu tawarkan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mindset':
        return (
          <div className="max-w-4xl mx-auto space-y-16 pb-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-footer text-important">Mindset Juara 🧠</h2>
              <p className="text-text-dark font-medium leading-relaxed">Bisnis yang kuat dimulai dari pikiran yang sehat.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="card-standard p-12 bg-gradient-to-br from-primary to-footer text-white flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <Quote size={80} className="mb-8 text-white/20" />
                <p className="text-3xl md:text-5xl font-display font-black italic mb-10 leading-tight text-important relative z-10">
                  "Kemandirian finansial adalah bentuk kebebasan yang paling elegan."
                </p>
                <div className="w-24 h-2 bg-white/30 rounded-full relative z-10" />
              </motion.div>

              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="text-primary" size={32} />
                  <h3 className="text-3xl font-black text-footer text-important">Tips Anti Malas 🚀</h3>
                </div>
                {[
                  { title: "Aturan 5 Menit", desc: "Cukup mulai lakukan selama 5 menit saja. Biasanya kamu akan lanjut terus.", icon: CheckCircle2 },
                  { title: "Breakdown Tugas", desc: "Pecah tugas besar jadi langkah-langkah kecil yang tidak menakutkan.", icon: CheckCircle2 },
                  { title: "Reward Diri", desc: "Beri hadiah kecil untuk dirimu setelah menyelesaikan target harian.", icon: CheckCircle2 }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: '#324D3E', color: '#FFFFFF' }}
                    className="card-standard p-6 border-l-8 border-primary bg-white group flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-1 text-primary group-hover:text-white transition-colors text-important">{item.title}</h4>
                      <p className="text-text-dark dark:text-gray-100 group-hover:text-white/80 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="card-standard p-10 text-center bg-white">
              <h3 className="text-2xl font-bold mb-8 text-footer">Tips Konsistensi 🔄</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {["Fokus pada proses", "Jangan bandingkan diri", "Evaluasi mingguan", "Istirahat cukup"].map((tip, i) => (
                  <div key={i} className="px-6 py-3 bg-primary/10 text-primary rounded-full font-bold">
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'motivator':
        return (
          <div className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-12 pb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl px-4 py-24 rounded-[50px] bg-gradient-to-br from-primary-soft to-accent text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20" />
              <Quote size={64} className="text-white/20 mx-auto mb-8" />
              <h2 className="text-4xl md:text-7xl font-display font-black mb-8 leading-tight text-important italic">
                “Besar atau kecil, <br />
                <span className="text-white not-italic">langkah pertama adalah segalanya.</span>”
              </h2>
              <div className="w-32 h-2 bg-white/30 mx-auto rounded-full mb-12" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-12">
                {[
                  { title: "Jangan Takut Gagal", desc: "Kegagalan adalah pelajaran paling berharga untuk sukses nanti." },
                  { title: "Fokus ke Progress", desc: "1% lebih baik setiap hari lebih bagus daripada diam di tempat." },
                  { title: "Konsisten", desc: "Kekuatan sebenarnya ada pada pengulangan yang terus menerus." }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-left border border-white/10"
                  >
                    <h4 className="font-bold text-lg mb-2 text-bg-light text-important">{item.title}</h4>
                    <p className="text-white/90 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="max-w-2xl card-standard p-10 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-4 text-footer">Cerita Inspirasi Singkat 📖</h3>
              <p className="text-text-dark dark:text-gray-200 italic font-bold leading-relaxed">
                "Dulu saya cuma iseng jualan stiker di sekolah. Modal cuma 50 ribu buat cetak. Sekarang, saya sudah punya brand merchandise sendiri dengan omzet jutaan per bulan. Kuncinya? Jangan pernah berhenti mencoba hal baru."
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.1, rotate: [0, -1, 1, 0], backgroundColor: '#728A6E' }}
              whileTap={{ scale: 0.9 }}
              className="btn-primary text-2xl px-12 py-6 shadow-xl shadow-primary/20"
            >
              Saya Siap Mulai 🚀
            </motion.button>
          </div>
        );

      case 'diskusi':
        return (
          <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">
              {/* Main Feed */}
              <div className="lg:col-span-2 space-y-12">
                {/* Form Post */}
                <div className="card-standard p-8 border-l-8 border-primary bg-white shadow-xl">
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-text-dark text-important">
                    <MessageSquare size={24} className="text-primary" />
                    Bagikan Pengalamanmu
                  </h3>
                  <form onSubmit={handleAddPost} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-text-dark ml-1">Nama Kamu</label>
                        <input 
                          type="text" 
                          placeholder="Contoh: Budi Santoso" 
                          className="w-full p-4 rounded-2xl border-2 border-bg-medium bg-white outline-none focus:border-primary transition-colors text-text-dark font-bold placeholder:text-text-muted"
                          value={newPost.author}
                          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-text-dark ml-1">Topik Diskusi</label>
                        <input 
                          type="text" 
                          placeholder="Contoh: Tips Jualan di Sekolah" 
                          required
                          className="w-full p-4 rounded-2xl border-2 border-bg-medium bg-white outline-none focus:border-primary transition-colors text-text-dark font-bold placeholder:text-text-muted"
                          value={newPost.title}
                          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-text-dark ml-1">Isi Postingan</label>
                      <textarea 
                        placeholder="Tuliskan pertanyaan atau ceritamu di sini..." 
                        required
                        rows={5}
                        className="w-full p-4 rounded-2xl border-2 border-bg-medium bg-white outline-none focus:border-primary transition-colors resize-none text-text-dark font-bold placeholder:text-text-muted"
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full md:w-auto flex items-center justify-center gap-3 py-4 px-12 text-lg">
                      <Send size={20} />
                      Posting Sekarang
                    </button>
                  </form>
                </div>

                {/* List Posts */}
                <div className="space-y-8">
                  <AnimatePresence mode="popLayout">
                    {posts.map((post) => (
                      <motion.div 
                        key={post.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="card-standard p-8 bg-white border-2 border-transparent hover:border-primary/10 transition-all shadow-lg"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black">
                              {post.author[0].toUpperCase()}
                            </div>
                            <div>
                              <h4 className="text-2xl font-black text-footer leading-tight">{post.title}</h4>
                              <div className="flex items-center gap-2 text-sm text-text-muted font-bold">
                                <span className="text-primary">{post.author}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2">
                            <MessageSquare size={14} />
                            {post.comments.length}
                          </div>
                        </div>
                        <p className="text-text-dark dark:text-gray-100 mb-8 font-bold leading-relaxed text-lg">{post.content}</p>
                        
                        {post.comments.length > 0 && (
                          <div className="space-y-4 mb-8">
                            {post.comments.map((comment) => (
                              <div key={comment.id} className="bg-bg-light p-6 rounded-2xl border-l-4 border-primary">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="font-black text-sm text-primary">{comment.author}</span>
                                  <span className="text-[10px] text-text-muted font-black">{comment.date}</span>
                                </div>
                                <p className="text-sm text-text-dark font-bold leading-relaxed">{comment.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                          <button className="text-sm font-black text-primary hover:underline flex items-center gap-2">
                            <MessageSquare size={16} /> Balas Diskusi
                          </button>
                          <button className="text-sm font-black text-text-muted hover:text-primary transition-colors flex items-center gap-2">
                            <TrendingUp size={16} /> Upvote
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="card-standard p-8 bg-footer text-white">
                  <h3 className="text-xl font-black mb-6 text-important">Topik Populer 🔥</h3>
                  <div className="space-y-4">
                    {['#JualanSekolah', '#FreelanceTips', '#ModalKecil', '#ManajemenWaktu'].map((tag, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 cursor-pointer transition-colors">
                        <span className="font-bold">{tag}</span>
                        <ChevronRight size={16} className="opacity-50" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-standard p-8 bg-bg-medium">
                  <h3 className="text-xl font-black mb-4 text-footer text-important">Aturan Forum 📜</h3>
                  <ul className="space-y-3 text-sm font-bold text-text-dark">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-1" />
                      Saling menghargai antar anggota.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-1" />
                      Gunakan bahasa yang sopan.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-1" />
                      Dilarang spam atau promosi berlebih.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-footer text-important">Hubungi Kami 📞</h2>
                <p className="text-text-muted leading-relaxed font-medium">
                  Punya pertanyaan, saran, atau ingin bekerja sama? Jangan ragu untuk mengirim pesan kepada kami.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="card-standard p-6 flex items-center gap-4 bg-white shadow-md">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-bold">Email Kami</p>
                    <p className="font-bold text-text-dark">halo@sidehustlemuda.com</p>
                  </div>
                </div>
                <div className="card-standard p-6 flex items-center gap-4 bg-white shadow-md">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-bold">Instagram</p>
                    <p className="font-bold text-text-dark">@sidehustle.muda</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-bg-medium rounded-3xl">
                <h4 className="font-bold mb-2 text-footer text-important">Tujuan Website 🎯</h4>
                <p className="text-sm text-text-dark dark:text-gray-100 font-medium leading-relaxed">
                  Membantu generasi muda Indonesia untuk lebih mandiri secara finansial melalui ide-ide kreatif dan edukasi bisnis yang mudah dipahami.
                </p>
              </div>
            </div>

            <div className="card-standard p-10 bg-white shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-text-dark text-important">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-text-dark">Nama Lengkap</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-accent bg-white outline-none focus:border-primary text-text-dark font-medium placeholder:text-text-muted" placeholder="Masukkan namamu" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-text-dark">Alamat Email</label>
                  <input type="email" className="w-full p-4 rounded-xl border border-accent bg-white outline-none focus:border-primary text-text-dark font-medium placeholder:text-text-muted" placeholder="email@contoh.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-text-dark">Pesan</label>
                  <textarea rows={5} className="w-full p-4 rounded-xl border border-accent bg-white outline-none focus:border-primary resize-none text-text-dark font-medium placeholder:text-text-muted" placeholder="Tuliskan pesanmu di sini..."></textarea>
                </div>
                <button type="button" className="btn-primary w-full py-4 text-lg shadow-lg">Kirim Sekarang</button>
              </form>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary-soft selection:text-white bg-bg-light">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-primary backdrop-blur-md border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setActiveTab('home')}
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-black text-xl">
              S
            </div>
            <span className="text-xl font-black tracking-tighter hidden sm:block text-white">
              SIDEHUSTLE<span className="text-primary-soft">MUDA</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === item.id 
                    ? 'bg-primary-soft text-white shadow-inner' 
                    : 'text-white hover:bg-primary-soft hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-white/10 text-white hover:text-white transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn-primary hidden sm:block bg-white text-primary hover:bg-primary-soft hover:text-white">Join Community</button>
            
            {/* Mobile Nav Toggle (Simplified for demo) */}
            <div className="lg:hidden">
              <select 
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="bg-white/10 text-white p-2 rounded-xl text-sm outline-none border-none"
              >
                {navItems.map(item => (
                  <option key={item.id} value={item.id} className="text-text-dark">{item.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-footer border-t border-white/10 pt-20 pb-10 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary font-black">
                  S
                </div>
                <span className="text-xl font-black tracking-tighter">
                  SIDEHUSTLE<span className="text-primary-soft">MUDA</span>
                </span>
              </div>
              <p className="text-white font-medium max-w-md">
                Platform edukasi dan komunitas side hustle nomor satu untuk anak muda Indonesia. Mari tumbuh bersama dan capai kemandirian finansial.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-primary-soft shadow-sm transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-primary-soft shadow-sm transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-primary-soft shadow-sm transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6">Navigasi</h5>
              <ul className="space-y-4 text-sm text-white/90">
                {navItems.slice(0, 4).map(item => (
                  <li key={item.id}>
                    <button onClick={() => setActiveTab(item.id)} className="hover:text-primary-soft transition-colors font-bold">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6">Kontak</h5>
              <ul className="space-y-4 text-sm text-white/90">
                <li className="flex items-center gap-2 font-bold">
                  <Mail size={14} className="text-primary-soft" />
                  halo@sidehustlemuda.com
                </li>
                <li className="font-bold">Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 text-center text-sm text-white/80">
            <p className="font-medium">© {new Date().getFullYear()} SideHustle Muda. Dibuat dengan ❤️ untuk Masa Depan Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
