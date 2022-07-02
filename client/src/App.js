import './App.css';
import Main from './MainComponents/Main.jsx'
import ShopItems from './ShopItemsComponents/ShopItems.jsx'
import Header from './HeaderComponents/Header';
import EventHeader from './Eventheadercomponents/EventHeader';
import Footer from './FooterComponents/Footer';

function App() {
  return (
    <>
      <Header />
      <EventHeader/>
      <Main />
      <ShopItems />
      <Footer/>
    </>
  );
}

export default App;
