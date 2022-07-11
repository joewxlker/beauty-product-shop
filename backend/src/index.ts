import { sendEmail } from "./SendGrid/emails";
import {handleCreateRequestDB, handleLoginRequestDB} from './Mongo/database'
import { checkObj } from "./services/checkObject";
require('dotenv').config();
console.log(process.env)

const express = require('express')
const http = require('http');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const server = http.createServer(app); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use(cors({
    origin:  "*"
}));

server.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`)
}); 

app.post('/api/createAccount', async (req: any, res: any) => {
    console.log(req.body.password)
    // if (!checkObj(req.body)) {
    //     const hash = await createHash(req.body.password)
    //     console.log(hash)
    //     handleCreateRequestDB(req.body)
    //     res.status(200).send(true)}
    // else {res.status(418).send(false)}    
})

app.post('/api/login', async (req: any, res: any) => {
    if (!checkObj(req.body)) {
        handleLoginRequestDB(req.body) 
            .then((result: any) => res.status(200).send(result))
            sendEmail(req.body.email,'<div> hello </div>', req.body.firstname)
    }
    else 
    res.status(418).send(false)
})

