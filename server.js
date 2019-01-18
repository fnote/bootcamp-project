const express=require("express");
const mongoose=require("mongoose");
const bodyParser =require("body-parser");

//tell server to look at routes
const items=require('./routes/api/items');

//take requests and get data from the body request- body paser

const app=express();
//initialize express

//bodyparser middlewear
app.use(bodyParser.json());

//we need a data base to connect to,db object created
//mLAB a mongodb database as a service used here instead of having mongo locally ,key obtained after registering used here
const db= require('./config/keys').mongoURI;

//connect to mongo db ,mongoose used as ORM

mongoose.connect(db)
    .then(()=> console.log('mongodb connected '))
    .catch(err=>console.log("error while connecting to mongo db"))


//use routes
//whatever that comes from api/items goes to items variable which points to items.js above
app.use('/api/items',items);

//process env port part added with deploying this on heroku in mind in the final step
const port = process.env.PORT||5000;

app.listen(port,()=>console.log(`server started on port ${port}`));


