import React, { Component } from "react";
import AppContainer from "./components/AppContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      api_key: `1f7a6bb01320d411e88ac0f16010b4df`
    };

    this.getMovieApi = this.getMovieApi.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  getMovieApi(e) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${
      this.state.api_key
    }&query=${this.state.typedMovie}`;

    const arrMovies = [];

    fetch(url)
      .then(response => response.json())
      .then(response =>
        response.results.forEach(movie => {
          arrMovies.push(movie);
        })
      )
      .then(
        setTimeout(() => {
          this.setState({ movies: arrMovies });
        }, 1000)
      )
      .catch(err => console.error(err));

    e.preventDefault();
  }

  getInputValue(e) {
    this.setState({ typedMovie: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <AppContainer
          {...this.state}
          getInputValue={this.getInputValue}
          getMovieApi={this.getMovieApi}
        />
      </div>
    );
  }
}

export default App;
