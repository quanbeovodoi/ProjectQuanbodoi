import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { SlideImg } from "../Slide/SlideImg";
import SlideProduct from "../Slide/SlideProduct";
import ProductApi from "../../Api/ProductApi";
import Pagination from "../Pagination/Pagination";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);
  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll();
      let data = productItems.data;
      setProducts(data);
      setLoading(false);
    };
    getProducts();
    // return () => {
    //   setProducts([])
    // }
  }, []);
  // console.log(productData)
  let category = products["category_list"];
  const productData = [];
  category &&
    category.map((item, index) => {
      item.children.map((childitem, index) => {
        productData.push(childitem);
      });
    });
  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productPerPage;
  let currentProducts = productData.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                <div className="grid card_grid">
                  {currentProducts &&
                    currentProducts.map((item, index) => {
                      return (
                        <div className="box" key={index}>
                          <div className="card">
                            <a style={{ display: "block" }} href="#">
                              <img
                                className="card_image"
                                style={{ width: "100rem" }}
                                src={item.image_1}
                              />
                            </a>
                            <div className="card_overlays">
                              <div className="card_hdr">
                                <div className="card_hdr_wrapper">
                                  <h3 className="card_title">
                                    {item.display_name}
                                  </h3>
                                  <p className="card_para">
                                    <span className="card_price">
                                      {item.price}.000 đ
                                    </span>
                                    <span className="card_cross">
                                      150.000 đ
                                    </span>
                                    <span className="card_off">
                                      ({item.sales} OFF)
                                    </span>
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
                      );
                    })}
                  {/* card */}
                  {/* end card */}
                </div>
                <Pagination
                  paginate={paginate}
                  productPerPage={productPerPage}
                  totalProduct={productData.length}
                />
                <div className="more">
                  <a href="#" className="Button transition">
                    Xem Thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
