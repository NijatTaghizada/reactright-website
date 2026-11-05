import { motion } from 'motion/react'

export default function Hero() {
  return (
    <header className="hero container" id="top">
      <h1>Trying to build tech that helps when disasters hit.</h1>
      <p className="hero-sub">
        React Right is a small startup in Stanford, California, working on
        robotics and data for natural disasters. We’re early, and still learning.
      </p>

      <a href="#projects" className="btn">See what we’ve built</a>

      <svg className="hero-snake" viewBox="0 0 600 80" fill="none" aria-hidden="true">
        <motion.path
          d="M10 50 C 60 10, 100 10, 150 45 S 240 80, 290 45 S 380 10, 430 45 S 520 75, 560 40"
          stroke="var(--ink)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="568" cy="36" r="8" fill="var(--ink)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 2.1 }}
        />
      </svg>
    </header>
  )
}
