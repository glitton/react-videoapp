import React from "react";
import "font-awesome/css/font-awesome.css";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.like) classes += "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={props.onClick}
    ></i>
  );
};

export default Like;
