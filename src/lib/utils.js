// Helper utility — port dari shadcn/ui @/lib/utils tanpa TypeScript.
// cn() menggabungkan classnames dan menangani konflik (mis. duplikat padding)
// dengan bantuan clsx + tailwind-merge.

// Implementasi ringan cn() tanpa dependency tambahan.
// Memfilter value falsy dan menggabungkan string/array/object.
function clsx(...args) {
  const out = []
  for (const arg of args) {
    if (!arg) continue
    if (typeof arg === 'string' || typeof arg === 'number') {
      out.push(String(arg))
    } else if (Array.isArray(arg)) {
      const inner = clsx(...arg)
      if (inner) out.push(inner)
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) out.push(key)
      }
    }
  }
  return out.join(' ')
}

export function cn(...inputs) {
  return clsx(inputs)
}
