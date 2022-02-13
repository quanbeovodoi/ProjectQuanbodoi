import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderCart from "./HeaderCart";
import HeaderMobile from "./HeaderMobile";
import HeaderWishList from "./HeaderWishList";

export const Header = () => {
  const [Open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header_wrap">
        <div className="container flex items-center justify-between">
          {/* logo */}
          <Link to="/">
            <img className="img-logo" src="/image/logo.png" />
          </Link>
          {/* end logo */}
          {/* menu */}
          <div className="menu">
            <div className="container flex justify-between menu_links">
              <div className="menu_item">
                <Link to="/">Trang chủ</Link>
              </div>
              <div className="menu_item">
                <a href="#">Thể loại</a>
              </div>
              <div className="menu_item">
                <a href="#">Blogs</a>
                <ul className="sub_menu hidden">
                  <li>
                    <Link to="/products/1">Tin tuc</Link>
                  </li>
                </ul>
              </div>
              <div className="menu_item">
                <Link to="/products">Sản phẩm</Link>
              </div>
              <div className="menu_item">
                <a href="#">Giới thiệu</a>
              </div>
            </div>
          </div>
          {/* end menu */}
          {/* search */}
          <div className="search">
            <form method="get">
              <input
                type="text"
                className="search_input rounded_sm"
                placeholder="Tìm kiếm..."
                name="keyword"
              />
              <button className="search_icon" type="submit">
                <svg
                  className="search_img w_icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
          {/* end search */}
          {/* icons */}
          <div className="flex icons space-flex">
            <HeaderWishList />
            <HeaderCart />
            <Link className="icon_link transition" to="/login">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <div className="icon_title">Account</div>
            </Link>
            <div className="menu_show" onClick={() => setOpen(!Open)}>
              <div className="menu_icon" id="humber">
                <div className="menu_humber" />
              </div>
            </div>
          </div>
          {/* end icons */}
        </div>
        <div className="container search_mobile">
          <form method="get">
            <input
              type="text"
              className="search_input rounded_sm"
              placeholder="Tìm kiếm..."
              name="keyword"
            />
            <button className="search_icon" type="submit">
              <svg
                className="search_img w_icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      {/* menu mobile */}
      {Open && <HeaderMobile index={"0"} isOpen={Open} />}
      {/* end menu mobile */}
    </header>
  );
};
