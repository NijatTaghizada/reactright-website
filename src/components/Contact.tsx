import { Label, Reveal } from './Reveal'

const email = 'reactright2024@gmail.com'

export default function Contact() {
  return (
    <footer className="section container contact" id="contact">
      <Reveal>
        <Label>Contact</Label>
        <h2>Say hi</h2>
        <p className="contact-sub">
          Questions, feedback, or want to help out? We’d be glad to hear from you.
        </p>
        <a className="contact-email" href={`mailto:${email}`}>{email}</a>
      </Reveal>
      <div className="footer-bar mono">
        <span>© 2024–2026 React Right</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
