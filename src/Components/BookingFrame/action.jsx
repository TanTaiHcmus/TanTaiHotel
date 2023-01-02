import { ACTIONS_OF_BOOKING } from "../../Actions";
import Moment from "../../Moment";

export const changeStartDate = (date) => (dispatch, getState) => {
  const state = getState();
  const { endDate } = state.booking;
  dispatch({
    type: ACTIONS_OF_BOOKING.CHANGE_START_DATE,
    data: date,
  });

  const diffDays = Moment.diffDays(date, endDate);

  if (diffDays >= 0) {
    dispatch({
      type: ACTIONS_OF_BOOKING.CHANGE_END_DATE,
      data: Moment.addDays(date, 1),
    });
  }
};

export const changeEndDate = (date) => (dispatch) => {
  dispatch({
    type: ACTIONS_OF_BOOKING.CHANGE_END_DATE,
    data: date,
  });
};

export const changeGuests = (guests) => (dispatch) => {
  if (guests > 0)
    dispatch({
      type: ACTIONS_OF_BOOKING.CHANGE_GUESTS,
      data: guests,
    });
};

export const changeNights = (nights) => (dispatch) => {
  if (nights > 0)
    dispatch({
      type: ACTIONS_OF_BOOKING.CHANGE_NIGHTS,
      data: nights,
    });
};
