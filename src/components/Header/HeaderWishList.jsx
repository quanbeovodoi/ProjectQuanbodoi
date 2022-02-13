import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HeaderWishList = () => {
    const wishListItems = useSelector((state) => state.wishlist.wishListItems)
    let countWishList = wishListItems.length
    return (
        <Link className="icon_link transition" to="/wishlist">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
            <div className="icon_title">Wish List</div>
            <span className="icon_number flex">{countWishList ? countWishList : '0'}</span>
        </Link>
    )
}

export default HeaderWishList