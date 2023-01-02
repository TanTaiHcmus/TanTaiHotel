import React, { PureComponent } from "react";
import "./index.scss";
import homePageBanner1 from "../../Images/homepage-banner-1.png";
import homePageBanner2 from "../../Images/homepage-banner-2.png";
import homePageBanner3 from "../../Images/homepage-banner-3.png";
import Carousel from "../../Components/Carousel";
import TopRoom from "./components/TopRoom";
import { withRouter } from "react-router-dom";
import { appMenu, appPages, STATUS_MESSAGE } from "../../constants";
import RoomApi from "../../api/roomApi";
import { withAppPages } from "../../HOC/withAppPages";

class HomePage extends PureComponent {
  state = {
    top3Room: [],
  };

  async componentDidMount() {
    const response = await RoomApi.getRooms(3, 1);
    if (response.message === STATUS_MESSAGE.SUCCESS) {
      if (response.data && response.data.length > 0) {
        this.setState({
          top3Room: response.data,
        });
      }
    }
  }

  handleBookClick = () => {
    this.props.history.push(appMenu.OurRooms.link);
  };

  render() {
    const { top3Room } = this.state;

    return (
      <div className="home-page-container">
        <Carousel
          listImages={[homePageBanner1, homePageBanner2, homePageBanner3]}
          height="400px"
        />

        <div className="decoration">
          <div className="slogan">All the best is for you</div>
          <div className="booking">
            <div className="btn-book" onClick={this.handleBookClick}>
              Book now
            </div>
          </div>
        </div>

        <div className="top-rooms-container">
          <div className="top-rooms-title">Top 3 room</div>
          <div className="top3-room">
            {top3Room.map((room, index) => (
              <TopRoom room={room} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAppPages(HomePage, appPages.Home.id));
