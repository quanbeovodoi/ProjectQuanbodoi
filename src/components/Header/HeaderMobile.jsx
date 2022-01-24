import React, { useState } from "react";

const HeaderMobile = (...params) => {
  const { index,...props } = params;
  const [hidden, setHidden] = useState(true);
  const [Open,setOpen] = useState(false);
  // console.log(props);
  if(props[0].isOpen == true && index=='0'){
    setHidden(!hidden);
    index='1';
  }
  return (
    <div>
      <div id="menu_mobile" className={!hidden ? 'menu_mobile': 'menu_mobile active'}>
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
          <li className="menu_item_mobile submenu_click" onClick={()=>setOpen(!Open)}>
            <a>Cửa hàng</a>
            {Open && (
              <ul className="sub_menu_mobile">
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
            )}
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
