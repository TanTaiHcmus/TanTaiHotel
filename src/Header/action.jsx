import { CHANGE_MENU_TAB } from "../Actions";

export const changeMenuTab = (tab) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_MENU_TAB,
      data: tab,
    });
  };
};
