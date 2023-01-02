import React from "react";
import "./index.scss";
import Star from "../../../../Components/Star";
import Carousel from "../../../../Components/Carousel";

const RoomDescription = ({
  room: { images = [], star, description, name },
}) => {
  return (
    <div id="room-description">
      <div className="room-review">
        <span className="title">Room review</span>
        <Star amount={star} />
      </div>
      <Carousel listImages={images} height="300px" />
      <div className="description">
        <div className="title">{`What is ${name}`}</div>
        <div className="des">{description}</div>
      </div>
    </div>
  );
};

export default RoomDescription;
