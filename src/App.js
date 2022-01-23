import logo from './logo.svg';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
    return (
      <div>
        {/* header */}
        <Header/>
        {/* header end */}
        <Home/>
        <Footer/>
      </div>

    );
}

export default App;
