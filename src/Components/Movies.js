import { Component } from "react";
import "./Movies.css";
class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: {},
      display: "",
      data: "",
      options: [],
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((result) => result.json())
      .then((json) => {
        this.setState({ data: json });
        json.forEach((movie) => {
          let tempMovies = this.state.movies;
          tempMovies[movie.title] = movie;
          this.setState({
            options: [
              ...this.state.options,
              <option value={movie.title}>{movie.title}</option>,
            ],
            movies: tempMovies,
          });
        });
        console.log(this.state.options);
      })
      .catch((error) => console.log(error));
  }
  handleSelect = (e) => {
    if (e.target.value === "") {
      this.setState({ display: "" });
    } else {
      this.setState({
        display: (
          <div className="display">
            <h1>Title: {this.state.movies[e.target.value].title}</h1>
            <p>
              Release Date: {this.state.movies[e.target.value].release_date}
            </p>
            <p>Description: {this.state.movies[e.target.value].description}</p>
          </div>
        ),
      });
    }
  };
  render() {
    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select name="movieSelect" onChange={this.handleSelect}>
          <option value=""></option>
          {this.state.options}
        </select>
        {this.state.display}
      </div>
    );
  }
}

export default Movies;
