import { techStack, profile } from '../data/profile'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import { getTechIcon } from '../components/techIcons'
import { SiGithub } from 'react-icons/si'

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

      {/* Tech Stack */}
      <Card className="mt-12 animate-fade-in-up opacity-0 [animation-delay:300ms]">
        <CardHeader>
          <CardTitle className="text-center">Tech Stack</CardTitle>
          <CardDescription className="text-center">
            Teknologi yang saya gunakan dan pelajari
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => {
              const Icon = getTechIcon(tech.icon)
              return (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15"
                >
                  {Icon && (
                    <Icon
                      className="h-5 w-5 transition-colors"
                      style={{ color: tech.color }}
                    />
                  )}
                  <span className="text-sm font-medium text-bone-light group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

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
