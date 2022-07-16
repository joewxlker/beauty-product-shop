import './checkout.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocalData } from '../../Services/handleLocalData';

const Checkout = () => {
  
  const [data, setData] = useState()
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getLocalData('cart').then((data) => {
      setData(data);
      let sum = 0;
      for (let v in data) {
        const product = data[v].unit_amount * data[v].amount
        sum += product;
      }
      setTotal(sum);
    })
  }, [])

    
  
  if(data === undefined) return
  return (
    <>
      
      <Link to='/'>Home</Link>
      {data.map(({ images, id, unit_amount, amount }) => {
        return (
            <div className="sr-root">
              <img src={images} height={'100px'} width={'100px'} />
              <h1>{id}</h1>
              <p><strong>Quantity {amount}</strong></p>
            <p>{unit_amount} x {amount} = {unit_amount * amount}</p>

            </div>
        )
      })}
        <p>Total: ${total}</p>
      <button type='submit' action={"/create-checkout-session"} method={"POST"}>Proceed to payment</button>
    </>
  )
};
export default Checkout;