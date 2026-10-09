import { Label, Reveal } from './Reveal'

export default function About() {
  return (
    <section className="section container about" id="about">
      <Reveal>
        <Label>About</Label>
        <h2>How it started</h2>
      </Reveal>
      <Reveal delay={0.1} className="about-text">
        <p>
          React Right started in 2024 as a student project. We kept noticing how
          much harm happens in the gap between a disaster starting and help
          arriving, and wanted to see whether we could build anything useful
          for that gap.
        </p>
        <p>
          We’re not experts. We’re students figuring things out as we go, and
          so far that’s meant one robot prototype and some research. We’re
          sharing it here as we keep working on it.
        </p>
      </Reveal>
    </section>
  )
}
