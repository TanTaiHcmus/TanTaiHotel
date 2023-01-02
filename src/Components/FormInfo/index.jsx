import React from "react";
import "./index.scss";

const FormInfo = ({ value, className }) => {
  return (
    <div className={`form-info ${className ? className : ""}`}>{value}</div>
  );
};

export default FormInfo;
