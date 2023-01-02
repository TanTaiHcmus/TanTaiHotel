import React, { PureComponent } from "react";
import "./index.scss";
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";
import bannerImage from "../../Images/roomdetail.jpg";
import { withRouter } from "react-router-dom";
import { appPages, STATUS_MESSAGE } from "../../constants";
import { isEmpty, renderPriceText } from "../../utils/common";
import RoomApi from "../../api/roomApi";
import RoomDescription from "./components/RoomDescription";
import BookingFrame from "../../Components/BookingFrame";
import OtherRooms from "./components/OtherRooms";
import RoomServices from "./components/RoomServices";
import { withAppPages } from "../../HOC/withAppPages";

const navbar = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "Description",
    href: "#room-description",
  },
  {
    id: 3,
    name: "Room services",
    href: "#room-services",
  },
  {
    id: 4,
    name: "Other rooms",
    href: "#other-rooms",
  },
];

class RoomDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      room: {},
      activeNavbar: navbar[0].id,
    };
  }

  getRoomDetailFromServer = async (alias) => {
    const response = await RoomApi.getRoomDetail(alias);
    if (response.message === STATUS_MESSAGE.SUCCESS) {
      this.setState({ room: response.data[0] });
    }
  };

  componentDidMount() {
    const { history } = this.props;
    const room = history.location.pathname.slice(
      appPages.RoomDetail.link.length + 1
    );
    if (isEmpty(room)) {
      history.push("/");
    }
    this.getRoomDetailFromServer(room);
  }

  componentDidUpdate() {
    const room = this.props.history.location.pathname.slice(
      appPages.RoomDetail.link.length + 1
    );
    if (room !== this.state.room.alias) {
      this.getRoomDetailFromServer(room);
    }
  }

  handleChangeActiveNavbar = (activeNavbar) => {
    this.setState({
      activeNavbar,
    });
  };

  handleBooking = () => {
    this.props.history.push(
      `${appPages.Booking.link}/${this.state.room.alias}`
    );
  };

  render() {
    const { room, activeNavbar } = this.state;
    return (
      <div className="room-detail">
        <Banner bannerImage={bannerImage} alt="room detail banner" />
        <Navbar
          navbar={navbar}
          className="room-detail-navbar"
          activeIndex={activeNavbar}
          onChange={this.handleChangeActiveNavbar}
        />
        <div className="room-price">{renderPriceText(room.price)}</div>
        <div className="room-name">{room.name}</div>
        <div className="room-content">
          <div className="left-content">
            <RoomDescription room={room} />
            <RoomServices services={room.services} />
          </div>

          <div className="right-content">
            <BookingFrame
              className="booking-select-frame"
              onBooking={this.handleBooking}
            />
            <OtherRooms />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAppPages(RoomDetail, appPages.OurRooms.id));
