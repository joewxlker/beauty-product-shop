const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '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')

export const sendEmail = () => {
    const msg = {
        to: 'gromlinz69@gmail.com', // Change to your recipient
        from: 'joewxlk3r@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>Sent from the website</strong>',
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

export const sendEmailAuth = () => {
    const msg = {
        to: 'gromlinz69@gmail.com', // Change to your recipient
        from: 'joewxlk3r@gmail.com', // Change to your verified sender
        subject: 'Verification',
        text: 'verify your account here',
        html: '<strong>verify your account here <a href="google.com">Link</a> </strong>',
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