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
    
  }, [mobile]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <App
              mobile={mobile}
              bool={bool}
              onToggle={setBool} />
          } />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/createaccount" element={
            <CreateAccount
              bool={bool}
              onToggle={setBool}/>
          } />
          <Route path="*" element={<></>} />
          <Route path="/success" element={<Success />} />
          <Route path="/canceled" element={<Canceled />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
