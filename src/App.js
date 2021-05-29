import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './components/MainPage';
import ModelS from './components/ModelS';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' exact component={MainPage}></Route>
        <Route path="/" exact component={MainPage}></Route>
        <Route path="/models" exact component={ModelS}></Route>
      </Switch>
    </div>
  );
}

export default App;
