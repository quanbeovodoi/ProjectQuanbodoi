import React, { useEffect, useState } from "react";
import ProductApi from "../Api/ProductApi";

const DataConfig = (productData, id) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
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
  // // console.log(productData)
  // let category = products["category_list"];
  console.log(products)
  if (id === undefined) {
    products &&
      products.map((item, index) => {
          productData.push(item);
      });
  } else {
    products &&
      products.map((item, index) => {
        if(item.p_id == id)
         productData.push(item);
      });
  }
};

export default DataConfig;
