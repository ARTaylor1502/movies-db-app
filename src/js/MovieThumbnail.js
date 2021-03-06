function MovieThumbnail(props) {
    return (
        <div className="movie-thumbnail col-sm-4" onClick={() => props.setSelectedMovieId(props.movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`} alt=""/>
            <h3>{props.movie.title}</h3>
        </div>
    );
}

export default MovieThumbnail;
