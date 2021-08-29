function Paginator(props) {
    const getPrevButtons = () => {
        let page = props.config.page;
        let pages = [];

        for(let i = 0; i < 2; i++) {
            if (page === 1) {
                break
            } else {
                page--;
                pages.push(page);
            }
        }

        return pages;
    }

    const getNextButtons = () => {
        let page = props.config.page;
        const lastPage = props.config.total_pages;
        let pages = [];

        for(let i = 0; i < 2; i++) {
            if (page === lastPage) {
                break
            } else {
                page++;
                pages.push(page);
            }
        }

        return pages;
    }

    return (
        <div className="paginator row">
            <div className="col-sm-4">
                <span>Showing {props.config.results.length} of {props.config.total_results}</span>
            </div>
            <div className="col-sm-8">
                <button onClick={() => {props.updateMovies(1)}}>&#171;</button>
                {getPrevButtons().map((pageNumber) =>
                    <button className="btn" onClick={() => {props.updateMovies(pageNumber)}}>{pageNumber}</button>
                )}
                <button className="btn" disabled>{props.config.page}</button>
                {getNextButtons().map((pageNumber) =>
                    <button className="btn" onClick={() => {props.updateMovies(pageNumber)}}>{pageNumber}</button>
                )}
                <button onClick={() => {props.updateMovies(props.config.total_pages)}}>&#187;</button>
            </div>
        </div>
    )
}

export default Paginator;
