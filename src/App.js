import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./cssmodules/home.css";
import "./cssmodules/tutorialslist.css"
import "./cssmodules/singlepost.css";
import Home from "./components/Home";
import Tutorials from "./components/Tutorials";
import Navigation from './components/Navigation';
import TutorialsList from './components/TutorialsList';
import SinglePost from './components/SinglePost';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/tutorialslist" component={TutorialsList} />
        <Route path="/:id" component={SinglePost} />
      </Switch>
    </BrowserRouter>
  );
};


export default App;
