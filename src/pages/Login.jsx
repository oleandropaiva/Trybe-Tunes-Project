import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      buttonDisabled: true,
      loading: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      });
    });
  }

  onChange=({ target }) => {
    const { name, value } = target;
    const min = 3;
    if (value.length >= min) {
      this.setState({ buttonDisabled: false });
    }
    this.setState({ [name]: value });
  }

  onClick=() => {
    const { name } = this.state;
    createUser({ name });
  }

  render() {
    const { email, password, name, buttonDisabled, loading } = this.state;

    return (
      <div data-testid="page-login">
        <h1>TrybeTunes</h1>
        { loading ? <Loading loading={ loading } /> : '' }
        <form>
          <input
            name="name"
            onChange={ this.onChange }
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
            name="password"
            onChange={ this.onChange }
            placeholder="Password"
            type="password"
            value={ password }
          />

          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ buttonDisabled }
            onClick={ this.onClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

/* Login.propTyps = {
  loading: PropTypes.bool.isRequired,
}; */

export default Login;
