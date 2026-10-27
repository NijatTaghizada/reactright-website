import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <header className="hero container" id="top">
      <motion.p
        className="label mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Early-stage startup · Baku · Since 2024
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
      >
        Trying to build tech that helps when disasters hit.
      </motion.h1>
      <motion.p
        className="hero-sub"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease }}
      >
        React Right is a small startup working on robotics and data for
        natural disasters. We’re early, and still learning.
      </motion.p>

      <motion.a
        href="#projects"
        className="hero-cta mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        See what we’ve built ↓
      </motion.a>

      <svg className="hero-snake" viewBox="0 0 600 80" fill="none" aria-hidden="true">
        <motion.path
          d="M10 50 C 60 10, 100 10, 150 45 S 240 80, 290 45 S 380 10, 430 45 S 520 75, 560 40"
          stroke="var(--ember)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="568" cy="36" r="8" fill="var(--text)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 2.1 }}
        />
      </svg>
    </header>
  )
}
