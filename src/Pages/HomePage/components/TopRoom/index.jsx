import React from "react";
import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { appPages } from "../../../../constants";
import "./index.scss";

class TopRoom extends PureComponent {
  render() {
    const { room = {} } = this.props;
    return (
      <div className="top-room-container">
        <img className="room" src={room.url} alt={room.alt} />
        <div
          className="btn-see-detail"
          onClick={() => {
            this.props.history.push(
              `${appPages.RoomDetail.link}/${room.alias}`
            );
          }}
        >
          Click to see detail
        </div>
      </div>
    );
  }
}

export default withRouter(TopRoom);
