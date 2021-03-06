import { Link, useLocation, useSearchParams } from "react-router-dom";
import "./Header.css";

function Header() {
  const { pathname } = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  return (

    <nav className=" navbar_container">
      <div className="navbar_container-logo">
        <a href="/">MayoRecipes</a>
      </div>
      <div className="navbar_container-menu">
        <ul>
          <li>
            <a href="/" >Home</a>
          </li>

          <li>
            <Link to="/about" className="nav-link active" aria-current="page">
              About
            </Link>
          </li>

          <li>
            <Link to="/recipe" className="nav-link active" aria-current="page">
              Recipes
            </Link>
          </li>

          <li>
            <Link to="/contact" className="nav-link active" aria-current="page">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      {pathname === "/recipe" && <div className=" navabar_container-search">
        <input defaultValue={searchParams.get("q")} type="search" id="mySearch" onChange={(e) => setSearchParams(`?q=${e.target.value}`)} placeholder="Search for new recipe" title="Type in a category" />
      </div>}
    </nav>

  );
}

export default Header;