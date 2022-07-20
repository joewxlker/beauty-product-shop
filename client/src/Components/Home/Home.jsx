import Footer from "../FooterComponents/Footer";
import Header from "../HeaderComponents/Header";
import EventHeader from '../Eventheadercomponents/EventHeader'
import ShopItems from '../../Stripe/ShopItemsComponents/ShopItems'
import Main from '../MainComponents/Main'

const Home = ({bool,mobile,data,updateCartItems,onRemoveItem,handleQuantityChange, cartItems, items, onToggle }) => {

    
    const scrollToTop = () => {
        window.scrollTo({top: 0,
          behavior: 'smooth'})
      }
    
    return (<>
        <div className={'app-container-' + bool['sidebar']} >
      <EventHeader />
      <Main mobile={mobile} bool={bool} />
      <ShopItems
        items={items}
        data={data}
        updateCartItems={updateCartItems}/>
      <button onClick={scrollToTop} > ^ </button>
      </div>
    </>);
}

export default Home;