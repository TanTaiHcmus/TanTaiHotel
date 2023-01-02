import { combineReducers } from "redux";
import BookingReducer from "./Booking";
import HeaderReducer from "./Header";
import PopupReducer from "./Popup";
import UserReducer from "./User";

const rootReducer = combineReducers({
  user: UserReducer,
  popup: PopupReducer,
  header: HeaderReducer,
  booking: BookingReducer,
});

export default rootReducer;
