function Header(){
  return(
    <header class="header text-center py-1 bg-light overflow-hidden">
      <div className="container-xxl">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="text-decoration-none d-flex align-items-center navbar-brand" href="/index.html">
            <h1 className="h3 mb-0 text-secondary">Online<span className="nav__title">Books</span></h1>
          </a>
          <div className="header__btns">
            <button className="btn d-md-none p-0" type="button" data-bs-toggle="collapse" href="#collapseExample">
            </button>
            <button className="navbar-toggler btn-sm border-0 p-0 ms-1" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse d-md-none" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://my-projects-abdulloh.netlify.app">Portfolio</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://github.com/Rashidov01" target="_blank">My Github</a>
              </li>

            </ul>
          </div>
        </nav>

      </div>
    </header>
  );
}

export default Header;