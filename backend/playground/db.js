const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

app
    .get('/', (req, res) => {
        res.send('hello');
    })
    .listen(3000, err => {
        console.log('listining on port 3000');
    });
const uri = 'mongodb+srv://Nishu:Nishu123@cluster0.4jnri.mongodb.net/studentDB?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db('studentDB').collection('students');
    console.log('connected with DB...');
    console.log(collection);
    client.close();
});
