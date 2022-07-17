import { sendEmail } from "./SendGrid/emails";
import { handleCreateRequestDB, handleLoginRequestDB } from './Mongo/database'
import { checkObj } from "./services/checkObject";
import *  as dotenv from 'dotenv'
import { createHash } from "./Bcrypt/passwordAuth";
import { userObj } from "./types/userObj";
import { checkoutSession, configStripe, createCheckoutSession, webHook } from "./Stripe/Stripe";

dotenv.config();

const express = require('express')
const http = require('http');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const server = http.createServer(app); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.env.STATIC_DIR));
app.use(express.urlencoded());
app.use(
  express.json({
    verify: function (req: any, res: any, buf:any) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);
app.use(cors({
    origin:  "*"
}));

server.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`)
}); 

// app.get('/', (req: any, res: any) => {
//     const path = resolve(process.env.STATIC_DIR + '/index.html');
//     res.sendFile(path);
//   });

app.get('/canceled.html', (req: any, res: any) => {
    res.send('<p>Payment failed </p><a href="http://localhost:3000/checkout">Go back</a>')
})

app.get('/api/config', async (req: any, res: any) => {
    const data = await configStripe(process.env.PRICE)
    console.log(data)
    res.send(data)
});

app.get('/checkout-session', async (req: any, res: any) => {
    checkoutSession(req.query).then((result) => res.send(result))
});

app.post('/create-checkout-session', async (req: any, res: any) => {
    createCheckoutSession(req.body).then((output) => res.redirect(303, output))
});


app.post('/webhook', async (req: any, res: any) => {
    webHook(req).then((output) => res.status(output))

});

app.post('/api/createAccount', async (req: any, res: any) => {

    if (!checkObj(req.body)) {
        createHash(req.body.password).then((hash) => {
            const newUserObj: userObj = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
                day: req.body.day,
                month: req.body.month,
                year: req.body.year
            }
            return newUserObj
        }).then((newUserObj) => {
            handleCreateRequestDB(newUserObj);
            sendEmail(newUserObj.email, newUserObj.firstname);
            
        })
            .then((output) => {
                 res.status(200).send({output: output}) 
            })
        } else return res.status(418).send(false)     
})

app.post('/api/login', async (req: any, res: any) => {
    if (!checkObj(req.body)) {
        handleLoginRequestDB(req.body) 
            .then((result: any) => res.status(200).send(result))
            sendEmail(req.body.email,req.body.firstname)
    }
    else 
    res.status(418).send(false)
})

