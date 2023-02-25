const express = require("express");
const mongo = require("mongodb");
const dotenv = require("dotenv");
const cors  = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
const MongoClient = mongo.MongoClient;
const app = express();
app.use(cors());
// const PORT = process.env.PORT || 8000;
// let db;
// const MONGO_URL = process.env.MONGO_URL;

//supporting libraries - middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Mongodb Connection
// MongoClient.connect(MONGO_URL, (err, client) => {
//     console.log("Mongo is connected");
//     if (err) console.log("Error while connecting");
//     db = client.db("Zomato");
//     app.listen(PORT, () => {
//         console.log(`Server started on port ${PORT}`);
//     });
// });




const url = `mongodb+srv://payal:payal@my-sample-cluster-b3ugy.mongodb.net/Zomato?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
MongoClient.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    });