import { Label, Reveal } from './Reveal'

const projects = [
  {
    tag: 'Early-stage prototype',
    title: 'Snake robot',
    body: 'A segmented, snake-like robot meant to move through tight or unstable spaces, like collapsed buildings, where people and wheeled robots can’t easily get in. It’s an early-stage prototype: a proof of concept we built to learn from, not a finished rescue tool.',
    tags: ['Robotics', 'Search & rescue'],
    link: null,
  },
  {
    tag: 'Research · ISEF 2025',
    title: 'Wildfire Predictiveness With Explainable AI',
    body: 'A machine-learning study on estimating wildfire risk from NASA satellite data, using XGBoost and TabNet models and SHAP to explain what drives each prediction. Co-authored by Nijat Taghizada, presented at Regeneron ISEF 2025 and published at ISPEC.',
    tags: ['Machine learning', 'Wildfires'],
    link: { href: 'https://isef.net/project/soft031t-wildfire-predictiveness-with-explainable-ai', label: 'View the ISEF project' },
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
            <ul className="chips">
              {p.tags.map(t => <li key={t} className="mono">{t}</li>)}
            </ul>
            {p.link && (
              <a className="card-link mono" href={p.link.href} target="_blank" rel="noreferrer">
                {p.link.label} <span aria-hidden="true">↗</span>
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
