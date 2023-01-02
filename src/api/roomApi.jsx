import Axios from "./axios";

class RoomApi {
  static getRooms = (limit, page) => {
    return Axios.get("/rooms", { params: { _limit: limit, _page: page } });
  };

  static getRoomDetail = (alias) => {
    return Axios.get("/room-detail", { params: { alias } });
  };

  static getBookingRoom = (alias) => {
    return Axios.get("rooms", { params: { alias } });
  };
}

export default RoomApi;
