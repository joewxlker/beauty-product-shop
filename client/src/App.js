import './App.css';
import Main from './Components/MainComponents/Main'
import ShopItems from './Stripe/ShopItemsComponents/ShopItems.jsx'
import Header from './Components/HeaderComponents/Header';
import EventHeader from './Components/Eventheadercomponents/EventHeader';
import Footer from './Components/FooterComponents/Footer';
import { useEffect, useState } from 'react';
import { getData } from './Services/sendData';
import { getLocalData, setLocalData } from './Services/handleLocalData';

function App({ bool, onToggle, mobile }) {

  const [price, setPrice] = useState([]);
  const [data, setData] = useState([])
  const [cartItems, setCart] = useState([]);

  useEffect(() => {
    getLocalData('cart').then((data) => {
      if (data === null) {
        setData([]);
        setCart([]);
        return
      }
      console.log(data)
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
    console.log('settingCart')
      setLocalData('cart', cartItems)
      setData(getLocalData('cart'))
  }, [cartItems, setCart])

  const scrollToTop = () => {
    window.scrollTo({top: 0,
      behavior: 'smooth'})
  }

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
    <div className={'app-container-' + bool['sidebar']} >
      <Header
        bool={bool}
        mobile={mobile}
        onToggle={onToggle}
        data={data}
        onRemoveItem={removeItem}
        handleQuantityChange={handleQuantity}
        cartItems={cartItems}
      />
      <EventHeader />
      <Main mobile={mobile} bool={bool} />
      <ShopItems
        items={price}
        data={data}
        updateCartItems={addItem}/>
      <Footer />
      <button onClick={scrollToTop} > ^ </button>
    </div>
  );
}

export default App;
