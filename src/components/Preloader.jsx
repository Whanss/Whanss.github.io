// Preloader / splash screen — tampil sekali saat web pertama dibuka.
// Logo brand "Whanss." + progress bar, lalu fade-out mulus.
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  // Animasikan angka progress 0 → 100, lalu sembunyikan splash.
  useEffect(() => {
    let current = 0
    const tick = setInterval(() => {
      // Naik acak biar terasa natural, melambat di akhir.
      current += Math.random() * 18 + 6
      if (current >= 100) {
        current = 100
        clearInterval(tick)
        // Beri jeda sebentar di 100% sebelum fade-out.
        setTimeout(() => setLoading(false), 450)
      }
      setProgress(Math.min(Math.round(current), 100))
    }, 180)

    return () => clearInterval(tick)
  }, [])

  // Kunci scroll selama preloader aktif.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="select-none text-4xl font-extrabold uppercase italic tracking-tight text-bone-light sm:text-5xl"
          >
            Whanss
            <motion.span
              className="text-ember"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              .
            </motion.span>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-8 h-[3px] w-44 overflow-hidden rounded-full bg-white/10 sm:w-56">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-ember to-ember-light"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Persen */}
          <div className="mt-3 text-xs font-medium tabular-nums tracking-widest text-bone-muted">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
