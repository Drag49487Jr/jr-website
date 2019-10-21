import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';

class Profile extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <a href='https://courtkings.herokuapp.com/'><img src='../images/courtking.png' alt='courtking'/></a> 
            </div>
        )
    }
}

export default Profile;