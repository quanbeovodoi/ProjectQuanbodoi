import React from "react";

const HeaderMobile = () => {
  return (
    <div>
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
                <a href="#">Áo khoác</a>
              </li>
              <li>
                <a href="#">Áo dài</a>
              </li>
              <li>
                <a href="#">Quần bò</a>
              </li>
              <li>
                <a href="#">Tất chân</a>
              </li>
            </ul>
          </li>
          <li className="menu_item_mobile">
            <a href="#">Giới thiệu</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
