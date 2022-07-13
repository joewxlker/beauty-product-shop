import './App.css';
import Main from './Components/MainComponents/Main'
import ShopItems from './Stripe/ShopItemsComponents/ShopItems.jsx'
import Header from './Components/HeaderComponents/Header';
import EventHeader from './Components/Eventheadercomponents/EventHeader';
import Footer from './Components/FooterComponents/Footer';

function App({bool, onToggle, quantity, amount, currency, onSubmit, type, action, method, click, handleQuantities, id, addItems, price, items, cartItems, updateCartItems, removeCartItem, mobile }) {
  return (
    <div className={'app-container-' + bool['sidebar']} >
      <Header bool={bool}
        onToggle={onToggle}
        quantity={quantity}
        formatPrice={amount}
        amount={amount}
        currency={currency}
        type={type}
        click={click}
        handleQuantities={handleQuantities}
        onSubmit={onSubmit}
        action={action}
        method={method}
        items={items}
        cartItems={cartItems}
        id={id}
        removeCartItem={removeCartItem}
        mobile={mobile}
      />
      <EventHeader />
      <Main mobile={mobile} bool={bool} />
      <ShopItems
        quantity={quantity}
        formatPrice={amount}
        amount={amount}
        currency={currency}
        type={type}
        click={click}
        handleQuantities={handleQuantities}
        onSubmit={onSubmit}
        action={action}
        method={method}
        addItems={addItems}
        id={id}
        cartItems={cartItems}
        updateCartItems={updateCartItems}
        mobile={mobile} />
      
      
      <Footer />
    </div>
  );
}

export default App;
