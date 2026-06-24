import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }) // Start off-screen
  const [isHovering, setIsHovering] = useState(false)
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Outer Ring / Glow Ambient (Indigo) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-[#6366f1]/50 rounded-full pointer-events-none z-[9998] flex items-center justify-center bg-[#1e1b4b]/30 backdrop-blur-[2px] shadow-[0_0_15px_rgba(79,70,229,0.2)]"
        animate={{ 
          x: mousePosition.x - 24, 
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 1 : 0.6
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />

      {/* Main Cursor Arrow (Hitam Indigo, Beda dari normal) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
        animate={{ 
          x: mousePosition.x - 2, // Posisi ujung panah (tip) tepat di kursor
          y: mousePosition.y - 2,
          scale: isHovering ? 0 : 1,
          rotate: isHovering ? -45 : 0
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fill menggunakan hitam indigo (#110d26) dan garis outline terang indigo */}
          <path d="M4 3L20 10L13 13L10 20L4 3Z" fill="#110d26" stroke="#818cf8" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Hover Dot (Muncul saat tombol di-hover menggantikan panah) */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#818cf8] rounded-full pointer-events-none z-[9999] shadow-[0_0_12px_#818cf8]"
        animate={{ 
          x: mousePosition.x - 5, 
          y: mousePosition.y - 5,
          scale: isHovering ? 1 : 0
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
    </>
  )
}
