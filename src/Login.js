import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="column is-4 is-offset-4">
        <h1 className="title">
          Login
        </h1>
        <div className="box">
          <form>
            <label className="label">Username</label>
            <p className="control">
              <input className="input" placeholder="username" name="username"/>
            </p>
            <label className="label">Password</label>
            <p className="control">
              <input className="input" type="password" placeholder="●●●●●●●" name="password"/>
            </p>
            <hr/>
            <p className="control">
              <button className="button is-primary">Login</button>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login