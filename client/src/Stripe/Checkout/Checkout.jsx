import './checkout.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocalData } from '../../Services/handleLocalData';
import { formatPrice } from '../../Services/formatPrice';
import { getData, sendData } from '../../Services/sendData';

const Checkout = () => {
  
  const [data, setData] = useState()
  const [dataSet, setDataSet] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const init = async () => {
    getLocalData('cart').then(async(callData) => {
      setData(callData);
      await sendData('config', callData).then((data) => setDataSet(data));
      let sum = 0;
      for (let v in data) {
        const product = callData[v].unit_amount * callData[v].amount
        sum += product;
      }
      setTotal(sum);
    })
    }
    init();
  }, [])
    
  const sendBuyRequest = (e) => {
    e.preventDefault();
    let arr = []
    for (let v in data) {
        const { id } = dataSet[v]
        const {amount} = data[v]
      arr.push({ price: id, quantity: amount })
      console.log(arr)

    }
    sendData('create-checkout-session', arr).then((data) => window.location.href = data.url)
  }
  
  if(data === undefined) return
  return (
    <>
      
      <Link to='/'>Home</Link>
      {data.map(({ images, id, unit_amount, amount, name }) => {
        return (
            <div className="sr-root">
              <img src={images} height={'100px'} width={'100px'} />
              <h1>{name}</h1>
              <p><strong>Quantity {amount}</strong></p>
            <p>{unit_amount} x {amount} = {unit_amount * amount}</p>

            </div>
        )
      })}
        <p>Total: ${total}</p>
      <button onClick={sendBuyRequest}>Proceed to payment</button>
    </>
  )
};
export default Checkout;