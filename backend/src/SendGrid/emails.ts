require('dotenv').config();

const sgMail = require('@sendgrid/mail')
const url = process.env.SENDGRID_API_KEY
sgMail.setApiKey(url)

console.log()

export const sendEmail = (receiver: string, name: string) => {
  console.log(`sending email to ${receiver} @ ${name}`)
    const msg = {
        to: receiver,
        from: process.env.EMAIL, 
        subject: 'Please verify your new kleanse online shopping account',
        text: `welcome to kleanse ${name}, We can't wait to introduce you to all the sales you will find as one of our loyal customers.`,
        html: '<div>Hello there bro</div>',
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error: string) => {
          console.log(error)
        })
}