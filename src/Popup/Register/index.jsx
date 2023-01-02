import React, { Component } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { openLoginPopup, registerNewAccount } from "../action";
import { isEmpty, isValidEmail, isValidPhone } from "../../utils/common";
import { Input } from "../../Components/Input";
import FormInput from "../../Components/FormInput";

class RegisterPopup extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    email: "",
    phone: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleRegister = () => {
    const {
      fullName,
      email,
      phone,
      username,
      password,
      confirmPassword,
    } = this.state;

    if (
      !isEmpty(fullName) &&
      isValidEmail(email) &&
      isValidPhone(phone) &&
      !isEmpty(username) &&
      !isEmpty(password) &&
      password === confirmPassword
    )
      this.props.registerNewAccountConnect({
        account: username,
        email: email,
        password: password,
        display_name: fullName,
      });
  };

  render() {
    const {
      username,
      password,
      confirmPassword,
      fullName,
      email,
      phone,
    } = this.state;

    return (
      <div className="register-popup-container">
        <div className="register-popup-title">Welcome</div>
        <FormInput
          className="form-register"
          isRequired
          isInvalid={isEmpty(fullName)}
          tooltipText="Full name is empty"
        >
          <Input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={this.handleInputChange}
            className="register-form"
            name="fullName"
            isRequired
            isInvalid={isEmpty(fullName)}
          />
        </FormInput>

        <FormInput
          className="form-register"
          isRequired
          isInvalid={!isValidEmail(email)}
          tooltipText="Email is invalid"
        >
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleInputChange}
            className="register-form"
            name="email"
          />
        </FormInput>

        <FormInput
          className="form-register"
          isRequired
          isInvalid={!isValidPhone(phone)}
          tooltipText="Phone number is invalid"
        >
          <Input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={this.handleInputChange}
            className="register-form"
            name="phone"
          />
        </FormInput>

        <FormInput
          className="form-register"
          isRequired
          isInvalid={isEmpty(username)}
          tooltipText="Username is empty"
        >
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleInputChange}
            className="register-form"
            name="username"
          />
        </FormInput>

        <FormInput
          className="form-register"
          isRequired
          isInvalid={isEmpty(password)}
          tooltipText="Password is empty"
        >
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
            className="register-form"
            name="password"
          />
        </FormInput>

        <FormInput
          className="form-register"
          isRequired
          isInvalid={isEmpty(confirmPassword) || confirmPassword !== password}
          tooltipText="Confirm password is wrong"
        >
          <Input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={this.handleInputChange}
            className="register-form"
            name="confirmPassword"
          />
        </FormInput>

        <div className="btn-register" onClick={this.handleRegister}>
          Register
        </div>

        <div
          className="btn-back"
          onClick={() => {
            this.props.backToLoginPopup();
          }}
        >
          Back to login
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  backToLoginPopup: openLoginPopup,
  registerNewAccountConnect: registerNewAccount,
};

export default connect(null, mapDispatchToProps)(RegisterPopup);
