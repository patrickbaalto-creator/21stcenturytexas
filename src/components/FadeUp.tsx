import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type From = 'up' | 'left' | 'right' | 'scale'

const variants: Record<From, { hidden: object; show: object }> = {
  up:    { hidden: { opacity: 0, y: 28 },        show: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -36 },       show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 36 },        show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 },  show: { opacity: 1, scale: 1 } },
}

export function FadeUp({
  children, delay = 0, className = '', from = 'up'
}: {
  children: ReactNode; delay?: number; className?: string; from?: From
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px 0px' as any })
  const v = variants[from]
  return (
    <motion.div ref={ref} className={className}
      initial={v.hidden}
      animate={inView ? v.show : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}
