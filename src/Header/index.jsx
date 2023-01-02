import React, { PureComponent } from "react";
import Logo from "../Images/logo.png";
import { isEmpty } from "../utils/common";
import "./index.scss";
import { connect } from "react-redux";
import { openLoginPopup } from "../Popup/action";
import { withRouter } from "react-router-dom";
import { appPages } from "../constants";

class Header extends PureComponent {
  render() {
    const { username, openLoginPopup } = this.props;

    return (
      <div className="app-header">
        <img src={Logo} alt="logo" className="app-logo"></img>
        <div className="app-name">Tan Tai Hotel</div>
        <div
          className="btn-login"
          onClick={
            isEmpty(username)
              ? openLoginPopup
              : () => {
                  this.props.history.push(appPages.UserInfo.link);
                }
          }
        >
          {isEmpty(username) ? "Sign In" : username}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = {
  openLoginPopup: openLoginPopup,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
