import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <>
            <img className='WolfLogo' src='../images/wolflogo.JPG' alt='wolf' />
            <div>NavBar</div>
            <Link to='/about'>About Me</Link>
            </>
        )
    }
}

export default NavBar;