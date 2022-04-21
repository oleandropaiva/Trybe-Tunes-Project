import React, { Component } from 'react';

class Loading extends Component {
  render() {
    const { loading } = this.props;
    if (loading) {
      <span>Carregando...</span>;
    }
    return '';
  }
}

export default Loading;
