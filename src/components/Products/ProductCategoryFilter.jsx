import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ProductApi from '../../Api/ProductApi'
import { sortCategory } from '../../Slice/ProductSortSlice'
import { pageStart } from './Products'

const ProductCategoryFilter = (props) => {
    let arrCategory = []

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
  
    // console.log(arrCategory)
  
    return (
      <div className="sidebar-category">
        <h3>PRODUCT Category</h3>
        <div className='sidebar-category-container'>
        {getCategory &&
          getCategory.map((val, index) => {
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
          })}
          </div>
      </div>
    )
}

export default ProductCategoryFilter