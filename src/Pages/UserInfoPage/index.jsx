import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import FormInfo from "../../Components/FormInfo";
import InfoWrapper from "../../Components/InfoWrapper";
import avatarIcon from "../../Images/avatar.svg";
import "./index.scss";
import { connect } from "react-redux";
import userInfoBannerImage from "../../Images/banner-user-info.jpg";
import Banner from "../../Components/Banner";
import { appPages, USER_ID } from "../../constants";
import { withLogin } from "../../HOC/withLogin";
import { isEmpty } from "../../utils/common";
import { changeAvatar, logout } from "./action";

class UserInfoPage extends PureComponent {
  handleUploadAvatar = (event) => {
    const file = event.target.files[0];
    this.props.changeAvatarConnect(file);
  };

  handleLogout = () => {
    localStorage.clear(USER_ID);
    this.props.logoutConnect();
    this.props.history.push("/");
  };

  render() {
    const { fullName, email, phone, username, avatar } = this.props;

    return (
      <div className="user-info-page-container">
        <Banner
          title={appPages.UserInfo.name}
          bannerImage={userInfoBannerImage}
        />

        <div className="user-info">
          <div className="user-info-avatar">
            <img
              src={!isEmpty(avatar) ? avatar : avatarIcon}
              className="avatar"
              alt="avatar icon"
            />
            <div className="btn-change-avatar">
              <div>Change avatar</div>
              <input
                type="file"
                className="input-file"
                onChange={this.handleUploadAvatar}
              />
            </div>
            <div className="btn-logout" onClick={this.handleLogout}>
              Đăng xuất
            </div>
          </div>

          <div className="user-info-detail">
            <InfoWrapper title="Full name: ">
              <FormInfo value={fullName}></FormInfo>
            </InfoWrapper>

            <InfoWrapper title="Email: ">
              <FormInfo value={email}></FormInfo>
            </InfoWrapper>

            <InfoWrapper title="Phone number: ">
              <FormInfo value={phone}></FormInfo>
            </InfoWrapper>

            <InfoWrapper title="Username: ">
              <FormInfo value={username}></FormInfo>
            </InfoWrapper>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { fullName, email, phone, username, avatar } = state.user;

  return {
    fullName,
    email,
    phone,
    username,
    avatar,
  };
};

const mapDispatchToProps = {
  changeAvatarConnect: changeAvatar,
  logoutConnect: logout,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withLogin(UserInfoPage))
);
