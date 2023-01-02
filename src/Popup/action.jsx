import { ACTIONS_OF_POPUP, ACTIONS_OF_USER } from "../Actions";
import UserApi from "../api/usersApi";
import { STATUS_MESSAGE, USER_ID } from "../constants";
import Toast from "../Toast";

export const openLoginPopup = () => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS_OF_POPUP.OPEN_LOGIN_POPUP,
    });
  };
};

export const openRegisterPopup = () => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS_OF_POPUP.OPEN_REGISTER_POPUP,
    });
  };
};

export const closePopup = () => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS_OF_POPUP.CLOSE_POPUP,
    });
  };
};

export const registerNewAccount = (info) => {
  return async (dispatch) => {
    delete info.confirmPassword;

    const response = await UserApi.registerNewAccount(info);

    if (response.message === STATUS_MESSAGE.SUCCESS) {
      Toast.success("Register is successfully");

      dispatch({
        type: ACTIONS_OF_POPUP.OPEN_LOGIN_POPUP,
      });
    }
  };
};

export const loginToServer = (account) => {
  return async (dispatch) => {
    const response = await UserApi.loginToServer(account);

    if (response.message === STATUS_MESSAGE.SUCCESS) {
      if (response.data.length > 0) {
        Toast.success("Login is successfully");

        localStorage.setItem(USER_ID, response.data[0].id);

        dispatch({
          type: ACTIONS_OF_POPUP.CLOSE_POPUP,
        });

        dispatch({
          type: ACTIONS_OF_USER.USER_INFO_RECEIVED,
          data: response.data[0],
        });
      } else {
        Toast.error("Username or password is wrong");
      }
    } else {
      Toast.success("Login failed");
    }
  };
};
