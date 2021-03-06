import React from 'react';
import {Route, Switch } from 'react-router-dom';
import FrontPage from '../FrontPage/FrontPage';
import Profile from '../../components//Profile/Profile';
import Projects from '../../components/Projects/Projects';
import ContactMe from '../../components/ContactMe/ContactMe';
import './App.css';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' render={() =>
          <FrontPage
          
          />
        }/>
          <Route path='/profile' render={() => 
          <Profile 
          
          />
        }/>
          <Route path='/projects' render={() => 
          <Projects 

          />  
        }/>
          <Route path='/contactme' render={() =>
          <ContactMe 

          />
        }/>
        </Switch>
    </div>
  );
}

export default App;
