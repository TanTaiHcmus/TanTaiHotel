import { ACTIONS_OF_USER } from "../../Actions";

const initState = {
  username: "",
  avatar: "",
  fullName: "",
  email: "",
  phone: "",
};

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS_OF_USER.USER_INFO_RECEIVED: {
      const { data } = action;
      const { username, avatar, fullName, email, phone } = data;

      return {
        ...state,
        username,
        avatar,
        fullName,
        email,
        phone,
      };
    }
    case ACTIONS_OF_USER.CHANGE_AVATAR: {
      return {
        ...state,
        avatar: action.data,
      };
    }
    case ACTIONS_OF_USER.LOGOUT: {
      return {
        ...initState,
      };
    }
    default: {
      return state;
    }
  }
};

export default UserReducer;
