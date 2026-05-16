function Home() {
    return(
        <main className="index-container">
        <section id="home" className="index-hero">
            <div className="index-content">
                <div>
                    <h1 className="hero"><span className="hero-welcome">¡Hola! Mucho gusto.</span></h1>
                    <h2 className="name">I am <span className="hero-name">Percy Njuguna</span><br/>
                        And I am a <span className="hero-role">Full Stack Developer</span></h2>
                    <p className="hero-aim" >My aim is to engineer <span className ="hero-highlight"> scalable, high-performance
                        solutions </span>
                        that solve real-world problems, bridging the gap between maintainable code
                        and <span className="hero-highlight"> exceptional user experience </span>
                        through <span className="hero-highlight">modern web standards</span>.
                    </p>
                </div>
                <div>
                    <img className="index-hero-image" src="/images/hero_index.jpg" alt="Percy Njuguna - Creative Developer Portfolio Hero"/>
                </div>
            </div>

            <div className="button-n-icons">

                <div className="home-buttons">

                    <a href="#contact">
                        <button className="hire"><b>Hire Me</b></button>
                    </a>

                    <button className="cv">Download CV</button>


                </div>



                <div className="social-links">
                    <a href="https://github.com/upsilonvibes" target="_blank" rel="noopener noreferrer"><i
                            className="fa-brands fa-github github"></i></a>
                    <a href="https://linkedin.com/in/percy.smartanecdote168@gmail.com" target="_blank"
                        rel="noopener noreferrer"><i className="fa-brands fa-linkedin linkedin"></i></a>
                    <a href="mailto:percy.smartanecdote169@email.com"><i className="fa-solid  fa-envelope email"></i></a>


                </div>
            </div>
        </section>

    </main>

    )
}
export default Home;