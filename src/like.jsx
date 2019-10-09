import React, { Component } from "react";

class Like extends Component {
  render() {
    // let classes = "fa-fa-heart-o";
    // if (!this.props.like) classes += "-o";
    return <i className="fa-fa-heart" aria-hidden="true"></i>;
  }
}

export default Like;
