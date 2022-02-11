import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  deCreaseQuantity,
  inCreaseQuantity,
  removeItemCart,
  setTotalPrice,
} from "../../Slice/CartSlice";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Cart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const handleIncrease = (id, quantity) => {
    const option = { id, quantity };
    const actionIncrease = inCreaseQuantity(option);
    dispatch(actionIncrease);
    const actionTotalPrice = setTotalPrice();
    dispatch(actionTotalPrice);
  };

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      const option = { id, quantity };
      const actionDecrease = deCreaseQuantity(option);
      dispatch(actionDecrease);
      const actionTotalPrice = setTotalPrice();
      dispatch(actionTotalPrice);
    }
  };

  const handleDelete = (id) => {
    const actionDelete = removeItemCart(id);
    dispatch(actionDelete);
    const actionTotalPrice = setTotalPrice();
    dispatch(actionTotalPrice);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  Number.prototype.format = function (n, x, s, c) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\D" : "$") + ")",
      num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace(".", c) : num).replace(
      new RegExp(re, "g"),
      "$&" + (s || ",")
    );
  };
  const priceText = (price) => {
    return price.format(2, 3, '.', ',');
  };
  return (
    <div className="cart">
      <div className="container">
        {cartItems.length !== 0 ? (
          <div>
            <div className="cart-table">
              <table>
                <thead>
                  <tr>
                    <th>Images</th>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length !== 0
                    ? cartItems.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <Link
                                to={`
                            /details/${item.id}
                          `}
                              >
                                <img src={item.product.p_image} alt="" />
                              </Link>
                            </td>
                            <td>
                              <Link
                                to={`
                            /details/${item.id}
                          `}
                              >
                                {item.product.p_name}
                              </Link>
                            </td>
                            <td>
                              <span>{item.product.p_price} đ</span>
                            </td>
                            <td>
                              <div className="cart-func">
                                <p>{item.quantity}</p>
                                <div
                                  className="cart-func__decrease"
                                  onClick={() =>
                                    handleDecrease(item.id, item.quantity)
                                  }
                                >
                                  -
                                </div>
                                <div
                                  className="cart-func__increase"
                                  onClick={() =>
                                    handleIncrease(item.id, item.quantity)
                                  }
                                >
                                  +
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>
                                {parseInt(item.product.p_price) * item.quantity}{" "}
                                đ
                              </span>
                            </td>
                            <td>
                              <div
                                className="cart-remove"
                                onClick={() => handleDelete(item.id)}
                              >
                                <FaRegTrashAlt />
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
            <div className="cart-coupon">
              <div className="cart-coupon__coupon">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="Coupon code"
                    {...register("coupon", { required: true })}
                  />
                  <button className="btn" type="submit">
                    Apply coupon
                  </button>
                </form>
              </div>
              <div className="cart-coupon__coupon2">
                {/* <Link className="btn" to="/checkout">
                  Submit
                </Link> */}
              </div>
            </div>
            <div className="cart-checkout">
              <h2>Cart Totals</h2>
              <ul>
                <li>
                  Subtotal
                  <span>{priceText(totalPrice)} đ</span>
                </li>
                <li>
                  Total
                  <span> {priceText(totalPrice)} đ</span>
                </li>
              </ul>
              <Link className="btn" to="/checkout">
                Proceed to checkout
              </Link>
            </div>
          </div>
        ) : (
          <h2 className="pro-nof">No Product Found</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
