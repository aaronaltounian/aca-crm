const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended:true} ) );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen( 8080, () => console.log('Listening on port 8080...') );

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://aaron:testing123@cluster0-hlfen.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if(err) console.log(err);
    // const collection = client.db("aca-crm").collection("customers");
//   // perform actions on the collection object
//   client.close();
    // collection.find({}).toArray( function( err, docs ) {
    //     console.log('Found the following records');
    //     console.log(docs);
    // })
});

app.post('/customers', ( req, res ) => {
    const collection = client.db('aca-crm').collection('customers');
    collection.insertMany( [req.body], function(err, result) {

    });
    res.json(req.body);
})
