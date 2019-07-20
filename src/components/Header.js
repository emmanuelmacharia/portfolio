import React from 'react'

export default function Header() {
    return (
            <header>
                <a href='/' className='logo'>Emmanuel Macharia</a> 
                <nav className="Navbar">
                    <ul>
                        <li><a href = '/portfolio'>Portfolio</a></li>
                        {/* <li><a href='/about'>About</a></li> */}
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </nav>
            </header>
    )
}
