import { Button, Icon } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, setTotalPrice } from "../../Slice/CartSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToWishList } from '../../Slice/WishListSlice'
import { useSnackbar } from "notistack";


function ProductDetailAction(props) {
  const [addWish, setAddWish] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const { product } = props;
  let { productID } = useParams();
  
  const dispatch = useDispatch();

  const enque = (message, status) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      autoHideDuration: 2000,
      variant: status,
      // TransitionComponent: Grow,
    })
  }
  const handleClickWishList = () => {
    if (product.length !== 0) {
      const itemData = {
        product: product,
        id: productID,
        quantity: 1,
      }
      // console.log(itemData)
      const actionWishList = addToWishList(itemData)
      dispatch(actionWishList)
      enque('Successfully add item in wishlist.', 'success')
      setAddWish(!addWish)
    }
  }

  const handleAddCart = () => {
    if (product !== null) {
      const itemData = {
        product: product,
        id: productID,
        quantity: 1,
      };
      const actionAddToCart = addToCart(itemData);
      dispatch(actionAddToCart);
      const actionTotalPrice = setTotalPrice();
      dispatch(actionTotalPrice);
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
      console.log(cartItems[0])
      //   enque('Add item in Cart', 'success')
      // const actionPrice = setTotalPrice()
      // dispatch(actionPrice)
    }
  };

  return (
    <div>
      <div className="card_action">
        <Button
          onClick={handleAddCart}
          variant="contained"
          style={{
            fontSize:"0.7rem",
            padding: "0.5rem",
            gap: "0.5rem",
            background: "#000",
          }}
        >
          Thêm vào giỏ <Icon sx={{ color: red[500] }}>add_circle</Icon>
        </Button>
        <Button
        onClick={handleClickWishList}
          variant="contained"
          style={{
            fontSize:"0.7rem",
            padding: "0.5rem",
            gap: "0.5rem",
            background: "#000",
          }}
          sx={{ color: red[500] }}
          aria-label="add to wishlist"
        >
          Yêu thích <FavoriteIcon />
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailAction;
