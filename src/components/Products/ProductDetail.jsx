import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Button, IconButton } from "@mui/material";
import Icon from "@mui/material/Icon";
import { red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ProductDetailAction from "./ProductDetailAction";
import { useParams } from "react-router-dom";
import ProductApi from "../../Api/ProductApi";
import DataConfig from "../../config/DataConfig";
import RateStar from "../RateStar/RateStar";
const ProductDetail = () => {
  const [products, setProducts] = useState([])

  const productData = [];
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  let { productID } = useParams()
  DataConfig(productData, productID)
  // console.log(productData)
  const settings = {
    customPaging: function (i) {
      return (
        <a className="prdDetailsDot">
          <img src={productData[0] && productData[0].p_image} />
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
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const productItems = await ProductApi.getOne(productID)
  //     let data = productItems.data
  //     setProducts(data)
  //   }
  //   getProducts()

  //   return () => {
  //     setProducts([])
  //   }
  //  }, [])

  return (
    <div>
      <div className="main">
        <div className="main_content">
        <div className="titlePage" style={{backgroundImage:'url(https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg)',backgroundRepeat:'no-repeat',backgroundSize: 'cover',backgroundPosition:'center'}}>
          <h1>Chi tiết sản phẩm</h1>
        </div>
          <div className="container">
            <div className="prdDetails">
              <Stack className="stack-flex" style={{ flexDirection: 'row', gap: '4rem' }} >
                <div className="prdDetails-slide">
                  <Slider {...settings}>
                    <div>
                      <img src={productData[0] && productData[0].p_image} />
                    </div>
                    <div>
                      <img src={productData[0] && productData[0].p_image} />
                    </div>
                    <div>
                      <img src={productData[0] && productData[0].p_image} />
                    </div>
                    <div>
                      <img src={productData[0] && productData[0].p_image} />
                    </div>
                  </Slider>
                </div>
                <div className="flex prdDetails-content">
                  <div className="prdDetails-title">{productData[0] && productData[0].p_name}</div>
                  <div className="flex">
                    <div className="prdDetails-price">{productData[0] && productData[0].p_price}đ</div>
                    <div className="prdDetails-price card_cross"></div>
                  </div>
                  <div className="prdDetails-des">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </div>
                  <div className="rateStars">
                    <RateStar />
                  </div>
                  <div className="prdDetails-info">
                    <ul>
                      <li>
                        <span>Phân Loại: </span>{productData[0] && productData[0].p_cate}
                      </li>
                      <li>
                        <span>Thương Hiệu: </span>{productData[0] && productData[0].p_brand}
                      </li>
                    </ul>
                  </div>
                  <ProductDetailAction product={productData[0]} />
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
