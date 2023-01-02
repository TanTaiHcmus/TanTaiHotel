export const appMenu = {
  Home: { id: 1, name: "Home", link: "/" },
  OurRooms: { id: 2, name: "Our rooms", link: "/OurRooms" },
  Contact: { id: 3, name: "Contact", link: "/Contact" },
  AboutUs: { id: 4, name: "About us", link: "/AboutUs" },
};

export const appPages = {
  ...appMenu,
  UserInfo: { id: 5, name: "Your account", link: "/UserInfo" },
  RoomDetail: { id: 6, name: "Room detail", link: "/RoomDetail" },
  Booking: { id: 7, name: "Booking", link: "/Booking" },
};

export const USER_ID = "USER_ID";

export const URL_SERVER = "http://157.230.43.147/";

export const EnumPopupStatus = {
  NONE: "none",
  LOGIN: "login",
  REGISTER: "register",
};

export const STATUS_MESSAGE = {
  SUCCESS: "success",
  ERROR: "error",
};

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const DATE_FORMAT = "DD-MMM-YYYY";

export const GOOGLE_MAP_API_KEY = "AIzaSyBAefhRlXEH3vCko-zZTX6PHllTR6av4WI";
