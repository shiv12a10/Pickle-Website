import React from 'react'
import './Footer.css'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <hr />
            <div className='footer'>
                <div className="left-footer">
                    <img src={Logo} alt="" className="logo" />
                    <span>Savoury Pickles</span>
                </div>
                <div className="me">
                    <span>Made with ❤️ by Shiv Pratap Singh</span>
                    <span><a href='https://github.com/shiv12a10'>(Github)</a></span></div>

                <div className="details">
                    <ul className='details-list'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Purchase</li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
