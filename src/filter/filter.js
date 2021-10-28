function Filter(){
    return(
      <form className="mb-4 js-book-search-form py-5" action="https://echo.htmlacademy.ru" method="GET">
        <div className="container-xl">

          <div className="row">
            <div className="input-group">
              <input type="text" className="js-book-search-input form-control me-2 col-md-11" placeholder="Search"
                aria-label="book title" aria-describedby="search__btn" />
              <button className="search__btn btn btn-outline-secondary col-md-1 btn-sm" type="submit"
                id="search__btn">Find</button>
            </div>
          </div>

          <div className="row mt-3 ">
            <div className="col-md-3 mb-2 mb-md-0">
              <select className="form-control select" name="genre" aria-label="genre">
                <option value="sort-by">Sort by...</option>
                <option value="year">Year</option>
                <option value="alphabet">Alphabet</option>
                <option value="pages">Pages</option>
              </select>
            </div>
            <div className="col-md-3 mb-2 mb-md-0">
              <input className="form-control js-book-year-input" type="number" name="year" aria-label="year"
                placeholder="Year" />
            </div>
            <div className="col-md-3 mb-2 mb-md-0">
              <input className="form-control js-book-author-input" type="text" name="author" aria-label="author"
                placeholder="Author" />
            </div>
            <div className="col-md-3 mb-2 mb-md-0">
              <select className="form-control js-book-language-select" name="language" aria-label="language">
                <option value="all">All</option>
              </select>
            </div>

          </div>

        </div>
      </form>
    )
}

export default Filter;