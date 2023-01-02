import React from "react";
import { CHANGE_MENU_TAB } from "../../Actions";
import { appMenu } from "../../constants";

const initState = {
  currentTab: appMenu.Home.id,
};

const HeaderReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_MENU_TAB: {
      return {
        ...state,
        currentTab: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default HeaderReducer;
