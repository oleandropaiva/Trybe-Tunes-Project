import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { music } = this.props;
    return (
      <div>
        <p>{ music.trackName }</p>
        <audio
          data-testid="audio-component"
          src={ music.previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>áudio</code>
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.arrayOf/* (PropTypes.object) */,
}.isRequired;
export default MusicCard;
