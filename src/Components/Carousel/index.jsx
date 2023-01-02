import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./index.scss";

const Carousel = ({ listImages, height }) => {
  return (
    <div className="banner-with-carousel" style={{ height: height }}>
      <UncontrolledCarousel
        items={listImages.map((image, index) => {
          return {
            key: index,
            src: image,
          };
        })}
      />
    </div>
  );
};

export default Carousel;
