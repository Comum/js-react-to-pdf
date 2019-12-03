import React from "react";

import "./Title.css";

function Title(props) {
  const { title, type } = props;
  const classes = `title title--${type}`;

  return <div className={classes}>{title}</div>;
}

export default Title;
