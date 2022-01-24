import React, { useRef } from "react";
import Slider from "react-slick";

const CustomSlide = (params) => {
  const { index, ...props } = params;
  return (
    <div className="item">
      <div className="box">
        <div className="card">
          <a style={{ display: "block" }} href="#">
            <img className="card_image" src="image/ao_khoac/aokhoac.jpg" />
          </a>
          <div className="card_overlays">
            <div className="card_hdr">
              <div className="card_hdr_wrapper">
                <h3 className="card_title">{params.text}</h3>
                <p className="card_para">
                  <span className="card_price">200.000 đ</span>
                  <span className="card_cross">150.000 đ</span>
                  <span className="card_off">(25% OFF)</span>
                </p>
                <div className="card_action">
                  <a href="#" className="card_Button">
                    Mua ngay
                  </a>
                  <a href="#" className="card_Button">
                    Thích
                  </a>
                </div>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SlideProduct = () => {
  const customeSlider = useRef();
  const next = () => {
    customeSlider.current.slickNext();
  };
  const previous = () => {
    customeSlider.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 5,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <div>
          <Slider {...settings} ref={customeSlider}>
            <CustomSlide text="ÁO KHOÁC W2AKK12108FOSBB" />
            <CustomSlide text="ÁO KHOÁC W2AKK12108FOSBB" />
            <CustomSlide text="ÁO KHOÁC W2AKK12108FOSBB" />
            <CustomSlide text="ÁO KHOÁC W2AKK12108FOSBB" />
            <CustomSlide text="ÁO KHOÁC W2AKK12108FOSBB" />
            <CustomSlide text="ÁO KHOÁC W2AKK12108FOSBB" />
            <CustomSlide text="ÁO KHOÁC W2AKK12108FOSBB" />
          </Slider>
        </div>
        <div
          className="slide_content"
          style={{
            left: '0',
            bottom: "-2rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
    </React.Fragment>
  );
};

export default SlideProduct;
