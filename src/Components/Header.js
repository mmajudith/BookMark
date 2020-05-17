import React from 'react'
import logo from '../images/logo-bookmark.svg'
import illust from '../images/illustration-hero.svg'
import hamMenu from '../images/icon-hamburger.svg'
import closeManu from '../images/icon-close.svg'
import '../Styles/Header.style.scss'

function Header() {
  return (
    <header>
      <div className="header-container">

        <nav className="header-nav">
          <div className="logo">
            <img src={logo} alt="bookmark-logo"/>
          </div>
            <img src={hamMenu} alt="hamburger-menu" className="open"/>
            <img src={closeManu} alt="close-menu" className="close"/>
          <div className="list-items">
            <ul>
              <li className="item"><a href="">Features</a></li>
              <li className="item"><a href="">Pricing</a></li>
              <li className="item"><a href="">Contact</a></li>
              <li><a href="" className="login">Login</a></li>
            </ul>
          </div>
        </nav>

        <div className="simple-illust-wrapper">
          <div className="simp-bookmark">
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.</p>
            <button className="chrome-btn">Get it on Chrome</button>    
            <button className="firefox-btn">Get it on Firefox</button>
          </div>
          <div className="illust-hero">
            <img src={illust} alt="illustration-hero"/>
          </div>
        </div>

      </div>  
    </header>
    
  )
}

export default Header
