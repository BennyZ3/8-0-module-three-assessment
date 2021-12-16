import { Component } from "react";
import "./People.css";
class People extends Component {
  constructor() {
    super();
    this.state = {
      people: {},
      display: "",
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((result) => result.json())
      .then((json) => {
        this.setState({ data: json });
        json.forEach((person) => {
          let tempPeople = this.state.people;
          tempPeople[person.name.toLowerCase()] = person;
          this.setState({
            people: tempPeople,
          });
        });
        console.log(this.state.people);
      })
      .catch((error) => console.log(error));
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.searchInput.value);
    let search = e.target.searchInput.value.toLowerCase();
    if (this.state.people[search]) {
      this.setState({
        display: (
          <div className="display">
            <p>Name: {this.state.people[search].name}</p>
            <p>Age: {this.state.people[search].age}</p>
            <p>Gender: {this.state.people[search].gender}</p>
          </div>
        ),
      });
    } else {
      this.setState({ display: <p>Not Found</p> });
    }
  };
  render() {
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form
          className="peopleSearch"
          placeholder="Find Your Person"
          onSubmit={this.handleSubmit}
        >
          <input type="text" name="searchInput" />
          <button type="submit">Submit</button>
        </form>
        {this.state.display}
      </div>
    );
  }
}

export default People;
