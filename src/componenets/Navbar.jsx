import React from 'react'
import Logo from '../assets/images/logo.svg'
import { pageLinks, socialLinks } from '../data'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={Logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars" />
                    </button>
                </div>
                <ul className="nav-links" id="nav-links">
                    {
                        pageLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <a href={link.href} className="nav-link">
                                        {link.text}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="nav-icons">
                    {
                        // both approaces of destrucuring are valid
                        // socialLinks.map(({ id, href, iconName }) => {
                        socialLinks.map((link) => {
                            const { id, href, iconName } = link;
                            return (
                                <li key={id}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        className="nav-icon"
                                    >
                                        <i className={iconName} />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
