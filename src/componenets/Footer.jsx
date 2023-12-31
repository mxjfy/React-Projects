import React from 'react'
import { pageLinks, socialLinks } from '../data'

const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {
                    pageLinks.map((link) =>{
                        const { id, href, text } = link;
                        return (
                            <li key={id}>
                                <a href={href} className="footer-link">
                                    {text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="footer-icons">
                {
                    socialLinks.map((link) =>{
                        const { id, href, iconName } = link;
                        return (
                            <li key={id}>
                                <a
                                    href={href}
                                    target="_blank"
                                    className="footer-icon"
                                >
                                    <i className={iconName} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <p className="copyright">
                copyright ©Backroads travel tours company
                <span id="date" />{ new Date().getFullYear() } all rights reserved
            </p>
        </footer>
    )
}

export default Footer
