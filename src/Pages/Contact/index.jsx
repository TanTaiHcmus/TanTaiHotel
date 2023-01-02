import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Banner from "../../Components/Banner";
import GoogleMap from "../../Components/GoogleMap";
import { TextArea } from "../../Components/Input";
import { appPages, USER_ID } from "../../constants";
import { withAppPages } from "../../HOC/withAppPages";
import contactImage from "../../Images/contact.jpg";
import { openLoginPopup } from "../../Popup/action";
import Toast from "../../Toast";
import { isEmpty } from "../../utils/common";
import "./index.scss";

const location = {
  address: "Tan Tai Hotel",
  lat: 10.763113254121738,
  lng: 106.68217169714335,
};

class Contact extends PureComponent {
  state = {
    message: "",
  };

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSendMessage = () => {
    if (this.props.isLogin) {
      this.props.history.push("/");
      Toast.success(
        "Cảm ơn bạn đã gửi phản hồi cho chúng tôi. Chúng tôi sẽ xem xét phản hồi của bạn và sẽ liên hệ lại bạn trong thời gian ngắn nhất!"
      );
    } else {
      this.props.openLoginPopup();
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div className="contact-container">
        <Banner title={appPages.Contact.name} bannerImage={contactImage} />
        <div className="contact-content">
          <div className="left-content">
            <div className="title">Write us</div>
            <TextArea
              className="message"
              rows="6"
              value={message}
              placeholder="Send message to us"
              onChange={this.handleMessageChange}
            />
            <div className="btn-send" onClick={this.handleSendMessage}>
              Send
            </div>
          </div>
          <div className="right-content">
            <div className="title">Frequently Asked Questions</div>
            <div className="text">
              To help you clear about our organization, we have prepared a bound
              of mostly asked questions.
            </div>
            <div className="question">How to pay an online room?</div>
            <div className="question">How to become VIP customer?</div>
            <div className="question">Which currencies are accepted?</div>
            <div className="question">
              What is the difference between normal room and VIP room?
            </div>
          </div>
          <GoogleMap
            title="Come visit us at our campus"
            className="map"
            location={location}
            zoomLevel={17}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: !isEmpty(state.user.username),
  };
};

const mapDispatchToProps = {
  openLoginPopup: openLoginPopup,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withAppPages(Contact, appPages.Contact.id))
);
