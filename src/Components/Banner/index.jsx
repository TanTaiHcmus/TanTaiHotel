import React, { PureComponent } from "react";
import "./index.scss";

class Banner extends PureComponent {
  render() {
    const { title, className, bannerImage } = this.props;

    return (
      <div className={`app-banner ${className ? className : ""}`}>
        <img src={bannerImage} className="banner-img" alt="banner-image" />
        {title && <div className="banner-title">{title}</div>}
      </div>
    );
  }
}

export default Banner;
