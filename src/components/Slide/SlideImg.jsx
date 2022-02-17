import React, { useRef } from "react";
import Slider from "react-slick";

const CustomSlide = (params) => {
  const { index, ...props } = params;
  return (
    <div className="slide_ele">
      <img src={params.link} />
      <div className="text">
        <h2 className="slide_title">{params.text}</h2>
      </div>
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
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  return (
    <div className="slide_q">
      <div className="slide_viewer">
        <div className="slide_group">
          <Slider {...custom_set} ref={customeSlider}>
            <CustomSlide
              index={1}
              link="image/slide/fashion_1.jpg"
              text="Mua hàng trăm sản phẩm tại đây"
            />
            <CustomSlide
              index={2}
              link="image/slide/fashion_2.jpg"
              text="Qshopping thoải mái lựa chọn"
            />
            <CustomSlide
              index={3}
              link="image/slide/fashion_3.jpg"
              text="Chào mừng đến với Qshopping"
            />
            <CustomSlide
              index={4}
              link="image/slide/fashion_4.jpg"
              text="Hãy đánh giá 5 sao cho chúng tôi"
            />
            <CustomSlide
              index={5}
              link="image/slide/fashion_5.jpg"
              text="Giá cả phải chăng"
            />
            <CustomSlide
              index={6}
              link="image/slide/fashion_6.jpg"
              text="Chào mừng đến với Qshopping"
            />
          </Slider>
        </div>
        <div className="slide_content" >
          <div
            className="buttonSlide_area"
            style={{ padding: "2rem 0 0", textAlign: "center" }}
          >
            <button className="btn_pre" onClick={previous}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="btn_next" onClick={next}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
