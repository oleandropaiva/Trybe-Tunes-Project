import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      buttonDisabled: true,
      loading: false,
      banda: '',
      nomeBanda: '',
      albunsList: [],
    };
  }

    onClick = async () => {
      this.setState({
        loading: true,
      });
      const { banda } = this.state;
      const resultArtist = await searchAlbumsAPI(banda);
      this.setState({
        nomeBanda: banda,
        albunsList: [...resultArtist],
        buttonDisabled: true,
        loading: false,
        banda: '',
      });
    }

  onChange = ({ target }) => {
    const { name, value } = target;
    const min = 2;
    if (value.length >= min) {
      this.setState({ buttonDisabled: false });
    }
    this.setState({ [name]: value });
  }

  render() {
    const {
      banda,
      loading,
      buttonDisabled,
      albunsList,
      nomeBanda,
    } = this.state;

    return (
      <div data-testid="page-search">
        <p>Search</p>
        <Header />

        <form>
          <input
            name="banda"
            onChange={ this.onChange }
            placeholder="Banda"
            data-testid="search-artist-input"
            type="text"
            value={ banda }
          />

          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ buttonDisabled }
            onClick={ this.onClick }
            value="Pesquisar"
          >
            Pesquisar
          </button>
          {loading && <Loading />}

          {((albunsList.length !== 0)
            ? (
              <div>
                <div>
                  Resultado de álbuns de:
                  {' '}
                  { nomeBanda }
                </div>

                {albunsList.map((element, index) => (
                  <div key={ index }>

                    {element.collectionName}
                    <Link
                      data-testid={ `link-to-album-${element.collectionId}` }
                      to={ `/album/${element.collectionId}` }
                    >
                      Álbum
                    </Link>

                  </div>))}

              </div>)
            : <span>Nenhum álbum foi encontrado</span>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
