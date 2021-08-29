import {useState} from "react";

function Filters(props) {
    const [selectedGenre, setSelectedGenre] = useState('');

    return (
        <>
            <label htmlFor="genres">Genre</label>
            <select id="genres" onChange={(e) => {
                setSelectedGenre(e.currentTarget.value);
                props.filterMovies(`&with_genres=${selectedGenre}`);
            }}>
                {props.genres.map((genre) =>
                    <option value={genre.id}>{genre.name}</option>
                )}
            </select>
        </>
    )
}

export default Filters;
