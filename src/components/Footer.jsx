import React from "react"
import logo from "../../public/assets/shared/desktop/logo.svg"
import facebookLink from "../../public/assets/shared/desktop/facebook.svg"
import twitterLink from "../../public/assets/shared/desktop/twitter.svg"
import linkedinLink from "../../public/assets/shared/desktop/linkedin.svg"
import {Link, NavLink} from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <Link to="/" className="footer-logo"><img src={logo} alt="image of logo"/></Link>
            <div className="footer-menu">
            <nav>
                <NavLink to="pricing" className={({isActive}) => isActive ? "active-link" : "link"}>Pricing</NavLink>
                <NavLink to="about" className={({isActive}) => isActive ? "active-link" : "link"}>About</NavLink>
                <NavLink to="contact" className={({isActive}) => isActive ? "active-link" : "link"}>Contact</NavLink>
            </nav>
            <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank"><img src={facebookLink} alt="login to facebook" /></a>
                <a href="https://www.twitter.com/" target="_blank"><img src={twitterLink} alt="login to twitter" /></a>
                <a href="https://www.LinkedIn.com/" target="_blank"><img src={linkedinLink} alt="login to linkedin" /></a>
            </div>
            </div> 
        </footer>
    )
}