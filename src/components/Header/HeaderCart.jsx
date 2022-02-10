import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

function HeaderCart() {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const quantity = cartItems.length
    return (
        <div>
            <Link className="icon_link transition" to={'/cart'}>
                <svg
                className="w_icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
                </svg>
                <div className="icon_title">Cart</div>
                <span className="icon_number flex -right-3">{quantity ? quantity : '0'}</span>
            </Link>
        </div>
    );
}

export default HeaderCart;
