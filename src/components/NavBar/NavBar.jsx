import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <div className='Navbar'>
            <img className='WolfLogo' src='../images/wolflogo.JPG' alt='wolf' />
            <Link className='link' to='/profile'>Profile</Link>
            <Link className='link' to='/projects'>Projects</Link>
            </div>
        )
    }
}

export default NavBar;