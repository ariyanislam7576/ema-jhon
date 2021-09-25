import React from 'react';
import './Header.css'
import logo from  '../../images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <div>
            <img src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href="./shop">Shop</a></li>
                        <li><a href="./order review">Order review</a></li>
                        <li><a href="./manage inventory">Manage inventory</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        
    );
};

export default Header;