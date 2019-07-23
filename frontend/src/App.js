import React from 'react';
import './App.css';
import Home from './containers/Home/Home'
import {Route ,BrowserRouter, Switch} from 'react-router-dom'
import About from './containers/About/About'
import GroupPage from './containers/GroupPage/GroupPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route path="/group:id" component={GroupPage}/>
        <Route path="/" component={Home}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
