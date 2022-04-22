import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      userLogin: '',
    };
  }

  componentDidMount() {
    this.userLogged();
  }

  userLogged = async () => {
    this.setState({ loading: true });
    const userLogin = await getUser();
    this.setState({
      loading: false,
      userLogin: userLogin.name,
    });
  }

  render() {
    const { userLogin, loading } = this.state;
    return (
      <header data-testid="header-component">
        <h1 data-testid="header-user-name">{ userLogin }</h1>
        {loading && <Loading />}
      </header>
    );
  }
}

export default Header;
