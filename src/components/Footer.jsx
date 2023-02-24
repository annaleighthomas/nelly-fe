import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt=""/>
            <span>
                Made with <b>React.js</b><br/>
                Logo By <b>Absauce Design</b>
            </span>
        </footer>
    )
}

export default Footer