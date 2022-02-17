import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductApi from "../Api/ProductApi";

const DataConfig = (productData, id) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  let sortCategory = useSelector((state) => state.sort.category);
  let newData = [];
  useEffect(() => {
    const getProducts = async () => {
      const productItems = await ProductApi.getAll();
      let data = productItems.data;
      newData = [...data]
      // setProducts(data);
      setLoading(false);
      //Filter brand
      let list = data.filter(
        (item) =>
          (!sortCategory.length ||
            sortCategory.some((ai) => item.p_cate.indexOf(ai) >= 0))
      )
      newData = [...list]
      setProducts(newData);
      // console.log(newData)
    };
    getProducts();
    // return () => {
    //   setProducts([])
    // }
  }, [sortCategory]);
  // // console.log(productData)
  // let category = products["category_list"];
  // console.log(products)
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
