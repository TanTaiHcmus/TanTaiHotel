import { ACTIONS_OF_BOOKING } from "../../Actions";
import Moment from "../../Moment";

const initState = {
  startDate: Moment.getNow(),
  endDate: Moment.getDateFromNowWithDays(1),
  guests: 1,
  nights: 1,
  room: null,
};

const BookingReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS_OF_BOOKING.CHANGE_START_DATE: {
      return {
        ...state,
        startDate: action.data,
      };
    }
    case ACTIONS_OF_BOOKING.CHANGE_END_DATE: {
      return {
        ...state,
        endDate: action.data,
      };
    }
    case ACTIONS_OF_BOOKING.CHANGE_GUESTS: {
      return {
        ...state,
        guests: action.data,
      };
    }
    case ACTIONS_OF_BOOKING.CHANGE_NIGHTS: {
      return {
        ...state,
        nights: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default BookingReducer;
