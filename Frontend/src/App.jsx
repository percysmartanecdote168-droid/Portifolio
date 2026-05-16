import './App.css'
import { useEffect, useState} from "react";
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'



function App() {
  useEffect(() => { //1. Component Sentinel: Runs once when the component mounts to setup the listener
  const sections = document.querySelectorAll("section");// Scans the DOM for all section elements
  const navLinks = document.querySelectorAll(".nav-links a");// Scans for all anchor links inside navigation
// An empty tracker to hold the ID of the section currently on screen
  const handleScroll = () => {
    let current = ""; 
// Calculates the boundary of each section with a 150px offset for better timing
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
// If the user has scrolled past the top boundary of this section, mark it as current
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) =>{
      // De-selects all nav links by removing the active styling class
      link.classList.remove("active");
// If the link's href matches the current section ID, highlight it
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };
//2. Event Binding: Attaches the scroll listener to the window browser
  window.addEventListener("scroll", handleScroll);
// 3. Cleanup Duty: Unbinds the listener when the component unmounts to prevent memory leaks
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <div className="index-body">
      {/* === Navigation === */}
      <header>

        <nav className="nav">


          <img className="logo" src="/images/logo.png" alt="PN - Percy Njuguna Full-Stack Developer Logo"/>


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
          <a href="mailto:percy.smartanecdote169@email.com">
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

