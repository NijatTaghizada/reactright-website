import { motion } from 'motion/react'

export default function Hero() {
  return (
    <header className="hero glow" id="top">
      <div className="container hero-top">
        <div className="hero-stats">
          <div className="stat"><b>5,565</b><span>Fires in our dataset</span></div>
          <div className="stat"><b>2012–2024</b><span>Years of data</span></div>
        </div>
        <div className="hero-center">
          <h1>Trying to build tech that <em>helps</em> when disasters hit.</h1>
          <p className="hero-sub">
            React Right is a small startup in Stanford using data and machine
            learning to study natural disasters. We’re early, and still learning.
          </p>
          <a href="#projects" className="btn">See our research</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><b>2</b><span>Wildfire studies</span></div>
          <div className="stat"><b>2024</b><span>Founded</span></div>
        </div>
      </div>

      <div className="container hero-cards">
        <a href="#projects" className="hero-card glass">
          <h3>Wildfire Severity Prediction</h3>
          <p>When a satellite spots a new fire, will it grow past 1,000 acres?</p>
          <svg viewBox="0 0 600 80" fill="none" aria-hidden="true">
            <motion.path
              d="M10 50 C 60 10, 100 10, 150 45 S 240 80, 290 45 S 380 10, 430 45 S 520 75, 590 40"
              stroke="var(--ember)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
            />
          </svg>
        </a>
        <a href="#projects" className="hero-card glass">
          <h3>The data</h3>
          <p>NASA satellite detections, plus weather, fuel and terrain data.</p>
        </a>
        <a href="#projects" className="hero-card glass">
          <h3>Grand Award, Regeneron ISEF 2025</h3>
          <p>Wildfire Predictiveness With Explainable AI</p>
        </a>
      </div>
    </header>
  )
}
