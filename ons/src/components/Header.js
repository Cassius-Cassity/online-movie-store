import React from "react";
import { Link } from 'react-router-dom'

function Header(){

    return(
        <div className="header-container">
            <div className="navbar">
                <nav>
                    <Link id="home" to='/'>
                        Home
                    </Link>
                    <Link id="login" to='/login'>
                        Login
                    </Link>
                    <Link id="signup" to="/signup">
                        Sign-Up
                    </Link>
                    <Link id="cart" to="/cart">
                        Cart
                    </Link>
                </nav>
            </div>
        </div>
    )
};

export default Header;