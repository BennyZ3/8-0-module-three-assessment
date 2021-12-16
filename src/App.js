import { Component } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import Nav from "./Components/Nav";
import People from "./Components/People";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <nav className="Nav">
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
        </nav>

        {/* <Nav /> */}
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/locations">
              <Locations />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
