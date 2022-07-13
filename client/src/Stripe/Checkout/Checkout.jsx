import './checkout.css'
import React, { useEffect, useState } from 'react';
import Item from '../Item';
import { Link } from 'react-router-dom';

const Checkout = ({quantity,formatPrice,amount,currency, onSubmit}) => {

  return (
    <>
    <Link to='/'>Home</Link>
    <div className="sr-root">
      <Item quantity={quantity}
        formatPrice={amount}
        amount={amount}
        currency={currency}
        type={'checkout'}
        onSubmit={onSubmit}/>
        <button type='submit' action={"/create-checkout-session"} method={"POST"}>Proceed to payment</button>
      </div>
      </>
  );
};
export default Checkout;