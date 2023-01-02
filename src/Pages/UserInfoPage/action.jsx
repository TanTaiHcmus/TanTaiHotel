import { ACTIONS_OF_USER } from "../../Actions";
import UserApi from "../../api/usersApi";
import { STATUS_MESSAGE, USER_ID } from "../../constants";
import { fileToBase64 } from "../../utils/common";

export const changeAvatar = (file) => async (dispatch, getState) => {
  const avatar = await fileToBase64(file);

  const response = await UserApi.updateUserInfo(localStorage.getItem(USER_ID), {
    ...getState().user,
    avatar,
  });

  if (response.message === STATUS_MESSAGE.SUCCESS) {
    dispatch({
      type: ACTIONS_OF_USER.CHANGE_AVATAR,
      data: avatar,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: ACTIONS_OF_USER.LOGOUT,
  });
};
