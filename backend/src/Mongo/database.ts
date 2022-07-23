require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_CLIENT_KEY
const client = new MongoClient(uri);

export const handleLoginRequestDB = async (input: any) => {
    try {
        await client.connect();
        return await client.db('onlinestore').collection('user_data').findOne(input)
    } catch (err) {
        return err
    }
}

export const handleCreateRequestDB = async (input: any) => {
    console.log(`creating new user in DB @ ${input}`)
    const createUserAccount = async (newUser: object) => {
        await client.connect().then(
            await client.db('onlinestore')
                .collection('user_data')
                .insertOne(newUser)
                .then((result: any) => {
                console.log(result)
            })
        )
    }
    const createCart = async (input: object) => {
        await client.db('onlinestore')
        .collection('cart')
            .insertOne({ userId : input._id, cartItems: [{'':''}]})
        .then((result: any) => {
            console.log(result)
        })
    }
    try {
        createUserAccount(input)
        createCart(input)
        

    } catch (e) {
        console.error(e);
        return false
    }
    // finally {
    //     await client.close()
    // }
}

    
