import "./App.css";
import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import { appPages } from "./constants/";
import Footer from "./Footer";
import { connect } from "react-redux";
import { getLoginStateAndUserInformation } from "./action";
import Popup from "./Popup";
import { Switch, Route } from "react-router-dom";
import UserInfoPage from "./Pages/UserInfoPage";
import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import OurRooms from "./Pages/OurRooms";
import RoomDetail from "./Pages/RoomDetail";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";

class App extends Component {
  componentDidMount() {
    this.props.getLoginStateAndUserInformationConnect();
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Header />
          <Popup />
          <Menu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path={appPages.UserInfo.link}
              component={UserInfoPage}
            />
            <Route exact path={appPages.OurRooms.link} component={OurRooms} />
            <Route exact path={appPages.Contact.link} component={Contact} />
            <Route exact path={appPages.AboutUs.link} component={AboutUs} />
            <Route path={appPages.RoomDetail.link} component={RoomDetail} />
            <Route path={appPages.Booking.link} component={Booking} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getLoginStateAndUserInformationConnect: getLoginStateAndUserInformation,
};

export default connect(null, mapDispatchToProps)(App);
