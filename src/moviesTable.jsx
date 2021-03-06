import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { columnName: "title", label: "Title" },
    { columnName: "genre.name", label: "Genre" },
    { columnName: "numberInStock", label: "Stock" },
    { columnName: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like like={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
