const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let db;

async function connectDb() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        db = client.db("travelapp");
        return db;
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

const getDb =()=> db;

module.exports = {getDb,connectDb}