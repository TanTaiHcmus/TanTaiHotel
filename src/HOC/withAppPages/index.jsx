import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { changeMenuTab } from "../../Header/action";

const mapDispatchToProps = {
  changeMenuTabConnect: changeMenuTab,
};

export const withAppPages = (Component, id) => {
  return connect(
    null,
    mapDispatchToProps
  )(
    class extends PureComponent {
      constructor(props) {
        super(props);
        this.props.changeMenuTabConnect(id);
      }

      render() {
        return <Component {...this.props} />;
      }
    }
  );
};
