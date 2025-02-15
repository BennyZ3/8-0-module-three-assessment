import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1280px-Studio_Ghibli_logo.svg.png"
              alt="ghibli logo"
            />
          </div>
        </NavLink>
        <Link to="/movies">
          <div id="navMovies">Movies</div>
        </Link>
        <Link to="/people">
          <div id="navPeople">People</div>
        </Link>
        <Link to="/locations">
          <div id="navLocations">Locations</div>
        </Link>
      </div>
    );
  }
}

export default Nav;
