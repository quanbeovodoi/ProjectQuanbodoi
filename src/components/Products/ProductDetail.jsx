import React from "react";
import Slider from "react-slick";

const ProductDetail = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a className="prdDetailsDot">
          <img src="/image/ao_khoac/aokhoac.jpg" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false,
  };
  return (
    <div>
      <div className="main">
        <div className="main_content">
          <div className="container">
            <div className="grid prdDetails">
              <div className="prdDetails-slide">
                <h2>Chi tiết sản phẩm</h2>
                <Slider {...settings}>
                  <div>
                    <img src="/image/ao_khoac/aokhoac.jpg" />
                  </div>
                  <div>
                    <img src="/image/slide/fashion_1.jpg" />
                  </div>
                  <div>
                    <img src="/image/ao_khoac/aokhoac.jpg" />
                  </div>
                  <div>
                    <img src="/image/ao_khoac/aokhoac.jpg" />
                  </div>
                </Slider>
              </div>
              <div className="prdDetails-content">
                <div className="prdDetails-title">Áo khoác Bodoi</div>
                <div className="flex">
                  <div className="prdDetails-price">100.000 đ</div>
                  <div className="prdDetails-price card_cross">500.000 đ</div>
                </div>
                <div className="rateStars">
                  <span></span>
                </div>
                <div className="prdDetails-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
                <div className="prdDetails-info">
                  <ul>
                    <li>
                      <span>Brands: </span>nike
                    </li>
                    <li>
                      <span>Product Code: </span>f1
                    </li>
                    <li>
                      <span>Reward Points: </span>100
                    </li>
                    <li>
                      <span>Stock: </span>
                      <span className="stock">In Stock</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
