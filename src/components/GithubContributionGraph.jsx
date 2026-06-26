import { useEffect, useState } from 'react'

export default function GithubContributionGraph() {
  const [grid, setGrid] = useState([])
  
  useEffect(() => {
    // Generate 52 columns (weeks), 7 rows (days)
    const cols = 52
    const rows = 7
    const initialGrid = Array.from({ length: cols }, () =>
      Array.from({ length: rows }, () => {
        const r = Math.random()
        if (r > 0.95) return 4
        if (r > 0.85) return 3
        if (r > 0.70) return 2
        if (r > 0.50) return 1
        return 0
      })
    )
    setGrid(initialGrid)

    // Animasi: "commit" buatan secara acak untuk memberikan kesan hidup
    const interval = setInterval(() => {
      setGrid(prev => {
        const next = [...prev]
        const w = Math.floor(Math.random() * cols)
        const d = Math.floor(Math.random() * rows)
        
        next[w] = [...next[w]] // clone inner array
        next[w][d] = Math.floor(Math.random() * 4) + 1 // random 1-4
        
        return next
      })
    }, 800) // update every 800ms

    return () => clearInterval(interval)
  }, [])

  const getColor = (level) => {
    switch (level) {
      case 4: return 'bg-[#39d353] shadow-[0_0_8px_#39d353]' // GitHub max green
      case 3: return 'bg-[#26a641]'
      case 2: return 'bg-[#006d32]'
      case 1: return 'bg-[#0e4429]'
      default: return 'bg-[#161b22]' // GitHub empty
    }
  }

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <div className="w-full select-none overflow-hidden rounded-3xl border border-[#30363d] bg-[#0d1117] p-5 transition-all hover:border-[#8b949e]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#c9d1d9]">Git Contributions</h3>
        <span className="text-xs text-bone-muted/60">Simulated live tracking</span>
      </div>

      {/* Kontainer scrollable horizontal (berguna untuk layar kecil) */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
        <div className="min-w-max">
          {/* Label Bulan */}
          <div className="mb-2 flex w-full justify-between pl-8 pr-2 text-[10px] text-bone-muted/60">
            {months.map(m => <span key={m}>{m}</span>)}
          </div>

          <div className="flex items-start gap-1">
            {/* Label Hari */}
            <div className="flex flex-col justify-between pr-2 text-[10px] text-bone-muted/60 leading-tight">
              {days.map((day, i) => (
                <span key={day} className="flex h-3 items-center mb-1">
                  {i % 2 === 1 ? day : ''}
                </span>
              ))}
            </div>
            
            {/* Grid Kotak Kontribusi */}
            {grid.map((week, w) => (
              <div key={w} className="flex flex-col gap-1">
                {week.map((level, d) => (
                  <div 
                    key={`${w}-${d}`} 
                    className={`h-3 w-3 rounded-[2px] transition-all duration-1000 ${getColor(level)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-2 flex items-center justify-end gap-2 text-[10px] text-bone-muted/60">
        <span>Less</span>
        <div className="h-3 w-3 rounded-[2px] bg-[#161b22]" />
        <div className="h-3 w-3 rounded-[2px] bg-[#0e4429]" />
        <div className="h-3 w-3 rounded-[2px] bg-[#006d32]" />
        <div className="h-3 w-3 rounded-[2px] bg-[#26a641]" />
        <div className="h-3 w-3 rounded-[2px] bg-[#39d353] shadow-[0_0_5px_#39d353]" />
        <span>More</span>
      </div>
    </div>
  )
}
