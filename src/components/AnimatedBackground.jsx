import { useEffect, useState } from 'react'

// Simbol-simbol kode khas VS Code
const codeSymbols = ['{ }', '< />', '=>', '[]', '()', '&&', '||', '!=', ';', '/>', 'const', 'import', 'export']

export default function AnimatedBackground() {
  const [elements, setElements] = useState([])

  useEffect(() => {
    // Generate elemen statis untuk animasi melayang
    const newElements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 25 + 15}s`, // 15-40 detik
      delay: `-${Math.random() * 20}s`, // Delay negatif agar animasi sudah mulai saat halaman diload
      fontSize: `${Math.random() * 20 + 12}px`, // 12px hingga 32px
      opacity: Math.random() * 0.1 + 0.02, // Transparansi halus
      color: ['#569cd6', '#4ec9b0', '#ce9178', '#dcdcaa', '#c586c0'][Math.floor(Math.random() * 5)] // Warna syntax VS Code
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#1e1e1e] font-mono">
      {/* Background Hitam Dove (Matte Black VS Code) */}
      
      {/* Grid Pattern halus khas editor code */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Code Symbols */}
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute bottom-[-10%] z-0 select-none animate-float-up whitespace-nowrap font-bold"
          style={{
            left: el.left,
            fontSize: el.fontSize,
            opacity: el.opacity,
            animationDuration: el.animationDuration,
            animationDelay: el.delay,
            color: el.color
          }}
        >
          {el.symbol}
        </div>
      ))}

      {/* Efek Vignette (gelap di ujung-ujung tepi layar untuk kesan elegan) */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,20,20,0.95)_100%)] pointer-events-none" />
    </div>
  )
}
