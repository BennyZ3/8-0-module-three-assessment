import { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1280px-Studio_Ghibli_logo.svg.png" />
        {/* <Link to="/">
        </Link>
        <Link to="/movies"></Link>
        <Link to="/people"></Link>
        <Link to="/locations"></Link> */}
      </div>
    );
  }
}

export default Nav;
