function About() {
    return(
        < main className="about-container" >
                <section className="about-hero">
                  <div className="about-headline-queries">
                    <h1 className="about-headline">About Me</h1>

                    <div>
                      <img className="about-hero-image" src="/images/My Display Picture.jpg" alt="About Image" />
                    </div>
                  </div>
                  <div className="about-content">
                    <p className="about-content-1">
                      <span className="trait-1"> Developer</span> | 
                      <span className="trait-2"> Writer</span> |
                      <span className="trait-3"> Lifelong Learner</span> |
                      <span className="trait-4"> Chief Programmer</span>
                    </p>
                    <p className="about-content-2">
                      I'm <span className="about-name"><b>Percy Njuguna</b></span>, a tech

                      enthusiast specializing in <span className="about-highlight">Full-Stack Web Development</span>. className

                      Whether I'm <span className="about-highlight">deploying code on GitHub</span>, <span
                        className="about-highlight">writing for my blog</span>, or <span className="about-highlight">sharpening
                          my Spanish skills</span>, I'm

                      always building something new.<br></br>

                      <a href="#"><span className="about-cta">Let's create something impactful.</span></a>

                    </p>
                    <div className="education-box">
                      <h3>Education</h3>
                      <ul>
                        <li><i className="fa-solid fa-location-dot"></i> Nairobi, Kenya</li>
                        <li><i className="fa-solid fa-graduation-cap"></i> Gap Year / Aspiring Dev (2025-2026)</li>
                      </ul>
                    </div>

                  </div>
                </section >

                <section className="about-story">
                  <div className="story-div" />
                  <div>
                    <h1 className="story-title">My Story</h1>
                  </div>
                  <div className="story-div-p">
                    <p className="story-p">
                      My journey into technology began with a simple curiosity about how
                      software actually works. Without a guide, I started the only way I knew how: manually typing
                      lines
                      of code into <b>Notepad</b> and hoping for the best.
                    </p>

                    <p className="story-p">
                      Those early days were full of "red error messages" and frustration. At one point, I truly
                      believed
                      that programming was a world I wasn't meant to enter. However, transitioning to <b>VS
                        Code</b>
                      and later adopting AI tools changed everything. It taught me that coding isn't about being
                      perfect; it's about having the
                      patience to solve one problem at a time.
                    </p>

                    <p className="story-p">
                      This mindset of constant growth is also what led me to start my <b>Spanish learning
                        journey</b>.
                      Whether I am mastering <b>JavaScript</b> logic or preparing for the <b>DELE/SIELE</b> exams,
                      I've
                      learned that fluency—in both code and language—requires showing up even when the path is
                      difficult. <br />
                      I move forward with a simple philosophy: <span className="story-philosophy"><b>"Paso a paso, se
                        llega lejos"</b> <i>(Step by step, one goes far)</i></span>.
                    </p>
                  </div>
                </section>

                <section className="about-tech">
                  <h2 className="tech-title">Tech Stack Visualizer</h2>
                  <div className="tech-grid">
                    <div className="tech-card">
                      <h3><i className="fa-solid fa-code"></i> Frontend</h3>
                      <div className="icons">
                        <i className="fa-brands fa-html5" title="HTML5"></i>
                        <i className="fa-brands fa-css3-alt" title="CSS3"></i>
                        <i className="fa-brands fa-js" title="JavaScript"></i>
                      </div>
                    </div>
                    <div className="tech-card">
                      <h3><i className="fa-solid fa-server"></i> Backend</h3>
                      <div className="icons">
                        <i className="fa-brands fa-node-js" title="Node.js"></i>
                        <i className="fa-solid fa-database" title="Firebase/SQL"></i>
                      </div>
                    </div>
                    <div className="tech-card">
                      <h3><i className="fa-solid fa-tools"></i> Tools</h3>
                      <div className="icons">
                        <i className="fa-brands fa-github" title="GitHub"></i>
                        <i className="fa-solid fa-terminal" title="CMD/Git"></i>
                        <i className="fa-solid fa-pen-nib" title="VS Code"></i>
                      </div>
                    </div>
                  </div>




                  <div className="about-next">
                    <h2 className="next-title">What's Next?</h2>
                    <p className="next-p">See my latest work on my <a href="projects.html"><span
                      className="next-link">Projects
                      Page</span></a> or read my latest thoughts on my <a href="blog.html"><span
                        className="next-link">Blog.</span></a></p>
                  </div>
                </section>








              </main >
    )
}
export default About;