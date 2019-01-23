const express=require("express");
const mongoose=require("mongoose");
const bodyParser =require("body-parser");
const path=require("path");

//tell server to look at routes
const items=require('./routes/api/items');
const user=require('./routes/api/user');
const products=require('./routes/api/products');
const orders=require('./routes/api/orders');

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
app.use('/api/user',user);
app.use('/api/products',products);
app.use('/api/orders',orders);

//serve static assets if in production
if(process.env.NODE_ENV==='production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

//process env port part added with deploying this on heroku in mind in the final step
const port = process.env.PORT||5000;

app.listen(port,()=>console.log(`server started on port ${port}`));


