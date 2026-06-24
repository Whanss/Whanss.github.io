// Card primitives — port dari komponen 21st.dev / shadcn-style.
// Dipakai di seluruh halaman agar styling konsisten.
import React from 'react'
import { cn } from '../../lib/utils'

export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        // Glassmorphism dark card dengan border halus + inner shadow
        'w-full rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-[2px_4px_16px_0px_rgba(255,255,255,0.04)_inset] backdrop-blur-md',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ className, children, ...props }) => (
  <div className={cn('flex flex-col gap-1.5 pb-3', className)} {...props}>
    {children}
  </div>
)

export const CardTitle = ({ className, children, ...props }) => (
  <h3
    className={cn('text-lg font-semibold leading-none tracking-tight text-bone-light', className)}
    {...props}
  >
    {children}
  </h3>
)

export const CardDescription = ({ className, children, ...props }) => (
  <p
    className={cn('text-sm text-bone-muted', className)}
    {...props}
  >
    {children}
  </p>
)

export const CardContent = ({ className, children, ...props }) => (
  <div className={cn('pt-2', className)} {...props}>
    {children}
  </div>
)

export const CardFooter = ({ className, children, ...props }) => (
  <div className={cn('flex items-center pt-4', className)} {...props}>
    {children}
  </div>
)

// Container khusus untuk area skeleton/animasi (mask radial gradient halus)
export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative z-40 rounded-xl',
        showGradient &&
          'bg-neutral-300/5 [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
