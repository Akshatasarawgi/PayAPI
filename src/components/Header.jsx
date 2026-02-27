import React from "react"
import logo from "../../public/assets/shared/desktop/logo.svg"
import {Link, NavLink} from "react-router-dom"
import MobileMenu from "../components/MobileMenu"

export default function Header() {
    return (
        <header>
            <Link to="/"><img src={logo} alt="image of logo"/></Link>
            <div className="header-menu">
            <nav>
                <NavLink to="pricing" className={({isActive}) => isActive ? "active-link" : "link"}>Pricing</NavLink>
                <NavLink to="about" className={({isActive}) => isActive ? "active-link" : "link"}>About</NavLink>
                <NavLink to="contact" className={({isActive}) => isActive ? "active-link" : "link"}>Contact</NavLink>
            </nav>
            <Link to="/contact" className="schedule-button">Schedule a Demo</Link>
            </div>
            <MobileMenu />
        </header>
    )
}