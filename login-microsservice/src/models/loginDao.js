
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const senhabd = process.env.MONGODBSENHA
const uri = "mongodb+srv://adm:" + senhabd + "@cluster0.ldnbg3j.mongodb.net/?retryWrites=true&w=majority"
//console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  console.log("Connected correctly to server");
});


async function isConnected() {
    return !!client && !!client.topology && client.topology.isConnected()
}

