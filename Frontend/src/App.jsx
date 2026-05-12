import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App() {
  return (
    <div className="index-body">
      {/* === Navigation === */}
      <header>

        <nav className="nav">


          <img className="logo" src="Images/Portifolio Logo.png" />


          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>
          <a
            href="https://wa.me/254795557525?text=Hi%20Percy,%20I'm%20interested%20in%20your%20web%20development%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <button className="header-button"><b>LET'S CHAT!</b></button>
          </a>
        </nav>

      </header>

      {/* === PAGES === */}
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="projects"><Projects /></div>
      <div id="blog"><Blog /></div>
      <div id="contact"><Contact /></div>

      

    {/* === FOOTER === */ }
  <footer className="footer" >
    <div className="quick-view-bar">
      <span><i className="fa-solid fa-location-dot"></i> Nairobi, Kenya</span>
      <span><i className="fa-solid fa-code"></i> Focus: Node.js & Spanish</span>
      <span><i className="fa-solid fa-circle-check"></i> Open for Opportunities</span>
    </div>
    <div className="footer-div">
      <p>&copy; 2026 Percy Njuguna. All rights reserved.</p>
      <div className="footer-div1">
        <div><b>CONNECT:</b></div>
        <div className="footer-social-links">
          <a href="https://github.com/upsilonvibes" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github github"></i>
          </a>
          <a href="https://t.me/upsilon_vibes" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-telegram telegram"></i>
          </a>
          <a href="https://linkedin.com/in/percy-njuguna" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin linkedin"></i>
          </a>
          <a href="mailto:percy.smartanecdote168@email.com">
            <i className="fa-solid fa-envelope email"></i>
          </a>
        </div>
      </div>
    </div>
  </footer >
    </div >
  )
}

export default App

