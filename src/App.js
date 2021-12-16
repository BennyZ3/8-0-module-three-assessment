import { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
        <Nav />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/locations">
              <Locations />
            </Route> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
