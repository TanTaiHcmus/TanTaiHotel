import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { USER_ID } from "../../constants";
import HomePage from "../../Pages/HomePage";
import { openLoginPopup } from "../../Popup/action";
import { isEmpty } from "../../utils/common";

const mapStateToProps = (state) => {
  return {
    isLogin: !isEmpty(state.user.username),
  };
};

const mapDispatchToProps = {
  openLoginPopup: openLoginPopup,
};

export const withLogin = (MyComponent) =>
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(
      class extends PureComponent {
        handleRequireLogin = () => {
          this.props.openLoginPopup();
          return <HomePage />;
        };

        render() {
          const { isLogin } = this.props;

          return isLogin || localStorage.getItem(USER_ID) ? (
            <MyComponent {...this.props} />
          ) : (
            this.handleRequireLogin()
          );
        }
      }
    )
  );
