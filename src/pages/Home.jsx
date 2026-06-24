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

        <div className="relative">
          {/* Garis penghubung timeline */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-ember/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-6">
            {learningPath.map((tech, i) => {
              const Icon = getTechIcon(tech.icon)
              const isEven = i % 2 === 0
              return (
                <div
                  key={tech.name}
                  className={`animate-fade-in-up opacity-0 flex items-center gap-4 [animation-delay:${i * 100}ms] ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-800 shadow-lg">
                    {Icon ? (
                      <Icon className="h-6 w-6" style={{ color: tech.color }} />
                    ) : (
                      <span className="text-sm font-bold" style={{ color: tech.color }}>
                        {tech.name[0]}
                      </span>
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 rounded-xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/10 md:max-w-sm ${
                      isEven ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-bone-light">{tech.name}</h3>
                      <span className="rounded-full bg-ember/10 px-2 py-0.5 text-[10px] font-semibold text-ember">
                        {tech.year}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-bone-muted">{tech.note}</p>
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
