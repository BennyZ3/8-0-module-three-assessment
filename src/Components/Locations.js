import { Component } from "react";
import "./Locations.css";
class Locations extends Component {
  constructor() {
    super();
    this.state = {
      showLocations: false,
      locations: [],
      display: [],
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((result) => result.json())
      .then((json) => {
        json.forEach((location) => {
          this.setState({
            locations: [
              ...this.state.locations,
              <li>
                <p>Name: {location.name}</p>
                <p>Climate: {location.climate}</p>
                <p>Terrain: {location.terrain}</p>
              </li>,
            ],
          });
        });
        console.log(this.state.people);
      })
      .catch((error) => console.log(error));
  }
  buttonClick = () => {
    this.setState({ showLocations: !this.state.showLocations });
  };

  render() {
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.buttonClick}>
          {this.state.showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {this.state.showLocations ? <ul>{this.state.locations}</ul> : ""}
      </div>
    );
  }
}

export default Locations;
