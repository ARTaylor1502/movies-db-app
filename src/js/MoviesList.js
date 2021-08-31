import MovieThumbnail from "./MovieThumbnail";

function MoviesList(props) {
    return (
        props.movies.map((movie) =>
            <MovieThumbnail movie={movie} key={movie.id} setSelectedMovieId={props.setSelectedMovieId}/>
        )
    )
}

export default MoviesList;
