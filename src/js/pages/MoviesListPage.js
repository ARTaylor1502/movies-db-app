import React, { useState, useEffect } from 'react';
import MoviesList from "../MoviesList";
import SearchBar from "../SearchBar"
import Filters from "../Filters"
import Paginator from "../Paginator"

function MoviesListPage(props) {
    const [genres, setGenres] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [paginatorConfig, setPaginatorConfig] = useState({page: 1});

    const fetchPopularMovies = () => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${paginatorConfig.page}`, {mode: 'cors'})
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
        fetch(`${process.env.REACT_APP_API_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`, {mode: 'cors'})
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
        fetch(`${process.env.REACT_APP_API_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&page=${paginatorConfig.page}`, {mode: 'cors'})
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
        fetch(`${process.env.REACT_APP_API_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}${filters}`, {mode: 'cors'})
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
      <>
          <div className="col-sm-4">

          </div>
          <div className="col-sm-8">
              <div className="mt-3 mb-3">
                  <SearchBar setSearchTerm={setSearchTerm} updateMovies={updateMovies}/>
              </div>
              <div className="row">
                  {paginatorConfig.results &&
                  <>
                      <Paginator config={paginatorConfig} updateResults={updateMovies}/>
                      <MoviesList movies={paginatorConfig.results} setSelectedMovieId={props.setSelectedMovieId}/>
                      <Paginator config={paginatorConfig} updateResults={updateMovies}/>
                  </>
                  }
              </div>
          </div>
      </>
    );
}

export default MoviesListPage;
