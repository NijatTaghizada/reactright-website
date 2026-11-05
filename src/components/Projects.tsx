const projects = [
  {
    title: 'Snake robot',
    body: 'A segmented, snake-like robot meant to move through tight or unstable spaces, like collapsed buildings, where people and wheeled robots can’t easily get in. It’s an early-stage prototype that we built mostly to learn from.',
    note: null,
    links: [],
  },
  {
    title: 'Wildfire Severity Prediction',
    body: 'When a satellite first spots a new fire in California, can we tell whether it will grow past 1,000 acres? We matched 5,565 fires from 2012–2024 to NASA satellite detections and added weather, fuel and terrain data. For fires that still looked small at first, that context made predictions much better than the satellite signal alone.',
    note: 'This is a follow-up to our ISEF project, Wildfire Predictiveness With Explainable AI, which won a Grand Award at Regeneron ISEF 2025.',
    links: [
      { href: 'https://github.com/NijatTaghizada/wildfire-severity-prediction', label: 'Code on GitHub' },
      { href: 'https://isef.net/project/soft031t-wildfire-predictiveness-with-explainable-ai', label: 'ISEF project' },
    ],
  },
]

export default function Projects() {
  return (
    <section className="projects-band" id="projects">
      <div className="section container">
        <h2>What we’ve worked on</h2>
        <div className="projects">
          {projects.map(p => (
            <article key={p.title} className="project">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              {p.note && <p>{p.note}</p>}
              {p.links.length > 0 && (
                <div className="project-links">
                  {p.links.map(l => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
