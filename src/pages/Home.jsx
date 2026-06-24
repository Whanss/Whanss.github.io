import { Link } from 'react-router-dom'
import { profile, learningPath } from '../data/profile'
import SocialLinks from '../components/SocialLinks'
import TechJourneyCard from '../components/TechJourneyCard'
import NowPlayingCard from '../components/NowPlayingCard'
import { getTechIcon } from '../components/techIcons'

export default function Home() {
  return (
    <div className="pb-12 pt-28">
      {/* ===== HERO SECTION ===== */}
      <section className="container-page flex flex-col items-center text-center md:pt-8">
        {/* Foto profil */}
        <div className="animate-fade-in opacity-0">
          <img
            src={profile.photo}
            alt={`Foto ${profile.name}`}
            loading="eager"
            className="h-36 w-36 rounded-full object-cover shadow-2xl shadow-black/50 ring-4 ring-ember/20 sm:h-44 sm:w-44 md:h-48 md:w-48"
          />
        </div>

        {/* Nama & role */}
        <h1 className="mt-6 animate-fade-in-up text-3xl font-extrabold tracking-tight text-bone-light opacity-0 sm:text-4xl md:text-5xl">
          Halo, saya{' '}
          <span className="bg-gradient-to-r from-ember to-ember-light bg-clip-text text-transparent">
            {profile.nickname}
          </span>
        </h1>

        <p className="mt-3 max-w-lg animate-fade-in-up text-base text-bone-muted opacity-0 [animation-delay:150ms] sm:text-lg">
          {profile.role}
        </p>

        <p className="mt-1 max-w-md animate-fade-in-up text-sm italic text-bone-muted/80 opacity-0 [animation-delay:250ms]">
          {profile.tagline}
        </p>

        {/* Tombol CTA */}
        <div className="mt-6 flex animate-fade-in-up flex-wrap items-center justify-center gap-3 opacity-0 [animation-delay:350ms]">
          <Link
            to="/portfolio"
            className="rounded-full bg-ember px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ember/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember-light hover:shadow-xl hover:shadow-ember/35"
          >
            Lihat Portfolio
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-bone-light transition-all duration-300 hover:-translate-y-0.5 hover:border-ember hover:text-ember"
          >
            Hubungi Saya
          </Link>
        </div>
      </section>

      {/* ===== CARDS SECTION — Tech Journey + Now Playing ===== */}
      <section className="container-page mt-16 grid gap-6 md:mt-20 md:grid-cols-2">
        <div className="animate-fade-in-up opacity-0 [animation-delay:400ms]">
          <TechJourneyCard />
        </div>
        <div className="animate-fade-in-up opacity-0 [animation-delay:500ms]">
          <NowPlayingCard />
        </div>
      </section>

      {/* ===== LEARNING PATH TIMELINE ===== */}
      <section className="container-page mt-16 md:mt-20">
        <header className="mb-8 text-center animate-fade-in-up opacity-0 [animation-delay:200ms]">
          <p className="text-xs font-semibold uppercase tracking-widest text-ember">
            Learning Path
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-bone-light sm:text-3xl">
            Perjalanan Belajar Saya
          </h2>
        </header>

        <div className="relative pb-10">
          {/* Garis penghubung timeline statis */}
          <div className="absolute top-0 bottom-0 left-6 w-[2px] -translate-x-[1px] bg-white/5 md:left-1/2" />
          
          {/* Garis animasi bergerak (Efek Panah/Laser ngikutin garis) */}
          <div className="absolute top-0 bottom-0 left-6 w-[2px] -translate-x-[1px] md:left-1/2 overflow-hidden z-0">
            <div className="absolute left-0 right-0 h-[25%] bg-gradient-to-b from-transparent via-indigo-500/80 to-indigo-400 animate-timeline-flow shadow-[0_0_10px_#818cf8]" />
          </div>

          <div className="space-y-12 relative z-10">
            {learningPath.map((tech, i) => {
              const Icon = getTechIcon(tech.icon)
              const isEven = i % 2 === 0
              
              // Komponen konten card: ukuran disesuaikan agar proporsional dan tidak terlalu raksasa
              const CardContent = () => (
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit min-w-[160px] max-w-[220px] flex-col justify-center rounded-xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] group relative z-10"
                >
                  <div className="flex flex-col gap-2">
                    <span 
                      className="w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold"
                      style={{ backgroundColor: `${tech.color}15`, color: tech.color, border: `1px solid ${tech.color}30` }}
                    >
                      {tech.year}
                    </span>
                    <h3 className="text-base font-bold text-bone-light group-hover:text-white transition-colors">{tech.name}</h3>
                  </div>
                  <p className="mt-2 text-[11px] text-bone-muted group-hover:text-bone-light transition-colors leading-relaxed">{tech.note}</p>
                </a>
              )

              return (
                <div
                  key={tech.name}
                  className={`animate-fade-in-up opacity-0 relative flex items-center w-full [animation-delay:${i * 100}ms]`}
                >
                  {/* Space/Card Kiri (Hanya Desktop) */}
                  <div className={`hidden md:flex flex-1 items-center justify-end pr-10 lg:pr-14 relative`}>
                    {!isEven && (
                      <>
                        <CardContent />
                        {/* Garis Horizontal */}
                        <div 
                          className="absolute right-0 top-1/2 h-[2px] w-10 lg:w-14 -translate-y-1/2 shadow-[0_0_8px_currentColor]" 
                          style={{ backgroundColor: tech.color, color: tech.color }}
                        />
                      </>
                    )}
                  </div>

                  {/* Timeline dot (Tengah di Desktop, Kiri di Mobile) */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-[#1e1e1e] bg-ink-900 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md">
                    {Icon ? (
                      <Icon className="h-5 w-5" style={{ color: tech.color }} />
                    ) : (
                      <span className="text-sm font-bold" style={{ color: tech.color }}>
                        {tech.name[0]}
                      </span>
                    )}
                  </div>

                  {/* Space/Card Kanan (Desktop & Mobile) */}
                  <div className={`flex flex-1 items-center justify-start pl-8 md:pl-10 lg:pl-14 relative`}>
                    {/* Di mobile, card SELALU muncul di sini. Di desktop, hanya jika urutan genap */}
                    <div className={`${!isEven ? 'md:hidden' : ''} w-full relative flex items-center`}>
                      {/* Garis Horizontal */}
                      <div 
                        className="absolute -left-8 md:-left-10 lg:-left-14 top-1/2 h-[2px] w-8 md:w-10 lg:w-14 -translate-y-1/2 shadow-[0_0_8px_currentColor]" 
                        style={{ backgroundColor: tech.color, color: tech.color }}
                      />
                      <CardContent />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== SOSIAL MEDIA ===== */}
      <section className="container-page mt-16 text-center animate-fade-in opacity-0 [animation-delay:600ms]">
        <h2 className="mb-4 text-lg font-bold text-bone-light">Temukan saya di</h2>
        <SocialLinks size="md" className="justify-center" />
      </section>
    </div>
  )
}
