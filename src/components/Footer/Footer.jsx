import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="grid footer_grid">
          <div className="col col_1">
                <img src="/image/logo.png" width={100 + "%"} />
          </div>
          <div className="col col_2">
            <ul>
              <li className="title">SHOP</li>
              <li>
                <a href="">Đồ Nam</a>
              </li>
              <li>
                <a href="">Đồ Nữ</a>
              </li>
              <li>
                <a href="">Giới thiệu</a>
              </li>
            </ul>
          </div>
          <div className="col col_3">
            <ul>
              <li className="title">
                <a href="">Tài khoản</a>
              </li>
              <li>
                <a href="">Đăng nhập</a>
              </li>
              <li>
                <a href="">Đăng ký</a>
              </li>
              <li>
                <a href="">Yêu thích</a>
              </li>
            </ul>
          </div>
          <div className="col col_4">
            <ul>
              <li>Đây là website được làm bởi Nguyễn Hoàng Quân</li>
              <li>
                <a className="iconLinks" href="">
                  Gmail
                </a>
                <a className="iconLinks" href="">
                  Facebook
                </a>
                <a className="iconLinks" href="">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
