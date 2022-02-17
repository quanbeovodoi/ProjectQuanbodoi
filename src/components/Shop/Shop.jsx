import React, { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sortCategory } from '../../Slice/ProductSortSlice';
import ProductApi from '../../Api/ProductApi';
import DataConfig from "../../config/DataConfig";
import Paginations from "../Pagination/Pagination";
import { Link } from "react-router-dom";
let arrCategory = []
const Shop_Test = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll()
      let data = productItems.data
      setProducts(data)
    }
    getProducts()

    return () => {
      setProducts([])
    }
  }, [])

  //prd list
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(pagenum);
  const [productPerPage] = useState(12);
  const productData = [];
  DataConfig(productData)
  const indexOfLastProducts = currentPage * productPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productPerPage;
  let currentProducts = productData.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateShow = () => {
    return (
      <>
        <Paginations
          paginate={paginate}
          productPerPage={productPerPage}
          totalProduct={products.length}
        />
      </>
    );
  }
  let getCategory = [
    ...new Set(products.map((val) => val.p_cate.map((item) => item)).flat()),
  ]
  // console.log()
  
  const handleValue = (e) => {
    if (e.target.checked) {
      arrCategory.push(e.target.value)
    }

    if (!e.target.checked) {
      arrCategory.splice(arrCategory.indexOf(e.target.value), 1)
    }
    // console.log(arrCategory)
    const actions = sortCategory(arrCategory)
    dispatch(actions)
  }
  const checkboxcate = () => {
    return getCategory && getCategory.map((val, index) => { 
      return (
          <div key={index}>
            <FormControlLabel
              value={val}
              control={<Checkbox />}
              onChange={handleValue}
              label={val}
            />
          </div>
        )
      }
    )
  }
  return (
    <div className="main">
      <div className="main_content">
        <div className="titlePage" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1>Cửa hàng</h1>
        </div>
        <div className="container">
          <Stack className="stack-flex" style={{ flexDirection: 'row-reverse', gap: '4rem' }} >
            <div className="sidebar">
              <div className="sidebar-box">
                <div className="sidebar-category">
                  <h3>PRODUCT Category</h3>
                  <div className='sidebar-category-container'>
                    {checkboxcate()}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <>
                <div className="grid card_grid">
                  {currentProducts &&
                    currentProducts.map((item, index) => {
                      return (
                        <div className="box" key={index}>
                          <div className="card">
                            <Link style={{ display: "block", height: "100%" }} to={`/products/${item.p_id}`}>
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
            </div>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Shop_Test