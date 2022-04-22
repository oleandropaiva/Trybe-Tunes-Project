import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      /* password: '', */
      buttonDisabled: true,
      loading: false,
      goSearch: null,
    };
  }

  /* componentDidMount() {
    this.setState({
      loading: true,
    });
  } */

  onChange = ({ target }) => {
    const { name, value } = target;
    const min = 3;
    if (value.length >= min) {
      this.setState({ buttonDisabled: false });
    }
    this.setState({ [name]: value });
  };

  onClick = async () => {
    this.setState({ loading: true });
    const { name } = this.state;
    await createUser({ name });
    this.setState({
      buttonDisabled: true,
      loading: false,
      goSearch: '/search',
    });
  };

  render() {
    const {
      /* email, */ /* password, */ name,
      buttonDisabled,
      loading,
      goSearch,
    } = this.state;

    if (goSearch) {
      return <Redirect to={ goSearch } />;
    }

    return (
      <div data-testid="page-login">
        <h1>TrybeTunes</h1>
        <form>
          <input
            name="name"
            onChange={ this.onChange }
            placeholder="Name"
            data-testid="login-name-input"
            type="text"
            value={ name }
          />

          {/* <input
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
          /> */}

          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ buttonDisabled }
            onClick={ this.onClick }
          >
            Entrar
          </button>
          {loading && <Loading />}
        </form>
      </div>
    );
  }
}

export default Login;
