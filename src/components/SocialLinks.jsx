import { socials } from '../data/profile'
import { iconMap } from './icons'

// Komponen daftar ikon media sosial.
// Pakai SVG inline (ringan) + aria-label untuk aksesibilitas (perbaikan dari
// versi lama yang hanya ikon PNG tanpa teks alternatif).
export default function SocialLinks({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  }

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ name, url, icon }) => {
        const Icon = iconMap[icon]
        return (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink-700/60 text-bone-light transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:text-ember hover:shadow-lg hover:shadow-ember/20"
            >
              {Icon ? <Icon className={sizes[size]} /> : null}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
