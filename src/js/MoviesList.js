import MovieThumbnail from "./MovieThumbnail";

function MovieList(props) {
    return (
        props.movies.map((movie) =>
            <MovieThumbnail movie={movie} key={movie.id}/>
        )
    )
}

export default MovieList;
