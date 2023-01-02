import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import "./index.scss";
import accountIcon from "../../../Images/account.png";
import { appPages } from "../../../constants/index";

class Room extends PureComponent {
  render() {
    const { room } = this.props;
    return (
      <div className="room-container">
        <img src={room.url} className="room-image" />
        <div className="room-info">
          <div
            className="text"
            onClick={() => {
              this.props.history.push(
                `${appPages.RoomDetail.link}/${room.alias}`
              );
            }}
          >
            Thông tin chi tiết
          </div>
          <img src={accountIcon} className="people-icon" />
          <div className="amount-stayed">{room.stayed}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Room);
