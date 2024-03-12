import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './auth/Login';
import Contact from './pages/Contact';
import Whitelist from './pages/Whitelist';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './pages/PageNotFound';
import {BrowserRouter as Router, Route,  Routes, BrowserRouter, } from  'react-router-dom'; 
import Compare from './pages/Compare';
import Account from './pages/Account';

function App() {
  return (
    <div className="App">
    

    <BrowserRouter>
    <Header />
          <Routes> 
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/wishlist" element={<Whitelist />}></Route>
          <Route  exact path="/contact" element={<Contact />}></Route>
          <Route  path='/productDetail' element={<ProductDetails />}></Route>
          <Route  path='/cart' element={<Cart />}></Route>
          <Route exact path='/compare' element={<Compare />}></Route>
          <Route exact path='/account' element={<Account />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path="*" element={<PageNotFound />}> </Route>
          </Routes>
    <Footer /> 
    </BrowserRouter>


    </div>

  );
}

export default App;
