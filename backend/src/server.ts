import { Request, Response } from 'express';

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
app.post('/api/login', (req:Request, res:Response) => {
    if (req.body.username !== '' && req.body.password !== '') {
        //handle login
        res.send(true)
    }
    else {
        // handle logout
        res.send(false)
    }
})
app.post('/api/createAccount', async (req:Request, res:Response) => {

    // try {
    //     const createUserAccount = (client, newUser) => {
    //         const result = async () => {
    //             await client.db('onlinestore').collection('user_data').insertOne(newUser);
    //             console.log(`New listing created with the following id: ${result.insertedId}`);
    //             res.send({data: 'success'})
    //         }
    //         result()
    //     }
    //     client.connect().then( 
    //         createUserAccount(client, userObj)).then(client.close())

    // } catch (e) { 
    //     console.error(e); res.send(e)
    // }
});
