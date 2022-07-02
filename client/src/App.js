import './App.css';
import Main from './MainComponents/Main.jsx'
import ShopItems from './ShopItemsComponents/ShopItems.jsx'
import Header from './HeaderComponents/Header';
import EventHeader from './Eventheadercomponents/EventHeader';
import Footer from './FooterComponents/Footer';
import useSetBool from './Hooks/setBoolean';

function App() {
  const [bool, setBool] = useSetBool();

  return (
    <div className={'app-container-' + bool['sidebar']} onLoad={e => { e.preventDefault(); setBool('sidebar',false)}}>
      <Header bool={bool} onToggle={setBool} />
      <EventHeader/>
      <Main />
      <ShopItems />
      <Footer/>
    </div>
  );
}

export default App;
