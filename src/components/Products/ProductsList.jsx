import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductApi from "../../Api/ProductApi";
import DataConfig from "../../config/DataConfig";
import Paginations from "../Pagination/Pagination";

const ProductsList = ({ pagenum, limit ,pagestart,update}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(pagestart);
  // console.log(pagenum);
  const [productPerPage] = useState(pagenum);
  const productData = [];
  DataConfig(productData)
  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productPerPage;
  let currentProducts = productData.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );
  let paginate = null
  paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateShow = ()=>{
    if (limit == false) {
      return (
        <>
          <Paginations
            paginate={paginate}
            productPerPage={productPerPage}
            totalProduct={productData.length}
          />
        </>
      );
    }
  }
  return (
    <>
      <div className="grid card_grid">
        {currentProducts &&
          currentProducts.map((item, index) => {
            if (index < pagenum && index == pagenum && limit != 0) return;
            return (
                <div className="box" key={index}>
                  <div className="card">
                    <Link style={{ display: "block" , height: "100%"}} to={`/products/${item.p_id}`}>
                      <img
                        className="card_image"
                        style={{ width: "100rem" }}
                        src={item.p_image}
                      />
                    </Link>
                    <div className="card_overlays">
                      <div className="card_hdr">
                        <div className="card_hdr_wrapper">
                          <h3 className="card_title">{item.p_name}</h3>
                          <p className="card_para">
                            <span className="card_price">
                              {item.p_price} đ
                            </span>
                            <span className="card_cross"></span>
                            <span className="card_off"></span>
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
      </div>
      {paginateShow()}
    </>
  );
};

export default ProductsList;
