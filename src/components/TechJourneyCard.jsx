import { useRef, useEffect } from 'react'
import { Card, CardTitle, CardDescription } from './ui/Card'
import { getTechIcon } from './techIcons'
import { portfolioTech } from '../data/profile'

export default function TechJourneyCard() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleWheel = (e) => {
      // Mengubah scroll vertikal mouse menjadi scroll horizontal pada kontainer ini
      if (e.deltaY !== 0) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    // Harus pakai passive: false agar bisa e.preventDefault()
    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <Card className="mx-auto flex h-full max-w-md flex-col overflow-hidden">
      <div className="p-6 pb-4">
        <CardTitle>Tech Stack Portfolio</CardTitle>
        <CardDescription className="mt-2.5 leading-relaxed text-[13px]">
          Teknologi modern yang saya gunakan untuk membangun website ini agar cepat, elegan, dan interaktif.
        </CardDescription>
      </div>

      {/* Area Scroll Horizontal */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6 pt-2 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] cursor-grab active:cursor-grabbing"
      >
        <div className="flex w-max gap-4">
          {portfolioTech.map((tech) => {
            const Icon = getTechIcon(tech.icon)
            return (
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                key={tech.name}
                className="group flex w-32 shrink-0 snap-center flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(248,248,248,0.02)] p-4 text-center shadow-[0px_0px_8px_0px_rgba(248,248,248,0.05)_inset] transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              >
                {/* Ikon dengan efek glassmorphism */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/5 shadow-inner">
                  {tech.logoUrl ? (
                    <img 
                      src={tech.logoUrl} 
                      alt={tech.name} 
                      className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110" 
                    />
                  ) : Icon ? (
                    <Icon
                      className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                  ) : null}
                </div>
                
                {/* Teks */}
                <div className="mt-1">
                  <h4 className="text-xs font-bold tracking-wide text-bone-light group-hover:text-white transition-colors">
                    {tech.name}
                  </h4>
                  <p className="mt-1.5 text-[10px] leading-relaxed text-bone-muted/80">
                    {tech.desc}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
