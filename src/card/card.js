function Card ({title, author, year, pages, language, link}){
  return(
    <div className="books__item col-sm-6 col-md-4 col-lg-3 mb-4">
       <div className="book card h-100 pt-3">
        <div className="img-holder px-2 px-sm-0 mx-auto">
          <img className="book__img" src="https://picsum.photos/400/400" width="150" height="200" />
          </div>
          <div className="card-body card__inner d-flex flex-column"> 
            <h3 className="book__title h5 card-title mb-1 fw-bold text-truncate"> {title} </h3>

            <span className="card-text book__author text-secondary mb-3"> {author} </span>

            <div className="d-flex align-items-center justify-content-between mb-4">

              <div className="d-flex align-items-center">
                {/* <img src="/icons/year.svg" className="mb-0" width="15" height="15"></img> */}
                <span className="book__year card-text text-secondary ms-1"> {year} </span>
              </div>

              <div className="d-flex align-items-center">
                {/* <img src="/icons/pages.svg" className="mb-0" width="15" height="15"></img> */}
                <span className="book__pages card-text text-secondary ms-1"> {pages} </span>
              </div>

              <div className="d-flex align-items-center">
                {/* <img src="/icons/language.svg" className="mb-0" width="15" height="15"></img> */}
                <span className="book__language card-text text-secondary ms-1 text-truncate"> {language} </span>
              </div>
            </div>

            <div className="d-flex mt-auto align-items-center justify-content-between">
              <a href={link} target="_blank" className="wikipedia-link">Wikipedia</a>
              <button type="button" className="btn p-0 border-0 js-bookmark-button">
              </button>
            </div>
          </div>
        </div>
      </div>
      );
}

export default Card;