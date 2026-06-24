// Pemetaan key → komponen logo brand dari react-icons.
// Semua logo pakai warna brand asli (lihat di data/profile.js).
// Dipakai di TechJourneyCard, Portfolio, dan tempat lain.
import {
  SiCplusplus, SiC, SiHtml5, SiCss, SiJavascript,
  SiPhp, SiMariadb, SiMysql, SiSupabase, SiLaravel,
  SiVuedotjs, SiNextdotjs, SiReact, SiTailwindcss,
  SiVite, SiGit, SiGithub, SiPython,
} from 'react-icons/si'

export const techIconMap = {
  cpp: SiCplusplus,
  c: SiC,
  html: SiHtml5,
  css: SiCss,
  web: SiHtml5, // alias untuk "HTML/CSS/JS"
  js: SiJavascript,
  php: SiPhp,
  mariadb: SiMariadb,
  mysql: SiMysql,
  supabase: SiSupabase,
  laravel: SiLaravel,
  vue: SiVuedotjs,
  next: SiNextdotjs,
  react: SiReact,
  tailwind: SiTailwindcss,
  vite: SiVite,
  git: SiGit,
  github: SiGithub,
  python: SiPython,
}

// Ambil komponen ikon berdasarkan key
export function getTechIcon(key) {
  return techIconMap[key] || null
}
