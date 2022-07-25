require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_CLIENT_KEY
const client = new MongoClient(uri);

export const queryMongo = async (database: string, collection: string, input: string ) => {
    try {
        await client.connect();
        return await client.db(database).collection(collection).findOne(input)
    } catch (err) {
        return err
    }
}

export const insertMongo = async (input: any) => {
    console.log(`insert @ ${input}`)
    try {
        await client.connect().then(
            await client.db('onlinestore')
                .collection('user_data')
                .insertOne(input)
                .then((result: any) => {
                    console.log(result)
                })
        )
    } catch (e) {
        console.error(e);
        return false
    }
    finally {
        await client.close()
    }
}
    
