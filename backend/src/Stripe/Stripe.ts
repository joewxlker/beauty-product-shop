import { Request } from "node-fetch";

const express = require('express');
const app = express();
const { resolve } = require('path');
// Copy the .env.example in the root into a .env file in this folder

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/checkout-one-time-payments",
    version: "0.0.1",
    url: "https://github.com/stripe-samples/checkout-one-time-payments"
  }
});

// Ensure environment variables are set.
// checkEnv();


// app.use(express.static(process.env.STATIC_DIR));
// app.use(express.urlencoded());
// app.use(
//   express.json({
//     // We need the raw body to verify webhook signatures.
//     // Let's compute it only when hitting the Stripe webhook endpoint.
//     verify: function (req: any, res: any, buf:any) {
//       if (req.originalUrl.startsWith('/webhook')) {
//         req.rawBody = buf.toString();
//       }
//     },
//   })
// );

export const configStripe = async () => {
  const price = await stripe.prices.retrieve(process.env.PRICE)
  return ({
    publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
    unitAmount: price.unit_amount,
    currency: price.currency,
});
}

export const checkoutSession = async (input:any) => {
  const { sessionId } = input;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return session;
}

export const createCheckoutSession = async (input: any) => {
  const domainURL = process.env.DOMAIN;
  const { quantity } = input;

// Create new Checkout Session for the order
// Other optional params include:
// [billing_address_collection] - to display billing address details on the page
// [customer] - if you have an existing Stripe Customer ID
// [customer_email] - lets you prefill the email input in the Checkout page
// [automatic_tax] - to automatically calculate sales tax, VAT and GST in the checkout page
// For full details see https://stripe.com/docs/api/checkout/sessions/create
const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
    {
        price: process.env.PRICE,
        quantity: quantity
    },
    ],
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled.html`,
    // automatic_tax: {enabled: true},
})
return session.url;
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



function checkEnv() {
  const price = process.env.PRICE;
  if(price === "price_12345" || !price) {
    console.log("You must set a Price ID in the environment variables. Please see the README.");
    process.exit(0);
  }
}