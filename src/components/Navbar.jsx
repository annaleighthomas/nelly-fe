import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt=""/>
                </div>
                <div className='links'>
                    <Link className='link' to="/?cat=projects">
                        <h6>Projects</h6>
                    </Link>
                    <Link className='link' to="/?cat=resume">
                        <h6>Resume'</h6>
                    </Link>
                    <Link className='link' to="/cat=film">
                        <h6>Film</h6>
                    </Link>
                    <Link className='link' to="/?cat=contact">
                        <h6>Contact</h6>
                    </Link>
                    <span>Nelly</span>
                    <span>Logout</span>
                    <span className="write">
                        <Link className="link" to="/write">Post</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar