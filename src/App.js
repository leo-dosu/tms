import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Whitelist from './pages/Whitelist';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import {BrowserRouter as Router, Route,  Routes, BrowserRouter, } from  'react-router-dom'; 
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Header /> 
          <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/whitelist" element={<Whitelist />}></Route>
          <Route  exact path="/contact" element={<Contact />}></Route>
          <Route  path='/productDetail' element={<ProductDetails />}></Route>
          <Route  path='/cart' element={<Cart />}></Route>
          <Route exact path="*" element={<PageNotFound />}> </Route>
          </Routes>
    </BrowserRouter>
    <Footer /> 
    </div>

  );
}

export default App;
