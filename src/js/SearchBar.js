import {useState} from "react";

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="input-group">
            <div className="form-outline">
                <label className="form-label d-none" htmlFor="search">Search</label>
                <input type="search" id="search" className="form-control" onChange={event => setSearchTerm(event.target.value)}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => {props.searchMovies(searchTerm)}}>
                <i className="fas fa-search"/>
            </button>
        </div>
    )
}

export default SearchBar;
