import logo from './logo.svg';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart';

function App() {
    return (
      <div>
        {/* header */}
        <Header/>
        {/* header end */}
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/products" element={ <Products /> }/>
          <Route path="/products/:id" element={ <ProductDetail /> }/>
          <Route path="/cart" element={ <Cart /> }/>
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
        <Footer/>
      </div>

    );
}

export default App;
