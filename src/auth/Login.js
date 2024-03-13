import React, { useState } from 'react'
import { signUpWithEmailAndPassword } from '../firebase';
import {  signInWithEmailAndPassword } from "../firebase";
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';


function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    // await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((UserCredetial) => {console.log(UserCredetial); } )
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log('Logged in successfully');
      navigate('/account');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      await signUpWithEmailAndPassword( signupEmail, signupPassword);
      console.log('User signed up successfully');
      navigate('/account');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
<main className="main__content_wrapper">
  {/* Start breadcrumb section */}
  <div className="breadcrumb__section breadcrumb__bg">
    <div className="container">
      <div className="row row-cols-1">
        <div className="col">
          <div className="breadcrumb__content text-center">
            <ul className="breadcrumb__content--menu d-flex justify-content-center">
              <li className="breadcrumb__content--menu__items"><a href="index.html">Home</a></li>
              <li className="breadcrumb__content--menu__items"><span>Account Page</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End breadcrumb section */}
  {/* Start login section  */}
  <div className="login__section section--padding">
    <div className="container">
    <form onSubmit={(e) => e.preventDefault()}>
    <div className="login__section--inner">
      <div className="row row-cols-md-2 row-cols-1">
        <div className="col">
          <div className="account__login">
            <div className="account__login--header mb-25">
              <h2 className="account__login--header__title mb-15">Login</h2>
              <p className="account__login--header__desc">Login if you are a returning customer.</p>
            </div>
            <div className="account__login--inner">
              <label>
                <input className="account__login--input" placeholder="Email Address" type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              </label>
              <label>
                <input className="account__login--input" placeholder="Password" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              </label>
              <button className="account__login--btn primary__btn" type="submit" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="account__login register">
            <div className="account__login--header mb-25">
              <h2 className="account__login--header__title mb-15">Create an Account</h2>
              <p className="account__login--header__desc">Register here if you are a new customer</p>
            </div>
            <div className="account__login--inner">
              <label>
                <input className="account__login--input" placeholder="Username" type="text" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />
              </label>
              <label>
                <input className="account__login--input" placeholder="Email Address" type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
              </label>
              <label>
                <input className="account__login--input" placeholder="Password" type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
              </label>
              <label>
                <input className="account__login--input" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </label>
              <button className="account__login--btn primary__btn mb-10" type="submit" onClick={handleSignup}>Submit & Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {error && <p>{error}</p>}
  </form>
    </div>     
  </div>
  {/* End login section  */}
  {/* Start feature section */}
  <section className="feature__section section--padding pt-0">
    <div className="container">
      <div className="feature__inner d-flex justify-content-between">
        <div className="feature__items d-flex align-items-center">
          <div className="feature__icon">  
            <img src="assets/img/other/feature1.webp" alt="img" />
          </div>
          <div className="feature__content">
            <h2 className="feature__content--title h3">Free Shipping</h2>
            <p className="feature__content--desc">Free shipping over $100</p>
          </div>
        </div>
        <div className="feature__items d-flex align-items-center">
          <div className="feature__icon ">  
            <img src="assets/img/other/feature2.webp" alt="img" />
          </div>
          <div className="feature__content">
            <h2 className="feature__content--title h3">Support 24/7</h2>
            <p className="feature__content--desc">Contact us 24 hours a day</p>
          </div>
        </div>
        <div className="feature__items d-flex align-items-center">
          <div className="feature__icon">  
            <img src="assets/img/other/feature3.webp" alt="img" />
          </div>
          <div className="feature__content">
            <h2 className="feature__content--title h3">100% Money Back</h2>
            <p className="feature__content--desc">You have 30 days to Return</p>
          </div>
        </div>
        <div className="feature__items d-flex align-items-center">
          <div className="feature__icon">  
            <img src="assets/img/other/feature4.webp" alt="img" />
          </div>
          <div className="feature__content">
            <h2 className="feature__content--title h3">Payment Secure</h2>
            <p className="feature__content--desc">We ensure secure payment</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End feature section */}
</main>


    </>
  )
}

export default Login