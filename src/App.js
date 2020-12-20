import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Projects from './pages/Projects'


function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        </Switch>
     
    </div>
  );
}

export default App;
