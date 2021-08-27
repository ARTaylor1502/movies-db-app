import React from "react";

class MovieThumbnail extends React.Component {
    render() {
        return <div className="movie-thumbnail">
            <img src={`https://image.tmdb.org/t/p/w200/${this.props.movie.poster_path}`} alt=""/>
            <h3>{this.props.movie.title}</h3>

        </div>;
    }
}

export default MovieThumbnail;
