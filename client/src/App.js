import './App.css';
import Main from './Components/MainComponents/Main'
import ShopItems from './Components/ShopItemsComponents/ShopItems.jsx'
import Header from './Components/HeaderComponents/Header';
import EventHeader from './Components/Eventheadercomponents/EventHeader';
import Footer from './Components/FooterComponents/Footer';
import { useEffect, useState } from 'react';

function App({bool, onToggle}) {

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
