import React, { Component } from "react";
import Like from "./like";
import { getMovies } from "./services/fakeMovieService";

const movies = getMovies();

class Movies extends Component {
  state = {
    movies,
    like: true
  };

  handleDelete = movie => {
    const newMovies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: newMovies });
  };

  // toggleLike = movie => {
  //   const likedMovie = this.state.movies.filter(m => m._id === movie._id);
  //   console.log("clicked movie", likedMovie);
  //   this.setState({ like: !this.state.like });
  // };

  render() {
    const movieItems = this.state.movies.map(movie => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like like={true} />
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.handleDelete(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <React.Fragment>
        <p className="h4">
          There are {this.state.movies.length} movies in the database
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Like?</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{movieItems}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
