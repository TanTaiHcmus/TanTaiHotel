import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Banner from "../../Components/Banner";
import BookingFrame from "../../Components/BookingFrame";
import { withLogin } from "../../HOC/withLogin";
import { withRouter } from "react-router-dom";
import bookingBannerImage from "../../Images/bk-room.png";
import "./index.scss";
import { appPages, STATUS_MESSAGE } from "../../constants";
import RoomApi from "../../api/roomApi";
import { isEmpty } from "../../utils/common";
import { TextArea } from "../../Components/Input";

class Booking extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      room: {},
    };
  }

  async componentDidMount() {
    const { history } = this.props;
    const room = history.location.pathname.slice(
      appPages.Booking.link.length + 1
    );
    if (isEmpty(room)) {
      history.push("/");
    }
    const response = await RoomApi.getBookingRoom(room);
    if (response.message === STATUS_MESSAGE.SUCCESS) {
      this.setState({ room: response.data[0] });
    }
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    const { message, room } = this.state;
    const { fullName, email, phone, nights } = this.props;

    return (
      <div className="booking-container">
        <Banner
          title={appPages.Booking.name}
          bannerImage={bookingBannerImage}
          className="booking-banner"
        />
        <div className="booking-content">
          <div className="your-reservation">
            <img src={room.url} />
            <div className="reservation">
              <div className="title">YOUR RESERVATION</div>
              <BookingFrame className="final-booking-frame" disabled />
            </div>
          </div>

          <div className="booking-info">
            <div className="title">Your booking detail</div>
            <div className="info">
              Full name:
              <span>{fullName}</span>
            </div>
            <div className="info">
              Email:
              <span>{email}</span>
            </div>
            <div className="info">
              Phone number:
              <span>{phone}</span>
            </div>
            <div className="info">
              Total:
              <span>{nights * room.price}</span>
            </div>

            <div className="info">
              Message:
              <TextArea
                className="message"
                rows="6"
                value={message}
                placeholder="Send message to us"
                onChange={this.handleMessageChange}
              />
            </div>

            <div
              className="btn-finish"
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              Finish
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { fullName, email, phone, username } = state.user;
  const { nights } = state.booking;

  return {
    fullName,
    email,
    phone,
    username,
    nights,
  };
};

export default withLogin(withRouter(connect(mapStateToProps)(Booking)));
