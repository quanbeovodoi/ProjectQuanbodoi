import { Stack } from '@mui/material';
import React from 'react';
import ProductCategoryFilter from './ProductCategoryFilter';
import ProductsList from './ProductsList';
let pageStart = 1;
const Products = () => {
  return (
    <div className="main">
      <div className="main_content">
        <div className="titlePage" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1>Sản Phẩm</h1>
        </div>
        <div className="container">
          <Stack className="stack-flex" style={{ flexDirection: 'row-reverse', gap: '4rem' }} >
            <div className="sidebar">
              <div className="sidebar-box">
                <ProductCategoryFilter />
              </div>
            </div>
            <div>
              <ProductsList pagenum={12} limit={false} pagestart={pageStart}/>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Products;
