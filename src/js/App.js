import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React, { useState, useEffect } from 'react';
import MoviesList from "./MoviesList";

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
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error)
            }
        )
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <MoviesList movies={movies}/>
        </div>
      </div>
    </div>
  );
}

export default App;
