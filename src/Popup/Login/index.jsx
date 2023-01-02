import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { closePopup, loginToServer, openRegisterPopup } from "../action";
import { Input } from "../../Components/Input";
import { isEmpty } from "../../utils/common";
import FormInput from "../../Components/FormInput";

class LoginPopup extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = () => {
    const { username, password } = this.state;

    if (!isEmpty(username) && !isEmpty(password)) {
      this.props.loginToServerConnect({ ...this.state });
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-popup-container">
        <div className="login-popup-title">Welcome</div>
        <FormInput
          className="form-login"
          isInvalid={isEmpty(username)}
          isRequired
          tooltipText="Username is empty"
        >
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleInputChange}
            className="login-form"
            name="username"
          />
        </FormInput>

        <FormInput
          className="form-login"
          isInvalid={isEmpty(password)}
          isRequired
          tooltipText="Password is empty"
        >
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
            className="login-form"
            name="password"
          />
        </FormInput>

        <div className="create-account-container">
          <span>Don't have an account?</span>
          <span
            className="btn-create-account"
            onClick={() => {
              this.props.openRegisterPopup();
            }}
          >
            Create
          </span>
        </div>
        <div className="btn-sign-in" onClick={this.handleLogin}>
          Sign In
        </div>
        <div
          className="btn-cancel"
          onClick={() => {
            this.props.closePopup();
          }}
        >
          Cancel
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  closePopup: closePopup,
  openRegisterPopup: openRegisterPopup,
  loginToServerConnect: loginToServer,
};

export default connect(null, mapDispatchToProps)(LoginPopup);
