import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className='header-container'>
            <div className='navbar'>
                <nav>
                    <ul>
                        <li>
                            <Link id='home' to='/'>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link id='browse' to='/browse'>
                                Browse
                            </Link>
                        </li>

                        <li>
                            <Link id='search' to='/search'>
                                <form id='form'>
                                    <input 
                                        type='text'
                                        placeholder='Search'
                                        id='search'
                                        className='search'
                                        />
                                </form>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;