const mongoose= require('mongoose');
const Schema= mongoose.Schema

//create item
//only item date and current time is taken here for simplicity for the moment
const ItemSchema= new Schema({

    name:{
        type: String,
        required:true
    },

    date:{
        type: Date,
        default:Date.now()
    }


});

module.exports=Item= mongoose.model('item',ItemSchema);

