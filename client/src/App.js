import './App.css';
import Main from './Components/MainComponents/Main'
import ShopItems from './Stripe/ShopItemsComponents/ShopItems.jsx'
import Header from './Components/HeaderComponents/Header';
import EventHeader from './Components/Eventheadercomponents/EventHeader';
import Footer from './Components/FooterComponents/Footer';

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
