import React, { useRef } from "react";
import Slider from "react-slick";

const CustomSlide = (params) => {
  const { index, ...props } = params;
  return (
    <div className="slide_ele">
      <img src={params.link} />
    </div>
  );
};

export const SlideImg = () => {
  const customeSlider = useRef();
  const next = () => {
    customeSlider.current.slickNext();
  };
  const previous = () => {
    customeSlider.current.slickPrev();
  };
  const custom_set = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container slide_q">
      <div className="slide_viewer">
        <div className="slide_group">
          <Slider {...custom_set} ref={customeSlider}>
            <CustomSlide index={1} link="image/sexy/89988303_p0.jpg" />
            <CustomSlide index={2} link="image/sexy/89988303_p1.jpg" />
            <CustomSlide index={3} link="image/sexy/89998767_p0.jpg" />
            <CustomSlide index={4} link="image/sexy/94135773_p0.jpg" />
            <CustomSlide index={5} link="image/sexy/avatar.png" />
            <CustomSlide index={6} link="image/sexy/94655345_p0.jpg" />
          </Slider>
        </div>
      </div>
      <div style={{ padding:"10rem",textAlign: "center" }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
    
  );
};
