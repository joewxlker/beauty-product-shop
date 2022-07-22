import './App.css';
import { useEffect, useState } from 'react';
import { getData } from './Services/sendData';
import { getLocalData, setLocalData } from './Services/handleLocalData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccount from './UserAuth/Signup/CreateAccount';
import Checkout from './Stripe/Checkout/Checkout';
import ProductsOne from './Components/ProductPages/ProductsMain';
import About from './Components/OtherComponents/About.jsx';
import Shipping from './Components/OtherComponents/Shipping.jsx';
import Careers from './Components/OtherComponents/Careers.jsx';
import useSetBool from './Hooks/setBoolean';
import Success from './Stripe/Checkout/Success';
import Canceled from './Stripe/Checkout/canceled';
import Home from './Components/Home/Home'
import Header from './Components/HeaderComponents/Header';
import Footer from './Components/FooterComponents/Footer';
import SuccessLogin from './UserAuth/Signup/SuccessLogin';
import EmptyRedirect from './Stripe/Checkout/Empty';

function App() {

  const [price, setPrice] = useState([]);
  const [data, setData] = useState([])
  const [cartItems, setCart] = useState([]);
  const [bool, setBool] = useSetBool();
  const [mobile, setIsMobile] = useState(false)
  const [loggedStatus, setLoggedInStatus] = useState(false);

  useEffect(() => {
    getLocalData('userInfo').then((data) => {
      if (data !== null) { setLoggedInStatus(true) }
      console.log(loggedStatus)
    })
}, [loggedStatus, setLoggedInStatus])

  useEffect(() => {
      if (window.innerWidth < 600) setIsMobile(true)
      if (window.innerWidth > 600) setIsMobile(false)
    window.addEventListener('resize', resize);
    window.removeEventListener('resize', resize());
  }, [mobile, setIsMobile]);

  const resize = () => {
    if (mobile === undefined) return
    if (window.innerWidth < 600) setIsMobile(true)
    if (window.innerWidth > 600) setIsMobile(false)
  }

  useEffect(() => {
    getLocalData('cart').then((data) => {
      if (data === null) {
        setData([]);
        setCart([]);
        return
      }
      setData(data);
      setCart(data);
    })
    async function fetchConfig() {
      await getData('config').then((data) => {
        setPrice(data);
      })
    }
    fetchConfig()
  }, [])

  useEffect(() => {
    if (cartItems.length === 0) return
      setLocalData('cart', cartItems)
      setData(getLocalData('cart'))
  }, [cartItems, setCart])



  const removeItem = (item) => {
    for (let v in cartItems) {
      if (cartItems[v].id === item) {
        if (cartItems.length === 1) {
          setCart([]);
          setLocalData('cart', [])
          break;
        }
        else {
          let index = cartItems.indexOf(cartItems[v])
          setCart(...[cartItems.splice(--index, 1)])
          break;
        }
      }
    }
  }

  const addItem = (item) => {
    for (let v in cartItems) { if (cartItems[v].id === item.id) return }
    if (Object.keys(cartItems).length > 1) return setCart(item)
    setCart(prev => [...prev, item])
  }

  const handleQuantity = (count, id) => {
    let newValue = [];
    for (let v in cartItems) {
      if (cartItems[v].id !== id) {
        newValue.push(cartItems[v]);
      }
      if (cartItems[v].id === id) {
        newValue.push({...cartItems[v], amount: count});
      }
    }
    setCart(newValue);
  }

  return (
    <>
      
      <BrowserRouter>
        <Header
          setLoggedIn={(boolean) => { console.log(boolean); setLoggedInStatus(boolean)}}
          bool={bool}
          mobile={mobile}
          data={data}
          onRemoveItem={removeItem}
          onToggle={setBool}
          handleQuantityChange={handleQuantity}
          cartItems={cartItems}
          items={price}
          updateCartItems={addItem}
          loggedStatus={loggedStatus}
              />
        <Routes>

          <Route path='/' element={
            <Home bool={bool}
              mobile={mobile}
              data={data}
              onRemoveItem={removeItem}
              onToggle={setBool}
              handleQuantityChange={handleQuantity}
              cartItems={cartItems}
              items={price}
              updateCartItems={addItem}
              loggedStatus={loggedStatus}/>
          } />
          
          <Route path="/checkout" element={
            <Checkout
              onRemoveItem={removeItem}
              handleQuantityChange={handleQuantity}
              loggedStatus={loggedStatus}/>
          } />

          <Route path="/createaccount" element={
            <CreateAccount/>
          } />

          <Route path="/successlogin" element={<SuccessLogin
            setLoggedIn={(boolean) => { console.log(boolean); setLoggedInStatus(boolean) }}
          />} />
          <Route path="/emptyredirect" element={<EmptyRedirect/>}/>

          <Route path='/products' element={
            <>
              <ProductsOne bool={bool}
                mobile={mobile}
                data={data}
                onRemoveItem={removeItem}
                onToggle={setBool}
                handleQuantityChange={handleQuantity}
                cartItems={cartItems}
                items={price}
                updateCartItems={addItem}
                loggedStatus={loggedStatus}/>
            </>
          } />

          <Route path='/about' element={
            <>

              <About  />
            </>
          } />

          <Route path='/careers' element={
            <>
              <Careers />
            </>
          } />

          {/* <Route path='/shipping' element={
            <>
              <Shipping  />
            </>
          } /> */}

          <Route path="*" element={<></>} />

          <Route path="/success" element={
            <Success />
          } />

          <Route path="/canceled" element={
            <Canceled />
          } />

        </Routes>
        <Footer />
        <div className={'hide-window-' + bool['sidebar']} />
        <button className='go-to-top' onClick={e=> {e.preventDefault(); window.scrollTo(0,0)}} ><i class="fak fa-chevrons-right-duotone"></i></button>
      </BrowserRouter>
    </>
  );
}

export default App;
