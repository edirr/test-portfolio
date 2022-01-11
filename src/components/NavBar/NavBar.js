import React from 'react';
import './NavBar.css'
import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <nav className='NavBar'>
            <div className='navLogo'>Logo</div>
            <div className='navBarText'>
                <ul>
                    <Link className='li' to='landingPage' smooth={true}>
                        Landing Page
                    </Link>
                    <Link className='li' to='about' smooth={true}>
                        About
                    </Link>
                    <Link className='li' to='projects' smooth={true}>
                        Projects
                    </Link>
                    <Link className='li' to='priorExperience' smooth={true}>
                        Prior Experience
                    </Link>
                    <Link className='li' to='contact' smooth={true}>
                        Contact
                    </Link>
                </ul>

            </div>
        </nav>
    )
}