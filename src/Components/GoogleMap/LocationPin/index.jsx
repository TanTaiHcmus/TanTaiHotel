import React from "react";
import makerIcon from "../../../Images/map-marker-alt-solid.svg";
import "./index.scss";

const LocationPin = ({ text }) => (
  <div className="pin">
    <img src={makerIcon} alt="address" className="maker" />
    <div className="pin-text">{text}</div>
  </div>
);

export default LocationPin;
