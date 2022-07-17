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
        console.log(data)
        for (let v in data.items.data) {
          setPrice(prev => [...prev, { ...data[0].data.items.data[v], ...data.price.data[v] }]);
        }     
      })
    }
    fetchConfig()
  }, [])

  useEffect(() => {
    if(cartItems.length === 0) return
    console.log(cartItems, localStorage)
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
          console.log('shift')
          setCart([]);
          setLocalData('cart', [])
        }
        else {
          console.log('splice')
          setCart([...cartItems.splice(cartItems.indexOf(cartItems[v]), 1)])
          setLocalData('cart', cartItems)
        }
      }
    }
  }
  const addItem = (item) => {
    for (let v in cartItems) { if (cartItems[v].id === item.id) return }
    if (Object.keys(cartItems).length > 1) { console.log('keys = obj'); return setCart(item)}
    setCart(prev => [...prev, item])
  }
  const handleQuantity = (count, id) => {
    console.log(count, id)
    let allItems = [];
    let updatedValue;
    for (let v in cartItems) {
      if (cartItems[v].id !== id) {
      allItems.push(cartItems[v])}
      if (cartItems[v].id === id) {
        updatedValue = [{...cartItems[v], ...{ amount: count }}];
      }
      const newCart = [...allItems, ...updatedValue];
      setLocalData('cart', newCart)
    }
    
    
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
