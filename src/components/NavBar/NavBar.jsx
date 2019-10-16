import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <>
            <div>NavBar</div>
            <Link to='/about'>About Me</Link>
            </>
        )
    }
}

export default NavBar;