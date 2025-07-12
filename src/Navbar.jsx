import { useState } from 'react'
import './App.css'

function Navbar() {
  const [navActive, setNavActive] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src="https://gumlet.assettype.com/freepressjournal/2023-09/ce68e021-3190-49e1-9078-f1bf0ad9425c/Untitled_design__8_.jpg" alt="Aditya Birla Grasim Logo" />
        </a>
      </div>
      <ul className={`nav-links${navActive ? ' nav-active' : ''}`}>
        <li><a href="#industries">Industries</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#sustainability">Sustainability</a></li>
        <li><a href="#innovation">Innovation</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="search-box">
          <input type="text" placeholder="Search..." />
          <button><i className="fas fa-search"></i></button>
        </li>
      </ul>
      <div className={`burger${navActive ? ' toggle' : ''}`} onClick={() => setNavActive(!navActive)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar