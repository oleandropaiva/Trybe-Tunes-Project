import React, { Component } from 'react';

class Login extends Component {
  render() {
    const { email, password, name, onChange } = this.props;
    return (
      <div data-testid="page-login">
        <h1>TrybeTunes</h1>
        <form>
          <input
            name="name"
            onChange={ onChange }
            placeholder="Name"
            data-testid="login-name-input"
            type="text"
            value={ name }
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            value={ email }
          />

          <input
            name="password  "
            placeholder="Password"
            type="password"
            value={ password }
          />

          <button
            type="button"
            data-testid="login-submit-button"

          >
            Entrar
          </button>

        </form>

      </div>
    );
  }
}

export default Login;
