import { sendEmail } from "./SendGrid/emails";
import { handleCreateRequestDB, handleLoginRequestDB } from './Mongo/database'
import { checkObj } from "./services/checkObject";
import *  as dotenv from 'dotenv'
import { createHash } from "./Bcrypt/passwordAuth";
import { userObj } from "./types/userObj";

dotenv.config();

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

