import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css';

class Profile extends Component {
    render() {
        return(
            <div className='cardContainer'>
                <NavBar />
                <div className='container'>
                    <div className='card'>
                        <div className='imgBox'>
                            <a href='https://courtkings.herokuapp.com/'><img className='courtking' src='../images/courtking.png' alt='courtking'/></a> 
                        </div>
                        <div className='details'>
                            <h2>Court Kings</h2>
                            <h4>My Role: Front-End Developer</h4>
                            <p>
                                Court Kings is an alternate version of "Fantasy Football". 
                                Where you can create your very own dream team of basketball players! <br />
                                <a href='https://github.com/41Holmes41'>Cole's GitHub</a><br />
                                <a href='https://github.com/samiduara'>Sam's GitHub</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='card'>
                        <div className='imgBox'>
                            <a href='https://pokibattle.herokuapp.com/'><img className='pokemon' src='../images/pokisearch.png' alt='pokisearch'/></a> 
                        </div>
                        <div className='details'>
                            <h2>Pokemon Search</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, a
                                dipisicing elit. Nihil aut itaque dolorem
                                 dicta velit alias adipisci molestias conseq
                                 uuntur soluta? Eum, officia explicabo nihil ill
                                 um nulla vitae placeat mollitia. Asperiores, labore.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='card'>
                        <div className='imgBox'>
                            <a href='theDeployedLinkGoesHere'><img className='pokemon' src='../images/chatapp.png' alt='chatapp'/></a> 
                        </div>
                        <div className='details'>
                            <h2>Chat App</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, a
                                dipisicing elit. Nihil aut itaque dolorem
                                 dicta velit alias adipisci molestias conseq
                                 uuntur soluta? Eum, officia explicabo nihil ill
                                 um nulla vitae placeat mollitia. Asperiores, labore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;