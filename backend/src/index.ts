import { sendEmail } from "./SendGrid/emails";
import { handleCreateRequestDB, handleLoginRequestDB } from './Mongo/database'
import { checkObj } from "./services/checkObject";
import *  as dotenv from 'dotenv'
import { compare, createHash } from "./Bcrypt/passwordAuth";
import { userObj } from "./types/userObj";
import { checkoutSession, configStripe, createCheckoutSession, createStripeAccount } from "./Stripe/Stripe";

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

app.get('/success.html', (req: any, res: any) => {
    res.send('<p>Payment succeeded </p><a href="http://localhost:3000/">Continue browsing</a>')
})

app.get('/api/config', async (req: any, res: any) => {
    configStripe('', false).then((data) => res.send(data));
});

app.post('/api/config', async (req: any, res: any) => {
    let output = [];
    for (let v in req.body) {
        output.push(await configStripe(req.body[v].id, true))
    }
    res.send(output)
});

app.get('/api/checkout-session', async (req: any, res: any) => {
    checkoutSession(req.query).then((result) => res.send(result))
});

app.post('/api/create-checkout-session', async (req: any, res: any) => {
    createCheckoutSession(req.body).then((output) => res.send(output))
});


// app.post('/api/webhook', async (req: any, res: any) => {
//     webHook(req).then((output:any) => res.status(output))

// });

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
                year: req.body.year,
                verified: false,
            }
            return newUserObj
        }).then((newUserObj) => {
            createStripeAccount(newUserObj.email).then((id) => {
                if (id.raw !== undefined) { return id.raw.code }
                handleCreateRequestDB({ ...id, ...newUserObj })
                sendEmail(newUserObj.email, newUserObj.firstname);
                return true;
            }).then((output) => {
                console.log(output)
                res.send({output: output})
            })
        })
            
    }
        else return res.status(418).send({output: false})  
        
})

app.post('/api/login', async (req: any, res: any) => {
    if (!checkObj(req.body)) {
        if (await handleLoginRequestDB({ email: req.body.email }) === null) return res.send({ email: false });
        const obj = await handleLoginRequestDB({ email: req.body.email })
        const output = await compare(req.body.password, obj.password)
        res.status(200).send({ output: output, password: obj.password})
    }
    else 
    res.status(418).send(false)
})

