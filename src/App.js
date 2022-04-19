import React from 'react';
import Content from './components/Content';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    console.log(event.target);
  }

  render() {
    const { email, password, name } = this.state;
    return (
      <Content
        onChange={ this.onChange }
        email={ email }
        password={ password }
        name={ name }
      />
    );
  }
}

export default App;
