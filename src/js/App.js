import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React, { useState, useEffect } from 'react';
import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar"
import Filters from "./Filters"
import Paginator from "./Paginator"

function App() {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [paginatorConfig, setPaginatorConfig] = useState({page: 1});
  const apiUrl = 'https://api.themoviedb.org';

    const fetchPopularMovies = () => {
        fetch(`${apiUrl}/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${paginatorConfig.page}`, {mode: 'cors'})
            .then(res => res.json())
            .then(
                (result) => {
                    setPaginatorConfig(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    const fetchMovieGenres = () => {
        fetch(`${apiUrl}/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`, {mode: 'cors'})
            .then(res => res.json())
            .then(
                (result) => {
                    setGenres(result.genres);
                },
                (error) => {
                    console.log(error)
                }
            );
    }

    const searchMovies = () => {
        fetch(`${apiUrl}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&page=${paginatorConfig.page}`, {mode: 'cors'})
            .then(res => res.json())
            .then(
                (result) => {
                    setPaginatorConfig(result);
                },
                (error) => {
                    console.log(error)
                }
            );
    }

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    useEffect(() => {
        fetchMovieGenres();
    }, []);

    const updateMovies = (page=1) => {
        let paginator = paginatorConfig;
        paginator.page = page;
        setPaginatorConfig(paginator);

        if(searchTerm !== '') {
            searchMovies();
        } else {
            fetchPopularMovies();
        }
    };

    const filterMovies = (filters) => {
        fetch(`${apiUrl}/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}${filters}`, {mode: 'cors'})
        .then(res => res.json())
        .then(
            (result) => {
                setPaginatorConfig(result);
            },
            (error) => {
                console.log(error)
            }
        );
    };

  return (
    <div className="App">
      <div className="container">
          <div className="row">
              <div className="col-sm-4">
                  <Filters
                  genres={genres}
                  filterMovies={filterMovies}/>
              </div>
              <div className="col-sm-8">
                  <div className="mt-3 mb-3">
                      <SearchBar setSearchTerm={setSearchTerm} updateMovies={updateMovies}/>
                  </div>
                  <div className="row">
                      {paginatorConfig.results &&
                          <>
                          <Paginator config={paginatorConfig} updateMovies={updateMovies}/>
                          <MoviesList movies={paginatorConfig.results}/>
                          </>
                      }
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
