import React, { PureComponent } from "react";
import Banner from "../../Components/Banner";
import { appMenu, appPages, STATUS_MESSAGE } from "../../constants";
import "./index.scss";
import ourRoomsBannerImage from "../../Images/room.jpg";
import { withRouter } from "react-router-dom";
import BookingFrame from "../../Components/BookingFrame";
import RoomApi from "../../api/roomApi";
import Room from "./Room";
import { withAppPages } from "../../HOC/withAppPages";

class OurRooms extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      isTotal: false,
    };

    this.limit = 6;
    this.page = 1;
  }

  getRoomsFromServer = async () => {
    const response = await RoomApi.getRooms(this.limit, this.page);

    if (response.message === STATUS_MESSAGE.SUCCESS) {
      if (response.data && response.data.length !== 0) {
        this.setState({
          rooms: response.data,
        });
      } else {
        this.page--;
        this.setState({
          isTotal: true,
        });
      }
    }
  };

  componentDidMount() {
    this.getRoomsFromServer();
  }

  render() {
    const { rooms, isTotal } = this.state;

    return (
      <div className="our-rooms-container">
        <Banner
          title={appMenu.OurRooms.name}
          bannerImage={ourRoomsBannerImage}
        />

        <div className="content">
          <BookingFrame className="booking-select-frame"></BookingFrame>
          <div className="list-rooms">
            {rooms.length > 0 &&
              rooms.map((room, index) => <Room room={room} key={index} />)}

            <div className="control-container">
              <div
                className={`btn btn-prev ${this.page === 1 ? "disabled" : ""}`}
                onClick={() => {
                  this.page--;
                  this.setState({
                    isTotal: false,
                  });
                  this.getRoomsFromServer();
                }}
              >
                Kế trước
              </div>

              <div
                className={`btn btn-next ${isTotal ? "disabled" : ""}`}
                onClick={() => {
                  this.page++;
                  this.getRoomsFromServer();
                }}
              >
                Kế tiếp
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAppPages(OurRooms, appPages.OurRooms.id));
