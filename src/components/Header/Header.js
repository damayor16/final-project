import { Link } from "react-router-dom";
import "./Header.css";

function Header() {  
  return (
    //<nav class="navbar navbar-light bg-primary">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img src="./lo" alt="" width="30" height="24"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Recipe
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/meat">
                    Meat
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/vegan">
                    Vegan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/desert">
                    Desert
                  </Link>
                </li>                
                <li>
                  <Link className="dropdown-item" to="/pastry">
                    Pastry
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">Search</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    //</nav>
  );
}

export default Header;