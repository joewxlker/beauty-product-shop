import { arrayBuffer } from "stream/consumers";

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
  console.log(input);
// Create new Checkout Session for the order
// Other optional params include:
// [billing_address_collection] - to display billing address details on the page
// [customer] - if you have an existing Stripe Customer ID
// [customer_email] - lets you prefill the email input in the Checkout page
// [automatic_tax] - to automatically calculate sales tax, VAT and GST in the checkout page
// For full details see https://stripe.com/docs/api/checkout/sessions/create
const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: input,
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled.html`,
    // automatic_tax: {enabled: true},
})
return {url: session.url};
};

export const webHook = async (input: any) => {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = input.headers['stripe-signature'];
  
      try {
      event = stripe.webhooks.constructEvent(
          input.rawBody,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET
      );
      } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return 400;
      }
      // Extract the object from the event.
      data = event.data;
      eventType = event.type;
  } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // retrieve the event data directly from the request body.
      data = input.body.data;
      eventType = input.body.type;
  }
  
  if (eventType === 'checkout.session.completed') {
      console.log(`🔔  Payment received!`);
  }
  
  return 200;
  
      }

// Fetch the Checkout Session to display the JSON result on the success page




// Webhook handler for asynchronous events.
