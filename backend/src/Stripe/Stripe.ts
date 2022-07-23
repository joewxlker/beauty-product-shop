require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});
 
const getProducts = async () => {
  return await stripe.products.retrieve('')
}
const getPrice = async () => {
  let data: Array<object> = [];
  const productData = await getProducts()
  for (let v in productData.data) {
    const priceData = await stripe.prices.retrieve(productData.data[v].default_price)
    data = [...data, { ...productData.data[v], ...priceData }]
  }
  return data
}
export const configStripe = async (input:string, bool: boolean) => {
  const allItems = await getPrice()
  if (!bool) {
    return allItems
  }
  //TODO create type for request body [{string | number},{string | number}]
  else if (bool) {
    let data: Array<object> = [];
    for (let v in allItems) {
      if (input === allItems[v].product) {
        return allItems[v]
      }  
    }
  }
}

export const checkoutSession = async (input:any) => {
  const { sessionId } = input;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return session;
}

export const createCheckoutSession = async (input: any) => {
  const domainURL = process.env.DOMAIN;
const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: input,
    success_url: `${domainURL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled.html`,
})
return {url: session.url};
};

export const createStripeAccount = async (email: string) => {
  try {
    return await stripe.customers.create({
      email: email,
    });
  }
  catch (err) {
    return err
}
}

// export const webHook = async (input: any) => {
//   let data;
//   let eventType;
//   if (process.env.STRIPE_WEBHOOK_SECRET) {
//       let event;
//       let signature = input.headers['stripe-signature'];
  
//       try {
//       event = stripe.webhooks.constructEvent(
//           input.rawBody,
//           signature,
//           process.env.STRIPE_WEBHOOK_SECRET
//       );
//       } catch (err) {
//       console.log(`Webhook signature verification failed.`);
//       return 400;
//       }
//       data = event.data;
//       eventType = event.type;
//   } else {
//       data = input.body.data;
//       eventType = input.body.type;
//   }
  
//   if (eventType === 'checkout.session.completed') {
//       console.log(`Payment received!`);
//   }
  
//   return 200;
  
//       }

