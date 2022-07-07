import './App.css';
import Main from './MainComponents/Main'
import ShopItems from './ShopItemsComponents/ShopItems.jsx'
import Header from './HeaderComponents/Header';
import EventHeader from './Eventheadercomponents/EventHeader';
import Footer from './FooterComponents/Footer';
import { useEffect, useState } from 'react';

function App({bool, onToggle}) {
  useEffect(() => {
    console.log(bool['sidebar'])
  },[])
  return (
    <div className={'app-container-' + bool['sidebar']} >
      <Header bool={bool}
        onToggle={onToggle}/>
      <EventHeader/>
      <Main />
      <ShopItems />
      <Footer/>
    </div>
  );
}

export default App;
