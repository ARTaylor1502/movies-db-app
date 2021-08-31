import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import React, { useState } from 'react';
import MoviesListPage from "./pages/MoviesListPage";
import MovieProfilePage from "./pages/MovieProfilePage";

function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(false);

  return (
    <div className="App">
      <div className="container">
          <div className="row">
              {selectedMovieId
                  ? <MovieProfilePage movieId={selectedMovieId} setSelectedMovieId={setSelectedMovieId} />
                  : <MoviesListPage setSelectedMovieId={setSelectedMovieId}/>
              }
          </div>
      </div>
    </div>
  );
}

export default App;
