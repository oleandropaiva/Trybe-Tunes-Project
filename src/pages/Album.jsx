import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      musics: [],
    };
  }

  componentDidMount() {
    this.goToMusics();
  }

  async goToMusics() {
    const { match: { params: { id } } } = this.props;

    const musicAlbum = await getMusics(id);
    this.setState({
      musics: [...musicAlbum],
    });
  }

  render() {
    const { musics } = this.state;
    return (
      <div data-testid="page-album">
        <p>Álbum</p>
        <Header />
        { musics.length > 0 && (
          <>
            <p data-testid="artist-name">
              Banda:
              {musics[0].artistName}
            </p>
            <p data-testid="album-name">
              Álbum:
              {musics[0].collectionName}
            </p>
          </>
        )}
        <h3>Músicas:</h3>
        <ul>
          {musics.map((element, index) => index !== 0
          && (
            <div key={ index }>
              <MusicCard music={ element } />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string }).isRequired }).isRequired,
};

export default Album;
