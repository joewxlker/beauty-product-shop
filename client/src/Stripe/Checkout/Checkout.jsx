import './checkout.css'
import React, { useEffect, useState } from 'react';
import { getLocalData } from '../../Services/handleLocalData';
import { sendData } from '../../Services/sendData';
import CreateForm from '../../UserAuth/Signup/CreateForm';

const Checkout = ({onRemoveItem, handleQuantityChange}) => {
  
  const [data, setData] = useState()
  const [dataSet, setDataSet] = useState();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState();

  const types = ['street', 'city', 'state', 'postal code'] 
  const props = [];

  useEffect(() => {
    setLoading(false)
  }, [])
  useEffect(() => {
    init();
  }, [onRemoveItem, handleQuantityChange])
    
  const init = async () => {
    getLocalData('cart').then(async(callData) => {
      setData(callData);
      await sendData('config', callData).then((data) => setDataSet(data));
      let sum = 0;
      for (let v in data) {
        const product = callData[v].unit_amount * callData[v].amount
        sum += product;
      }
      setTotal(sum/100);
    })
    console.log(dataSet)
    if (data === undefined) return;
    if (data.length < 1) { return window.location.href = '/emptyredirect' };
    }
  const sendBuyRequest = (e) => {
    e.preventDefault();
    if(data.length < 1){ return window.location.href = '/emptyredirect'}
    setLoading(true);
    let arr = []
    for (let v in data) {
      const { id } = dataSet[v]
      const { amount } = data[v]
      arr.push({ price: id, quantity: amount })
      console.log(arr)

    }
    sendData('create-checkout-session', arr)
      .then((data) => {
        window.location.href = data.url
      })
  }
  
  if(data === undefined) return
  return (
    <div className='checkout-main-container'>
      <div className='checkout-items-container'>
        {data.map(({ images, id, unit_amount, amount, name }) => {
          return (
            <div className="sr-root">
              <img src={images} height={'100px'} width={'100px'} />
              <h1>{name}</h1>
              <p><strong>Quantity {amount}</strong></p>
              <p>${unit_amount/100} x {amount} = ${(unit_amount/100) * amount}</p>

            </div>
          )
        })}
        <p>Total: ${total}</p>
      </div>
      <div className='checkout-side-container'>
        <CreateForm
          types={types}
          props={props}
          origin={'checkout'}
        />
        {/**TODO, fix infinite load when proceed clicked before data can load */}
        <p>TODO, implement order tracking and create middleware to handle user input</p>
        {!loading && <button className='payment-button' onClick={sendBuyRequest}><span className='spinner-span'><p>Proceed to payment</p></span></button>}
        {loading && <button className='payment-button' disabled><span className='spinner-span'><p>Proceed to payment</p><i class="fak fa-circle-notch-thin"></i></span></button>}
      </div>
    </div>
  )
};
export default Checkout;