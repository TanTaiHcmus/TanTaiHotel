import React, { PureComponent } from "react";
import "./index.scss";
import { connect } from "react-redux";
import LoginPopup from "./Login";
import RegisterPopup from "./Register";
import { EnumPopupStatus } from "../constants";
import { closePopup } from "./action";

class Popup extends PureComponent {
  render() {
    const { status } = this.props;

    return (
      status !== EnumPopupStatus.NONE && (
        <div className="popup-container">
          <div
            className="outside-screen"
            onClick={() => {
              this.props.closePopup();
            }}
          />
          {status === EnumPopupStatus.LOGIN && <LoginPopup />}
          {status === EnumPopupStatus.REGISTER && <RegisterPopup />}
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.popup.status,
  };
};

const mapDispatchToProps = {
  closePopup: closePopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
