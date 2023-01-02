import { ACTIONS_OF_POPUP } from "../../Actions";
import { EnumPopupStatus } from "../../constants";

const initState = {
  status: EnumPopupStatus.NONE,
};

const PopupReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS_OF_POPUP.CLOSE_POPUP: {
      return {
        ...state,
        status: EnumPopupStatus.NONE,
      };
    }
    case ACTIONS_OF_POPUP.OPEN_LOGIN_POPUP: {
      return {
        ...state,
        status: EnumPopupStatus.LOGIN,
      };
    }
    case ACTIONS_OF_POPUP.OPEN_REGISTER_POPUP: {
      return {
        ...state,
        status: EnumPopupStatus.REGISTER,
      };
    }
    default: {
      return state;
    }
  }
};

export default PopupReducer;
