import { profile } from '../data/profile'
import { Card, CardContent } from '../components/ui/Card'
import { SiGithub } from 'react-icons/si'
import { FaLaptopCode, FaPaintBrush, FaDatabase } from 'react-icons/fa'

// Placeholder project — ganti dengan project asli di profile.js nanti
const projects = [
  {
    title: 'Project Segera Hadir',
    desc: 'Ruang untuk menampilkan karya dan project terbaik Anda. Stay tuned!',
    tag: 'Coming Soon',
    icon: '🚀',
  },
]

export default function Portfolio() {
  return (
    <div className="container-page pb-16 pt-28 md:pt-32">
      {/* Heading */}
      <header className="mb-10 text-center animate-fade-in-up opacity-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-ember">
          Portfolio
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-bone-light sm:text-4xl">
          Karya & Project
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-bone-muted">
          Berikut adalah kumpulan project dan eksplorasi yang sedang saya kerjakan.
        </p>
      </header>

      {/* Grid project */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Card
            key={p.title}
            className={`group animate-fade-in-up opacity-0 [animation-delay:${i * 100}ms] transition-all duration-300 hover:-translate-y-1 hover:border-white/15`}
          >
            {/* Hero visual */}
            <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-ember/20 to-ember-light/5 text-5xl">
              {p.icon}
            </div>
            <span className="inline-block rounded-full bg-ember/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ember">
              {p.tag}
            </span>
            <h3 className="mt-3 text-lg font-bold text-bone-light group-hover:text-ember transition-colors">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-bone-muted">{p.desc}</p>
          </Card>
        ))}
      </div>

      {/* Layanan / Services */}
      <div className="mt-16 animate-fade-in-up opacity-0 [animation-delay:300ms]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-bone-light">Solusi Digital</h2>
          <p className="text-sm text-bone-muted mt-2">Layanan yang bisa saya berikan untuk mewujudkan ide Anda</p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150 pointer-events-none" />
            <CardContent className="p-6 text-center relative z-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <FaLaptopCode className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="mb-2 font-bold text-bone-light">Web Development</h3>
              <p className="text-xs leading-relaxed text-bone-muted">Membangun website modern yang interaktif, responsif, dan berkinerja tinggi menggunakan React & ekosistem modern.</p>
            </CardContent>
          </Card>
          
          <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/10">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-pink-500/10 blur-2xl transition-all duration-500 group-hover:bg-pink-500/20 group-hover:scale-150 pointer-events-none" />
            <CardContent className="p-6 text-center relative z-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <FaPaintBrush className="h-7 w-7 text-pink-400" />
              </div>
              <h3 className="mb-2 font-bold text-bone-light">UI/UX Design</h3>
              <p className="text-xs leading-relaxed text-bone-muted">Merancang antarmuka yang memanjakan mata dan memberikan pengalaman navigasi yang mulus serta intuitif.</p>
            </CardContent>
          </Card>
          
          <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/20 group-hover:scale-150 pointer-events-none" />
            <CardContent className="p-6 text-center relative z-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <FaDatabase className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="mb-2 font-bold text-bone-light">Database & API</h3>
              <p className="text-xs leading-relaxed text-bone-muted">Mendesain arsitektur basis data yang efisien dan aman serta mengintegrasikan API untuk fungsionalitas kompleks.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA GitHub */}
      <div className="mt-10 text-center animate-fade-in opacity-0 [animation-delay:500ms]">
        <a
          href="https://github.com/Whanss"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-bone-light transition-all duration-300 hover:-translate-y-0.5 hover:border-ember hover:text-ember"
        >
          <SiGithub className="h-5 w-5" />
          Lihat GitHub saya
        </a>
        <p className="mt-4 text-xs text-bone-muted/70">
          {profile.name} &middot; terus belajar & membangun
        </p>
      </div>
    </div>
  )
}
