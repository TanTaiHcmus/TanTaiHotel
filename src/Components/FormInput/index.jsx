import React, { PureComponent } from "react";
import "./index.scss";

class FormInput extends PureComponent {
  render() {
    const {
      className,
      isInvalid,
      isRequired,
      children,
      tooltipText,
    } = this.props;

    return (
      <div
        className={`form ${className ? className : ""} ${
          isInvalid ? "invalid" : ""
        }`}
      >
        <div className="form-content">
          {isRequired && <span className="required-dot">*</span>}
          {children}
        </div>

        {isInvalid && (
          <div className="form-icon-warning">
            <span className="form-tooltip">{tooltipText}</span>
          </div>
        )}
      </div>
    );
  }
}

export default FormInput;
