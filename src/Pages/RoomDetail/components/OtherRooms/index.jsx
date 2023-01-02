import React, { PureComponent } from "react";
import RoomApi from "../../../../api/roomApi";
import { STATUS_MESSAGE } from "../../../../constants";
import "./index.scss";
import OtherRoomItem from "./OtherRoomItem";

class OtherRooms extends PureComponent {
  state = { rooms: [] };

  async componentDidMount() {
    const response = await RoomApi.getRooms(3, 1);
    if (response.message === STATUS_MESSAGE.SUCCESS) {
      this.setState({
        rooms: response.data,
      });
    }
  }

  render() {
    const { rooms } = this.state;

    return (
      <div id="other-rooms">
        <div className="title">Other rooms</div>
        <div className="rooms">
          {rooms.map((item, index) => (
            <OtherRoomItem room={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default OtherRooms;
