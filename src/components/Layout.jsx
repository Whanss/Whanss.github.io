import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CustomCursor from './CustomCursor'
import AnimatedBackground from './AnimatedBackground'

// Layout wrapper: Navbar + konten halaman + Footer.
// Sekaligus scroll ke atas tiap pindah halaman.
export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Visual Effect Components */}
      <CustomCursor />
      <AnimatedBackground />
      
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
