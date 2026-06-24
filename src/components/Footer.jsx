import { profile } from '../data/profile'

// Footer konsisten di semua halaman (perbaikan dari versi lama yang footer
// fixed menumpuk konten & line-height:0). Sekarang flow normal di bawah.
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 bg-ink-900/80 py-6">
      <div className="container-page text-center">
        <p className="text-sm text-bone-muted">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-bone-muted/70">
          Dibangun dengan React + Vite + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
