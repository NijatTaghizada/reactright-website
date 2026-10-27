import { Label, Reveal } from './Reveal'

const projects = [
  {
    tag: 'Early-stage prototype',
    title: 'Snake robot',
    body: 'A segmented, snake-like robot meant to move through tight or unstable spaces, like collapsed buildings, where people and wheeled robots can’t easily get in. It’s an early-stage prototype: a proof of concept we built to learn from, not a finished rescue tool.',
    note: null,
    tags: ['Robotics', 'Search & rescue'],
    links: [],
  },
  {
    tag: 'Research · 2026',
    title: 'Wildfire Severity Prediction',
    body: 'When a satellite first spots a new fire in California, can we tell whether it will grow past 1,000 acres? We matched 5,565 fires from 2012–2024 to NASA satellite detections and added weather, fuel and terrain data. For fires that still looked small at first, that context made predictions much better than the satellite signal alone.',
    note: 'A follow-up to our ISEF project, Wildfire Predictiveness With Explainable AI, which won a Grand Award at Regeneron ISEF 2025.',
    tags: ['Machine learning', 'Wildfires', 'SHAP'],
    links: [
      { href: 'https://github.com/NijatTaghizada/wildfire-severity-prediction', label: 'Code on GitHub' },
      { href: 'https://isef.net/project/soft031t-wildfire-predictiveness-with-explainable-ai', label: 'ISEF project' },
    ],
  },
]

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <Reveal>
        <Label>Projects</Label>
        <h2>What we’ve worked on</h2>
      </Reveal>
      <div className="projects">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className="card">
            <p className="card-tag mono">{p.tag}</p>
            <h3>{p.title}</h3>
            <p className="card-body">{p.body}</p>
            {p.note && <p className="card-note">{p.note}</p>}
            <ul className="chips">
              {p.tags.map(t => <li key={t} className="mono">{t}</li>)}
            </ul>
            {p.links.length > 0 && (
              <div className="card-links">
                {p.links.map(l => (
                  <a key={l.href} className="mono" href={l.href} target="_blank" rel="noreferrer">
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
