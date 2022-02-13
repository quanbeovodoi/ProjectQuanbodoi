import logo from "./logo.svg";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/Products/ProductDetail";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import WishList from "./components/WishList/WishList";

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div>
      <>
        {show ? (
          <>
            <div id="spinner" className="spin">
              <div className="loading"></div>
            </div>
          </>
        ) : (
          <>
            <div>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/products/:productID"
                  element={<ProductDetail />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default App;
