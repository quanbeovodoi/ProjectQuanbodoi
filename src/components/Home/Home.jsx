import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { SlideImg } from "../Slide/SlideImg";
import SlideProduct from "../Slide/SlideProduct";
import ProductApi from "../../Api/ProductApi";
import Pagination from "../Pagination/Pagination";
import ProductsList from "../Products/ProductsList";
import { Link } from "react-router-dom";
import DataConfig from "../../config/DataConfig";
import Cart from "../Cart/Cart";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const productData = [];
  DataConfig(productData)
  console.log(productData)
  // console.log(products)
  return (
    <React.Fragment>
      <div className="main">
        <div className="main_content">
          {/* slide */}
          <SlideImg />
          {/* slide end */}
          <div className="container">
            {/* cate */}
            <div className="cate_group grid">
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
              <div className="cate_box transition">
                <img
                  className="transition"
                  src="./image/clothing-header-image.jpg"
                />
                <h4 className="cate_title">Áo Len</h4>
              </div>
              <div className="cate_box cols_3 transition">
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
              <div className="cate_box transition">
                <img
                  className="transition"
                  src="./image/clothing-header-image.jpg"
                />
                <h4 className="cate_title">Áo Len</h4>
              </div>
              <div className="cate_box cols_3 transition">
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
              <SlideProduct />
            </div>
            {/* product slide end */}
            <div className="flex product_items">
              <SideBar />
              <div>
                <ProductsList pagenum={8} limit={true}/>
                <div className="more">
                  <Link to="/products" className="Button transition">
                    Xem Thêm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
