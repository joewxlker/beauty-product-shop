import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CreateAccount from './UserAuth/Signup/CreateAccount';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useSetBool from './Hooks/setBoolean';
import Checkout from './Stripe/Checkout/Checkout'
import Canceled from './Stripe/Checkout/canceled';
import Success from './Stripe/Checkout/Success';

const Index = () => {
  
  const [currency, setCurrency] = useState('AUD');
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCart] = useState([]);
  const [price, setPrice] = useState([]);
  const [bool, setBool] = useSetBool();
  const [mobile, setIsMobile] = useState(false)

  useEffect(() => {
      if (window.innerWidth < 600) setIsMobile(true)
      if (window.innerWidth > 600) setIsMobile(false)
      window.addEventListener('resize', () => {
          if (mobile === undefined) return
          if (window.innerWidth < 600) setIsMobile(true)
          if (window.innerWidth > 600) setIsMobile(false)
      });
    console.log(mobile)
  }, [mobile]);

  useEffect(() => {
    async function fetchConfig() {
      await fetch('/config')
        .then(r => r.json())
        .then((data) => {
            setPrice(data)
        })
    }
    fetchConfig();
    console.log(price)
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleClick = (x) => {
    console.log(x)
  }
  
  const addItem = (newPrice, newQuantity) => {
    console.log(price)
  }

  const handleQuantity = (e) => {
    if (e) setQuantity(quantity + 1);
    else setQuantity(quantity - 1);

  }
  return (
    <BrowserRouter>
      <Routes>
        {price.map((price) => {
          return (
          <>
            <Route path="/" element={
                <App
                mobile={mobile}
                bool={bool}
                onToggle={setBool}
                quantity={quantity}
                formatPrice={price.price.unit_amount}
                amount={price.price.unit_amount}
                currency={price.price.currency}
                type={'main'}
                click={handleClick}
                handleQuantities={handleQuantity}
                onSubmit={handleSubmit}
                id={price.publicKey}
                cartItems={cartItems}
                updateCartItems={(item) => { setCart(prev => [...prev, item]); }}
                removeCartItem={(item) => { setCart( cartItems[item] === undefined)}}
              />
              
            } />
            
            <Route path="/checkout"
              element={
                <Checkout/>
              }
            />
          </>)})}
        <Route path="/createaccount" element={
          <CreateAccount
            bool={bool}
            onToggle={setBool}
            cartItems={cartItems}
            removeCartItem={(item) => { setCart( cartItems[item] === undefined)}}  />
        } />
        <Route path="*" element={
          <></>
          } />
        <Route path="/success" element={<Success />} />
        <Route path="/canceled" element={<Canceled />} />

      </Routes>
    </BrowserRouter>

  )
  // <App/>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
