function Services() {
  return (
    < main className="service-container" >
      <section id="services" className="service-hero">
        <h1 className="next-title">Technical Services</h1>
        <p className="next-p">Leveraging modern web technologies and multilingual communication to build better digital experiences.</p>
      </section>

      <div className="service-grid">
        <div className="service-card">
          <div className="service-icon"><i className="fa-solid fa-code"></i></div>
          <h3 className="service-title">Frontend Development</h3>
          <p className="project-text">Building responsive, high-performance websites using HTML5 and CSS3 Grid/Flexbox. Focused on clean code and SEO-friendly structures.</p>
          <ul className="service-list">
            <li><i className="fa-solid fa-check"></i> Landing Pages</li>
            <li><i className="fa-solid fa-check"></i> Portfolio Sites</li>
            <li><i className="fa-solid fa-check"></i> CSS Refactoring</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon"><i className="fa-solid fa-pen-nib"></i></div>
          <h3 className="service-title">Technical Writing</h3>
          <p className="project-text">Documenting technical journeys and project milestones. Specialized in creating beginner-friendly coding logs and tutorials.</p>
          <ul className="service-list">
            <li><i className="fa-solid fa-check"></i> Blog Management</li>
            <li><i className="fa-solid fa-check"></i> Documentation</li>
            <li><i className="fa-solid fa-check"></i> GitHub READMEs</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon"><i className="fa-solid fa-language"></i></div>
          <h3 className="service-title">Linguistic Assistance</h3>
          <p className="project-text">Providing English language guidance and basic Spanish-to-English translation for technical projects and peer reviews.</p>
          <ul className="service-list">
            <li><i className="fa-solid fa-check"></i> Spanish Peer Support</li>
            <li><i className="fa-solid fa-check"></i> Content Translation</li>
            <li><i className="fa-solid fa-check"></i> Cross-Cultural Communication</li>
          </ul>
        </div >
      </div >
      <section className="services-cta">
        <h2 className="next-title">Have a project in mind?</h2>
        <p className="next-p">Whether it's a website build or a technical collaboration, I'm ready to help.</p>
        <a href="#contact" className="github-main-btn">
          Start a Conversation
        </a>
      </section >
    </main >
  )
}
export default Services;