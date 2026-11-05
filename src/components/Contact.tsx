const email = 'reactright2024@gmail.com'

export default function Contact() {
  return (
    <footer className="contact glow" id="contact">
      <div className="section container">
        <h2>Say hi</h2>
        <p className="contact-sub">
          Questions, feedback, or want to help out? We’d be glad to hear from you.
        </p>
        <a className="btn" href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="footer-bar">
        <div className="container">
          <span>© 2024–2026 React Right</span>
          <span>Stanford and Baku</span>
        </div>
      </div>
    </footer>
  )
}
