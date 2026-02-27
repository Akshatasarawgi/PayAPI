import React from "react"
import hamburgerMenuImage from "../../public/assets/shared/mobile/menu.svg"
import closeButtonImage from "../../public/assets/shared/mobile/close.svg"
import {Link} from "react-router-dom"

export default function MobileMenu() {

    const [show, setShow] = React.useState(false)

    function handleClick() {
        setShow(prevShow => !prevShow)
    }

    return (
        <div className="hamburger-menu">
            <img src={hamburgerMenuImage} alt="click here to display the menu" onClick={handleClick} className="hamburger-menu-button"/>
            {show && <div className="nav-menu">
                <img src={closeButtonImage} alt="click here to close the top menu" className="close-button" onClick={handleClick}/>
                <Link to="pricing">Pricing</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="/contact" className="nav-menu-schedule-button">Schedule a Demo</Link>
            </div> }
        </div>
    )
}