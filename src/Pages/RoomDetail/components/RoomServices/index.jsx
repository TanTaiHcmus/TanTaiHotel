import React from "react";
import "./index.scss";

const RoomServices = ({ services = [] }) => {
  return (
    <div id="room-services">
      <div className="title">Room services</div>
      {services.map((item, index) => (
        <div className="service" key={index}>
          <img src={item.url} />
          <div className="service-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default RoomServices;
