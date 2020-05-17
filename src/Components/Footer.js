import React from 'react'
import logo from '../images/logo-bookmark-two.svg'
import twitter from '../images/icon-twitter.svg'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import '../Styles/Footer.style.scss'

function Footer() {
  return (
    <footer>

        <div className="footer-nav">
            <div >
                <img src={logo} alt="footer-logo" className="footer-logo"/>
            </div>
            <div className="list-items">
                <ul className="items">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="icons">
                <FaFacebookSquare className="facebook icon"/>
                <FaTwitter className="twitter icon"/>
            </div>
        </div>

        <div>
            <p className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Onyekwelu Judith</a>.
            </p>
        </div>

    </footer>
  )
}

export default Footer
