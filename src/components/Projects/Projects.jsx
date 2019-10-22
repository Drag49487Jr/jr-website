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
                            <p>
                                Lorem ipsum dolor sit amet consecte
                                tur adipisicing elit. Corporis est, s
                                int quidem vel doloribus fuga unde cumq
                                ue atque, id nesciunt modi quisquam perf
                                erendis? Odit debitis ratione, quidem o
                                bcaecati natus ea.
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
                            <a href=''><img className='pokemon' src='../images/chatapp.png' alt='chatapp'/></a> 
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