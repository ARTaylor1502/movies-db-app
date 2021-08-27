import React from "react";
import MovieThumbnail from "./MovieThumbnail";

class MovieList extends React.Component {
    render() {
        return this.props.movies.map((movie) =>
            <MovieThumbnail movie={movie} key={movie.id}/>
        )
    }
}

export default MovieList;
