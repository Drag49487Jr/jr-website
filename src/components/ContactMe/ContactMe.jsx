import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';

class ContactMe extends Component {
    render(){
        return(
        <div>
            <NavBar />
            <form action='contactform.php' method='POST'>
                Name: <input type='text' name='name'/>
                Your E-mail: <input type='text' name='mail'/>
                Subject: <input type='text' name='subject'/>
                Message: <textarea name='message'></textarea>
                <button name='submit'>Send Mail</button>
            </form>
        </div>
        )
    }
}

export default ContactMe;