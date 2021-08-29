function SearchBar(props) {
    return (
        <div className="input-group">
            <div className="form-outline">
                <label className="form-label d-none" htmlFor="search">Search</label>
                <input type="search" id="search" className="form-control" onChange={event => props.setSearchTerm(event.target.value)}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => {props.updateMovies()}}>
                <i className="fas fa-search"/>
            </button>
        </div>
    )
}

export default SearchBar;
