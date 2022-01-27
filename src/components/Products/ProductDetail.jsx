import React from "react";
import Slider from "react-slick";
import { Button, IconButton } from "@mui/material";
import Icon from "@mui/material/Icon";
import { red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ProductDetailAction from "./ProductDetailAction";
const ProductDetail = () => {
  const products = {mainPrice:"100"}
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
    arrows: false,
  };
  return (
    <div>
      <div className="main">
        <div className="main_content">
          <div className="container">
            <div className="prdDetails">
              <Stack className="stack-flex"
                style={{flexDirection:'row',gap:'4rem'}}
              >
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
                <div className="flex prdDetails-content">
                  <div className="prdDetails-title">Áo khoác Bodoi</div>
                  <div className="flex">
                    <div className="prdDetails-price">100.000 đ</div>
                    <div className="prdDetails-price card_cross">500.000 đ</div>
                  </div>
                  <div className="rateStars">
                    <span></span>
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
                  <ProductDetailAction product={products} />
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
