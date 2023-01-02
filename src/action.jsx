import { ACTIONS_OF_BOOKING, ACTIONS_OF_USER } from "./Actions";
import UserApi from "./api/usersApi";
import { USER_ID } from "./constants";
import { isEmpty } from "./utils/common";

export const getUserInformation = (userID) => {
  return async (dispatch) => {
    const response = await UserApi.getInfoFromID(userID);
    if (response.data && response.data.length > 0)
      dispatch({
        type: ACTIONS_OF_USER.USER_INFO_RECEIVED,
        data: response.data[0],
      });
  };
};

export const getLoginStateAndUserInformation = () => {
  return async (dispatch) => {
    const userID = await localStorage.getItem(USER_ID);
    if (!isEmpty(userID)) {
      dispatch(getUserInformation(userID));
    }
  };
};
