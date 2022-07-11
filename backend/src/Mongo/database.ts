require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_CLIENT_KEY
const client = new MongoClient(uri);

export const handleLoginRequestDB = async (input: any) => {
    try {
    await client.connect();
        await client.db('onlinestore').collection('user_data').find(input).toArray((err: any, result: Array<any>) => {
            console.log(`queried DB with data ${input}`)
            if (err) throw err;
            return result;
        })
            .then((result: any) => {
                console.log('returning result to client')
                return result;
                //TODO query hash stored in database with password in req.body using bcrypt
            }).then(client.close())
        } catch (err) { console.log(err) }
}

export const handleCreateRequestDB = (input: any) => {
    const createUserAccount = async (client: any, newUser: object) => {
        await client.db('onlinestore').collection('user_data').insertOne(newUser).toArray((err: any, result: Array<any>) => {
            if (err) throw err;
            console.log(result)
            return result
        })
    }
    try {
        client.connect()
            .then(createUserAccount(client, input)
                .then(client.close()))

    } catch (e) { 
        console.error(e); 
        return e
    }

    return { errorType : 'success' }
}

    
