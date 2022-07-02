import { Request, Response } from 'express';
import { createUserObj, userObj }from './types/userObj'

const express = require('express')
const http = require('http');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const server = http.createServer(app); 
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://josephwalker:8HQzrW2d5J9f7qK@cluster1.phe7a.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin:  "*"
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});

server.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`)
});

app.get('/api/login', (req:Request, res:Response) => {
    res.send('Hello World!')
  });
app.post('/api/login', (req: Request, res: Response) => {
    //TODO: userLoginObj type
    //TODO: Learn how to call a users data from the DB
    // query this with user input
    // if email exists in DB check password, if not return no such email, please create an account
    // if password correct, return true
    //else return false
})
app.post('/api/createAccount', async (req: Request, res: Response) => {

    const user:userObj = req.body
    const userObject = createUserObj(user)
    try {
        const createUserAccount = (client: any, newUser: any) => {
            const result = async () => {
                await client.db('onlinestore').collection('user_data').insertOne(newUser);
                console.log(`New listing created ${JSON.stringify(user)}`);
                // await client.db('onlinestore').collection('user_cart').insertOne({user.id})
                // generate cart listing linked to user
                res.send({data: `success`})
            }
            result()
        }
        client.connect().then(
            createUserAccount(client, userObject)).then(client.close())

    } catch (e) { 
        console.error(e); res.send(e)
    }
});

app.post('/api/shoppingCart', async (req: Request, res: Response) => {

})
