import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div className="column is-4 is-offset-4">
        <h1 className="title">
          Register an Account
        </h1>
        <div className="box">
          <form method="post" action="/register">
            <label className="label">Username</label>
            <p className="control">
              <input className="input" placeholder="username" name="username"/>
            </p>
            <label className="label">Email</label>
            <p className="control">
              <input className="input" placeholder="email" name="email"/>
            </p>
            <label className="label">Password</label>
            <p className="control">
              <input className="input" type="password" placeholder="●●●●●●●" name="password"/>
            </p>
            <hr/>
            <p className="control">
              <button className="button is-primary">Register</button>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Register