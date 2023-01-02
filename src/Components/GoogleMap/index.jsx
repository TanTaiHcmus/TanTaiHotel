import GoogleMapReact from "google-map-react";
import React from "react";
import { GOOGLE_MAP_API_KEY } from "../../constants";
import "./index.scss";
import LocationPin from "./LocationPin";

const GoogleMap = ({ className, location, zoomLevel, title }) => (
  <div className={`google-map ${className ? className : ""}`}>
    <div className="title">{title}</div>
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  </div>
);

export default GoogleMap;
