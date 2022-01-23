import React from "react";
import Slider from "react-slick";

const SlideProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 5,
    autoplay: true,
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
    <div>
      <Slider {...settings}>
        <div className="item">
          <div className="box">
            <div className="card">
              <a style={{ display: "block" }} href="#">
                <img className="card_image" src="image/ao_khoac/aokhoac.jpg" />
              </a>
              <div className="card_overlays">
                <div className="card_hdr">
                  <div className="card_hdr_wrapper">
                    <h3 className="card_title">ÁO KHOÁC W2AKK12108FOSBB</h3>
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
        <div className="item">
          <div className="box">
            <div className="card">
              <a style={{ display: "block" }} href="#">
                <img className="card_image" src="image/ao_khoac/aokhoac.jpg" />
              </a>
              <div className="card_overlays">
                <div className="card_hdr">
                  <div className="card_hdr_wrapper">
                    <h3 className="card_title">ÁO KHOÁC W2AKK12108FOSBB</h3>
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
        <div className="item">
          <div className="box">
            <div className="card">
              <a style={{ display: "block" }} href="#">
                <img className="card_image" src="image/ao_khoac/aokhoac.jpg" />
              </a>
              <div className="card_overlays">
                <div className="card_hdr">
                  <div className="card_hdr_wrapper">
                    <h3 className="card_title">ÁO KHOÁC W2AKK12108FOSBB</h3>
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
        <div className="item">
          <div className="box">
            <div className="card">
              <a style={{ display: "block" }} href="#">
                <img className="card_image" src="image/ao_khoac/aokhoac.jpg" />
              </a>
              <div className="card_overlays">
                <div className="card_hdr">
                  <div className="card_hdr_wrapper">
                    <h3 className="card_title">ÁO KHOÁC W2AKK12108FOSBB</h3>
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
        <div className="item">
          <div className="box">
            <div className="card">
              <a style={{ display: "block" }} href="#">
                <img className="card_image" src="image/ao_khoac/aokhoac.jpg" />
              </a>
              <div className="card_overlays">
                <div className="card_hdr">
                  <div className="card_hdr_wrapper">
                    <h3 className="card_title">ÁO KHOÁC W2AKK12108FOSBB</h3>
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
      </Slider>
    </div>
  );
};

export default SlideProduct;
