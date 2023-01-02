import React from "react";
import "./index.scss";

export const Input = ({ className, ...rest }) => {
  return <input className={`input ${className ? className : ""}`} {...rest} />;
};

export const TextArea = ({ className, ...rest }) => {
  return (
    <textarea
      className={`input ${className ? className : ""}`}
      {...rest}
    ></textarea>
  );
};
