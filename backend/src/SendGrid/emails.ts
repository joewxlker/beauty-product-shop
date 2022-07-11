const sgMail = require('@sendgrid/mail')
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendEmail = (receiver:string, html:string, name: string) => {
    const msg = {
        to: receiver,
        from: 'joexlk3r@gmail.com', 
        subject: 'Please verify your new kleanse online shopping account',
        text: `welcome to kleanse ${name}, We can't wait to introduce you to all the sales you will find as one of our loyal customers.`,
        html: html,
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error: string) => {
          console.error(error)
        })
}