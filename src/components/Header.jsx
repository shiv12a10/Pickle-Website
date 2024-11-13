import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "./Header.css"
import Logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <div className="left">
                    <img src={Logo} alt="" className="logo" />
                    <span>Savoury Pickles</span>
                </div>
                <div className="right">
                    <ul>
                        <li>PRODUCTS</li>
                        <li>SALES</li>
                        <li>ABOUT</li>
                        <li>ENG</li>
                    </ul>
                    <input type="text" className="search" placeholder="Search..." />
                    <AiOutlineShoppingCart className='cart' />
                    <button className='login'>LOGIN</button>
                </div>
            </nav>
        </div>
    )
}

export default Header
