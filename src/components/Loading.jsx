import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { loading } = this.props;
    if (loading) {
      <span>Carregando...</span>;
    }
    return '';
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
