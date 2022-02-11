import React from 'react';
import ProductsList from './ProductsList';

const Products = () => {
  return (
    <div className="main">
      <div className="main_content">
        <div className="titlePage" style={{backgroundImage:'url(https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg)',backgroundRepeat:'no-repeat',backgroundSize: 'cover',backgroundPosition:'center'}}>
          <h1>Sản Phẩm</h1>
        </div>
        <div className="container">
          <ProductsList pagenum={12} limit={false}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
