import React from 'react';
import ProductsList from './ProductsList';

const Products = () => {
  return (
    <div className="main">
      <div className="main_content">
        <div className="container">
          <ProductsList pagenum={12} limit={false}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
