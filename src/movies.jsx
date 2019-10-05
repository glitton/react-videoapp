import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    const movieItems = this.state.movies.map(movie => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
      </tr>
    ));

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{movieItems}</tbody>
      </table>
    );
  }
}

export default Movies;
