import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="header_wrap">
        <div className="container flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img className="img-logo" src="image/logo.png" />
          </a>
          {/* end logo */}
          {/* menu */}
          <div className="menu">
            <div className="container flex justify-between menu_links">
              <div className="menu_item">
                <a href="#">Trang chủ</a>
              </div>
              <div className="menu_item">
                <a href="#">Đồ nam</a>
              </div>
              <div className="menu_item">
                <a href="#">Đồ nữ</a>
              </div>
              <div className="menu_item">
                <a>Cửa hàng</a>
                <ul className="sub_menu hidden">
                  <li>
                    <a href="#">Áo Khoác</a>
                  </li>
                  <li>
                    <a href="#">Áo Dài</a>
                  </li>
                  <li>
                    <a href="#">Quần bò</a>
                  </li>
                  <li>
                    <a href="#">Tất chân</a>
                  </li>
                </ul>
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
            <a className="icon_link transition" href="#">
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
              <span className="icon_number flex">8</span>
            </a>
            <a className="icon_link transition" href="#">
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
              <span className="icon_number flex -right-3">8</span>
            </a>
            <a className="icon_link transition" href="#">
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
              <span className="icon_number flex">8</span>
            </a>
            <div className="menu_show">
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
              placeholder="Tìm tên phim, diễn viên..."
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
      <div id="menu_mobile" className="menu_mobile">
        <ul>
          <li className="menu_item_mobile">
            <a href="#">Trang chủ</a>
          </li>
          <li className="menu_item_mobile">
            <a href="#">Đồ nam</a>
          </li>
          <li className="menu_item_mobile">
            <a href="#">Đồ nữ</a>
          </li>
          <li className="menu_item_mobile submenu_click">
            <a>Cửa hàng</a>
            <ul className="sub_menu_mobile hidden">
              <li>
                <a href="#">Phim hành động</a>
              </li>
              <li>
                <a href="#">Phim cổ trang</a>
              </li>
              <li>
                <a href="#">Phim tình cảm</a>
              </li>
              <li>
                <a href="#">Phim hài</a>
              </li>
            </ul>
          </li>
          <li className="menu_item_mobile">
            <a href="#">Giới thiệu</a>
          </li>
        </ul>
      </div>
      {/* end menu mobile */}
    </header>
  );
};
