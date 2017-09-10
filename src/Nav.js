import React from 'react'
import Logo from './logo.svg'
import {Link} from 'react-router-dom'
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav has-shadow" id="top">
        <div className="container">
          <div className="nav-left">
            <Link className="nav-item" to="/">
              <img className="Logo" src={Logo} alt="Description"/>
            </Link>
          </div>
          <div className="nav-right nav-menu">
            <a className="nav-item">
              <form>
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="text" placeholder="keyword"/>
                  </div>
                  <div className="control">
                    <button className="button is-primary">
                      <span className="icon">
                        <i className="fa fa-search"/>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </a>
            <Link className="nav-item is-tab" to="/login">
              Login
            </Link>
            <Link className="nav-item is-tab" to="/register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav