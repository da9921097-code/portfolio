export default function Home() {
  return (
    <section id="home" className="profile-card">
      <div className="section-inner">
        <div>
          <h1 className="section-title">
            <span className="typing-text" aria-label="Hi, I'm A. Dharani Dharan">
              Hi, I&apos;m A. Dharani Dharan
            </span>
          </h1>
          <p className="subheading">Passionate Developer building modern web applications</p>
          <div className="button-group" style={{ marginTop: '16px' }}>
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <img
          className="profile-image"
          src="https://drive.google.com/uc?export=view&id=1ll58YyoW4grfmY5zmEyDpCwWt9Maiizp"
          alt="Profile photo of A. Dharani Dharan"
        />
      </div>
    </section>
  )
}
