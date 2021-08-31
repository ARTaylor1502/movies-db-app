import React, { useState, useEffect } from 'react';

function MovieProfilePage(props) {
    const [movie, setMovie] = useState(false);
    const [images, setImages] = useState([]);

    const fetchMovie = () => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${props.movieId}?api_key=${process.env.REACT_APP_API_KEY}`, {mode: 'cors'})
        .then(res => res.json())
        .then(
            (result) => {
                setMovie(result);
            },
            (error) => {
                console.log(error)
            }
        )
    }

    const fetchImages = () => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${props.movieId}/images?api_key=${process.env.REACT_APP_API_KEY}`, {mode: 'cors'})
            .then(res => res.json())
            .then(
                (result) => {
                    setImages(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    useEffect(() => {
        fetchMovie();
        fetchImages();
    }, []);

    return (
        <>
            {movie &&
                <div>
                    <button onClick={() => props.setSelectedMovieId(false)}>Back</button>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres: {movie.genres.map(function(genre){
                        return genre.name;
                    }).join(', ')}</h3>
                    <h3>Languages: {movie.spoken_languages.map(function(language){
                        return language.english_name;
                    }).join(', ')}</h3>
                    <h3>Average Rating: {movie.vote_average}</h3>
                </div>
            }
        </>
    );
}

export default MovieProfilePage;
