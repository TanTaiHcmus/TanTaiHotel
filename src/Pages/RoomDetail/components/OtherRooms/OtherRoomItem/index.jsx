import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { appPages } from "../../../../../constants";
import { renderPriceText } from "../../../../../utils/common";
import "./index.scss";

class OtherRoomItem extends PureComponent {
  render() {
    const { room } = this.props;
    return (
      <div className="other-room-container">
        <img src={room.url} className="other-room-image" />
        <div className="other-room-info">
          <div className="name">{room.name}</div>
          <div className="other-room-price">{renderPriceText(room.price)}</div>
          <div
            className="btn-see-detail"
            onClick={() => {
              this.props.history.push(
                `${appPages.RoomDetail.link}/${room.alias}`
              );
            }}
          >
            Thông tin chi tiết
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OtherRoomItem);
