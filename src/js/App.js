import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React, { useState, useEffect } from 'react';
import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar"

function App() {
  const [movies, setMovies] = useState([]);
  const apiUrl = 'https://api.themoviedb.org';

    useEffect(() => {
        fetch(`${apiUrl}/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`, {mode: 'cors'})
        .then(res => res.json())
        .then(
            (result) => {
                setMovies(result.results);
            },
            (error) => {
                console.log(error)
            }
        )
    }, []);

    const searchMovies = (searchTerm) => {
        fetch(`${apiUrl}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`, {mode: 'cors'})
        .then(res => res.json())
        .then(
            (result) => {
                setMovies(result.results);
            },
            (error) => {
                console.log(error)
            }
        );
    };

  return (
    <div className="App">
      <div className="container">
        <div className="mt-3 mb-3">
          <SearchBar searchMovies={searchMovies}/>
        </div>
        <div className="row">
          <MoviesList movies={movies}/>
        </div>
      </div>
    </div>
  );
}

export default App;
