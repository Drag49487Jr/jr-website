import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css';

class Profile extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <a href='https://courtkings.herokuapp.com/'><img className='courtking' src='../images/courtking.png' alt='courtking'/></a> 
            </div>
        )
    }
}

export default Profile;