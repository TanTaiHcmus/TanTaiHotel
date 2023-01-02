import React from "react";
import "./index.scss";
import starIcon from "../../Images/star-solid.svg";

const Star = ({ amount }) => {
  const star = [];
  for (let i = 0; i < amount; i++) {
    star.push(<img src={starIcon} className="star" key={i} />);
  }

  return <div className="star-container">{star}</div>;
};

export default Star;
