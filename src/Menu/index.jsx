import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { appMenu } from "../constants";
import { generateListFromObject } from "../utils/common";
import "./index.scss";
import { withRouter } from "react-router-dom";

const appMenuList = generateListFromObject(appMenu);

class Menu extends PureComponent {
  onTabChange = (tab) => {
    this.props.history.push(tab.link);
  };

  render() {
    const { currentTab } = this.props;

    return (
      <div className="app-menu">
        {appMenuList.map((item, index) => (
          <div
            className={`app-menu-item ${
              item.id === currentTab ? "active" : ""
            }`}
            onClick={() => {
              if (item.id !== currentTab) this.onTabChange(item);
            }}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTab: state.header.currentTab,
  };
};

export default withRouter(connect(mapStateToProps)(Menu));
