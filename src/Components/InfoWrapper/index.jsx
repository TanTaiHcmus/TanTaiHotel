import React from "react";
import "./index.scss"

const InfoWrapper = ({ title, className, children }) => {
  return (
    <div className={`info-wrapper ${className ? className : ""}`}>
      <span className="info-wrapper-title">{title}</span>
      {children}
    </div>
  );
};

export default InfoWrapper;
