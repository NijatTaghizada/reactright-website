import { motion } from 'motion/react'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-top">
        <div className="hero-stats">
          <div className="stat"><b>2024</b><span>Founded</span></div>
          <div className="stat"><b>5,565</b><span>Fires in our dataset</span></div>
        </div>
        <div className="hero-center">
          <h1>Trying to build tech that <em>helps</em> when disasters hit.</h1>
          <p className="hero-sub">
            React Right is a small startup in Stanford working on robotics and
            data for natural disasters. We’re early, and still learning.
          </p>
          <a href="#projects" className="btn">See what we’ve built</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><b>1</b><span>Robot prototype</span></div>
          <div className="stat"><b>2</b><span>Wildfire studies</span></div>
        </div>
      </div>

      <div className="container hero-cards">
        <a href="#projects" className="hero-card">
          <h3>Snake robot</h3>
          <p>Early-stage prototype</p>
          <svg viewBox="0 0 600 80" fill="none" aria-hidden="true">
            <motion.path
              d="M10 50 C 60 10, 100 10, 150 45 S 240 80, 290 45 S 380 10, 430 45 S 520 75, 560 40"
              stroke="var(--ember)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="568" cy="36" r="10" fill="var(--cream)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 2.1 }}
            />
          </svg>
        </a>
        <a href="#projects" className="hero-card">
          <h3>Wildfire Severity Prediction</h3>
          <p>When a satellite spots a new fire, will it grow past 1,000 acres?</p>
        </a>
        <a href="#projects" className="hero-card">
          <h3>Grand Award, Regeneron ISEF 2025</h3>
          <p>Wildfire Predictiveness With Explainable AI</p>
        </a>
      </div>
    </header>
  )
}
