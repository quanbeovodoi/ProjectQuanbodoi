import React from "react";
import Slider from "react-slick";
import { SlideImg } from "../Slide/SlideImg";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
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
    <div className="main">
      <div className="main_content">
        <div className="container">
          {/* slide */}
          <SlideImg />
          {/* slide end */}
          {/* cate */}
          <div className="cate_group grid">
            <div className="cate_box cols_2 transition">
              <img
                className="transition"
                src="./image/clothing-header-image.jpg"
              />
              <h4 className="cate_title">Áo Len</h4>
            </div>
            <div className="cate_box transition">
              <img
                className="transition"
                src="./image/clothing-header-image.jpg"
              />
              <h4 className="cate_title">Áo Len</h4>
            </div>
            <div className="cate_box transition">
              <img
                className="transition"
                src="./image/clothing-header-image.jpg"
              />
              <h4 className="cate_title">Áo Len</h4>
            </div>
            <div className="cate_box cols_2 transition">
              <img
                className="transition"
                src="./image/clothing-header-image.jpg"
              />
              <h4 className="cate_title">Áo Len</h4>
            </div>
          </div>
          {/* cate end */}
          {/* product slide */}
          <div className="product_slide">
            <h3 className="caption">Sản phẩm nổi bật</h3>
            <Slider {...settings}>
              <div className="item">
                <div className="box">
                  <div className="card">
                    <a style={{ display: "block" }} href="#">
                      <img
                        className="card_image"
                        src="image/ao_khoac/aokhoac.jpg"
                      />
                    </a>
                    <div className="card_overlays">
                      <div className="card_hdr">
                        <div className="card_hdr_wrapper">
                          <h3 className="card_title">
                            ÁO KHOÁC W2AKK12108FOSBB
                          </h3>
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
                      <img
                        className="card_image"
                        src="image/ao_khoac/aokhoac.jpg"
                      />
                    </a>
                    <div className="card_overlays">
                      <div className="card_hdr">
                        <div className="card_hdr_wrapper">
                          <h3 className="card_title">
                            ÁO KHOÁC W2AKK12108FOSBB
                          </h3>
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
                      <img
                        className="card_image"
                        src="image/ao_khoac/aokhoac.jpg"
                      />
                    </a>
                    <div className="card_overlays">
                      <div className="card_hdr">
                        <div className="card_hdr_wrapper">
                          <h3 className="card_title">
                            ÁO KHOÁC W2AKK12108FOSBB
                          </h3>
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
                      <img
                        className="card_image"
                        src="image/ao_khoac/aokhoac.jpg"
                      />
                    </a>
                    <div className="card_overlays">
                      <div className="card_hdr">
                        <div className="card_hdr_wrapper">
                          <h3 className="card_title">
                            ÁO KHOÁC W2AKK12108FOSBB
                          </h3>
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
                      <img
                        className="card_image"
                        src="image/ao_khoac/aokhoac.jpg"
                      />
                    </a>
                    <div className="card_overlays">
                      <div className="card_hdr">
                        <div className="card_hdr_wrapper">
                          <h3 className="card_title">
                            ÁO KHOÁC W2AKK12108FOSBB
                          </h3>
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
          {/* product slide end */}
          <div className="grid card_grid">
            {/* card */}
            <div className="box">
              <div className="card">
                <a style={{ display: "block" }} href="#">
                  <img
                    className="card_image"
                    src="image/ao_khoac/aokhoac.jpg"
                  />
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
            {/* end card */}
            {/* card */}
            <div className="box">
              <div className="card">
                <a style={{ display: "block" }} href="#">
                  <img
                    className="card_image"
                    src="image/ao_khoac/aokhoac.jpg"
                  />
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
            {/* end card */}
            {/* card */}
            <div className="box">
              <div className="card">
                <a style={{ display: "block" }} href="#">
                  <img
                    className="card_image"
                    src="image/ao_khoac/aokhoac.jpg"
                  />
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
            {/* end card */}
            {/* card */}
            <div className="box">
              <div className="card">
                <a style={{ display: "block" }} href="#">
                  <img
                    className="card_image"
                    src="image/ao_khoac/aokhoac.jpg"
                  />
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
            {/* end card */}
            {/* card */}
            <div className="box">
              <div className="card">
                <a style={{ display: "block" }} href="#">
                  <img
                    className="card_image"
                    src="image/ao_khoac/aokhoac.jpg"
                  />
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
            {/* end card */}
            {/* card */}
            <div className="box">
              <div className="card">
                <a style={{ display: "block" }} href="#">
                  <img
                    className="card_image"
                    src="image/ao_khoac/aokhoac.jpg"
                  />
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
            {/* end card */}
            {/* card */}
            <div className="box">
              <div className="card">
                <a style={{ display: "block" }} href="#">
                  <img
                    className="card_image"
                    src="image/ao_khoac/aokhoac.jpg"
                  />
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
            {/* end card */}
            {/* card */}
            <div className="box">
              <div className="card">
                <a style={{ display: "block" }} href="#">
                  <img
                    className="card_image"
                    src="image/ao_khoac/aokhoac.jpg"
                  />
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
            {/* end card */}
          </div>
          <a href="#" className="Button">
            Xem Thêm
          </a>
        </div>
      </div>
    </div>
  );
};
