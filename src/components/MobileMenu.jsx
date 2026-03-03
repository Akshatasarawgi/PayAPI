import React from "react"
import hamburgerMenuImage from "../../public/assets/shared/mobile/menu.svg"
import closeButtonImage from "../../public/assets/shared/mobile/close.svg"
import {Link} from "react-router-dom"

export default function MobileMenu() {
    const [show, setShow] = React.useState(false)
    const buttonRef = React.useRef(null)
    const firstLinkRef = React.useRef(null)

    function toggleMenu() {
        setShow(prevShow => !prevShow)
    }

    function closeMenu() {
        setShow(false)
    }

    function handleKeyDown(e) {
        if(e.key === "Escape") {
            setShow(false)
        }
    }

    React.useEffect(() => {
        if(show) {
            firstLinkRef.current?.focus()
        } else {
            buttonRef.current?.focus()
        }
    },[show])

    return (
        <div className="hamburger-menu">
            <button 
                className="hamburger-menu-button"
                aria-label={show ? "close navigation menu" : "open navigation menu"}
                aria-expanded={show}
                aria-controls="mobile-navigation"
                ref={buttonRef}
                onClick={toggleMenu}
            >
                <img src={hamburgerMenuImage} alt="" aria-hidden="true"/>
            </button>


            {show && (
                <nav 
                    id="mobile-navigation"
                    className="nav-menu"
                    onKeyDown={handleKeyDown}
                >
                    <button
                        className="close-button" 
                        onClick={toggleMenu}
                        aria-label="close navigation menu">
                        <img src={closeButtonImage} alt="" aria-hidden="true" />
                    </button>
              
                <Link to="pricing" ref={firstLinkRef} onClick={closeMenu}>Pricing</Link>
                <Link to="about" onClick={closeMenu}>About</Link>
                <Link to="contact" onClick={closeMenu}>Contact</Link>
                <Link to="/contact" className="nav-menu-schedule-button" onClick={closeMenu}>Schedule a Demo</Link>
            </nav> )}
        </div>
    )
}