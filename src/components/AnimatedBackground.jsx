import { motion } from 'framer-motion'
import { useMemo } from 'react'

/**
 * AnimatedBackground
 * Renders dynamic gradient orbs and floating particles behind all content.
 * Pure CSS/Framer Motion — lightweight and always running.
 */
export default function AnimatedBackground() {
  // Generate a stable set of particles once
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 5,
      })),
    []
  )

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-navy-900">
      {/* Dynamic gradient orbs */}
      <motion.div
        className="orb"
        style={{ width: 520, height: 520, top: '-10%', left: '-8%', background: '#2563eb' }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb"
        style={{ width: 460, height: 460, bottom: '-12%', right: '-6%', background: '#4f8cff' }}
        animate={{ x: [0, -50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb"
        style={{ width: 360, height: 360, top: '40%', left: '55%', background: '#1e3a8a' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#4f8cff 1px, transparent 1px), linear-gradient(90deg, #4f8cff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-glow-soft/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.8, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
