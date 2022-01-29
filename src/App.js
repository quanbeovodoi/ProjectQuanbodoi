import logo from "./logo.svg";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/Products/ProductDetail";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(false), 2000);
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
            <div style={{ display: "none" }}>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/products/:productID"
                  element={<ProductDetail />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
            </div>
          </>
        ) : (
          <>
            <div>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/products/:productID"
                  element={<ProductDetail />}
                />
                <Route path="/cart" element={<Cart />} />
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
