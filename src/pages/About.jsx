import { motion } from 'motion/react'
import { profile, about, education, interests, awards, techStack } from '../data/profile'
import { getTechIcon } from '../components/techIcons'
import { FaGraduationCap, FaCode, FaTrophy, FaHeart, FaBriefcase, FaUserAstronaut } from 'react-icons/fa'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  }

  return (
    <div className="container-page pb-20 pt-28 md:pt-32">
      {/* Heading */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-ember">
          Tentang Saya
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-bone-light sm:text-5xl">
          Kenalan, yuk!
        </h1>
      </motion.header>

      {/* Bento Grid Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-3"
      >
        
        {/* 1. Kemampuan (Top Center, Span 3) dengan Orbiting Skills */}
        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-10 backdrop-blur-sm transition-all hover:border-white/20 md:col-span-3 flex flex-col items-center">
          {/* Decorative background glow for the orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-blue-500/20" />
          
          <div className="mb-2 flex items-center justify-center gap-3">
            <FaCode className="h-6 w-6 text-blue-400" />
            <h2 className="text-xl font-extrabold tracking-wide text-bone-light">Tech Stack Orbit</h2>
          </div>
          <p className="mb-8 text-center text-xs text-bone-muted">Teknologi yang saya gunakan dan pelajari sepanjang perjalanan</p>
          
          <div className="relative z-10 w-full flex justify-center">
            <OrbitingSkills />
          </div>
        </motion.div>

        {/* 2. Profil (Besar, span 2 kolom) */}
        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-ember/30 md:col-span-2">
          {/* Animated gradient border simulation */}
          <div className="absolute inset-0 bg-gradient-to-br from-ember/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-ember/20 blur-3xl transition-all duration-500 group-hover:bg-ember/30 group-hover:scale-110 pointer-events-none" />
          <FaUserAstronaut className="absolute -right-6 -bottom-6 h-32 w-32 opacity-[0.03] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 pointer-events-none" />
          
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-bone-light">
            <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_8px_#ff5722]" />
            Profil
          </h2>
          <p className="relative z-10 text-sm leading-relaxed text-bone-muted sm:text-base">
            {about.intro}
          </p>
          
          <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="flex flex-col justify-center rounded-2xl border border-white/5 bg-black/30 p-3 transition-colors hover:border-ember/20 hover:bg-black/50">
              <p className="text-[10px] uppercase tracking-wider text-bone-muted/70">Prodi</p>
              <p className="mt-1 font-semibold text-bone-light">{profile.program}</p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-white/5 bg-black/30 p-3 transition-colors hover:border-ember/20 hover:bg-black/50">
              <p className="text-[10px] uppercase tracking-wider text-bone-muted/70">Kampus</p>
              <p className="mt-1 text-sm font-semibold text-bone-light">{profile.college}</p>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col justify-center rounded-2xl border border-white/5 bg-black/30 p-3 transition-colors hover:border-ember/20 hover:bg-black/50">
              <p className="text-[10px] uppercase tracking-wider text-bone-muted/70">Kelahiran</p>
              <p className="mt-1 text-sm font-semibold text-bone-light">{profile.birthDate}</p>
            </div>
          </div>
        </motion.div>

        {/* 3. Pengalaman (Span 1 kolom) */}
        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-black/50 md:col-span-1">
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/20 group-hover:scale-150 pointer-events-none" />
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <FaBriefcase className="h-6 w-6 text-emerald-500" />
          </div>
          <h2 className="mb-4 text-lg font-bold text-bone-light">Pengalaman</h2>
          <p className="relative z-10 text-sm leading-relaxed text-bone-muted">{about.experience}</p>
        </motion.div>

        {/* 4. Pendidikan (Span 1 kolom) - Vertical Timeline */}
        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-purple-500/30 md:col-span-1">
          <FaGraduationCap className="absolute -right-4 -bottom-4 h-28 w-28 opacity-5 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110 pointer-events-none" />
          <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-bone-light">
            <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
            Pendidikan
          </h2>
          <div className="relative space-y-6 pl-4 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 before:to-transparent">
            {education.map((e, i) => (
              <div key={i} className="relative">
                {/* Glowing Dot */}
                <div className="absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-purple-500 shadow-[0_0_8px_#a855f7] transition-transform duration-300 group-hover:scale-125" />
                <h3 className="font-bold text-bone-light leading-tight">{e.institution}</h3>
                {e.major && <p className="mt-1 text-xs text-bone-muted">{e.major}</p>}
                <span className="mt-2 inline-block rounded border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-purple-400">
                  {e.period}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. Pencapaian (Span 1 kolom) */}
        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-xl hover:shadow-black/50 md:col-span-1">
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-yellow-500/10 blur-2xl transition-all duration-500 group-hover:bg-yellow-500/20 group-hover:scale-150 pointer-events-none" />
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <FaTrophy className="h-6 w-6 text-yellow-500" />
          </div>
          <h2 className="mb-4 text-lg font-bold text-bone-light">Pencapaian</h2>
          <div className="relative z-10">
            {awards.length === 1 && awards[0].includes('Sedang dalam proses') ? (
              <div className="rounded-xl border border-dashed border-white/10 bg-black/20 p-4 text-center transition-colors group-hover:border-yellow-500/30 group-hover:bg-yellow-500/5">
                <span className="block text-xl">🌱</span>
                <p className="mt-2 text-xs leading-relaxed text-bone-muted">{awards[0]}</p>
              </div>
            ) : (
              <ul className="space-y-3">
                {awards.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-bone-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500 shadow-[0_0_5px_#eab308]" />
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>

        {/* 6. Minat (Span 1 kolom) */}
        <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-xl hover:shadow-black/50 md:col-span-1">
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-pink-500/10 blur-2xl transition-all duration-500 group-hover:bg-pink-500/20 group-hover:scale-150 pointer-events-none" />
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse">
            <FaHeart className="h-6 w-6 text-pink-500" />
          </div>
          <h2 className="mb-4 text-lg font-bold text-bone-light">Minat</h2>
          <div className="relative z-10 flex flex-wrap gap-2">
            {interests.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-bone-light transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-400 hover:shadow-[0_4px_10px_rgba(236,72,153,0.2)]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  )
}

// Komponen Orbiting Skills
function OrbitingSkills() {
  const innerRing = techStack.slice(0, 3)
  const middleRing = techStack.slice(3, 7)
  const outerRing = techStack.slice(7, 12)

  return (
    <div className="relative flex h-[320px] w-full items-center justify-center pointer-events-none">
      {/* Center Logo */}
      <div className="absolute z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.4)] pointer-events-auto">
        <FaCode className="h-6 w-6 text-white" />
      </div>

      <OrbitRing radius={55} duration={15} items={innerRing} reverse={false} />
      <OrbitRing radius={95} duration={25} items={middleRing} reverse={true} />
      <OrbitRing radius={135} duration={35} items={outerRing} reverse={false} />
    </div>
  )
}

function OrbitRing({ radius, duration, items, reverse }) {
  const spinClass = reverse ? 'animate-spin-reverse' : 'animate-spin'
  const counterSpinClass = reverse ? 'animate-spin' : 'animate-spin-reverse'

  return (
    <div 
      className="absolute rounded-full border border-white/5"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <div 
        className={`absolute inset-0 h-full w-full ${spinClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((tech, i) => {
          const angle = (360 / items.length) * i
          const Icon = getTechIcon(tech.icon)
          return (
            <div 
              key={tech.name}
              className="absolute left-1/2 top-1/2 h-full w-full"
              style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <div 
                  className={counterSpinClass}
                  style={{ animationDuration: `${duration}s` }}
                >
                  <div 
                    className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-900 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all hover:scale-125 hover:border-white/30"
                    style={{ transform: `rotate(-${angle}deg)` }}
                  >
                    {Icon && <Icon className="h-5 w-5" style={{ color: tech.color }} />}
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 px-2 py-1 text-[10px] font-medium text-bone-light opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 border border-white/10">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

