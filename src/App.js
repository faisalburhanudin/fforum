import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import React from 'react'
import Nav from './Nav'
import Register from './Register'
import Login from './Login'
import ListPost from './ListPost'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <div className="container">
            <Route exact path="/" component={ListPost}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
