const express= require('express');

const router = express.Router();

//bring in the item model

const Item= require('../../models/item');

//@route get api/items
//GET ALL
router.get('/',(req,res)=>{
    Item.find()
        .sort({date:-1})
        .then(items=>res.json(items))
});

//GET WITH ID
router.get('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then(item=>res.json(item))
});


//POST
router.post('/',(req,res)=>{
    //create a new product
    //oject name is gonna coome from the request
    const newItem=new Item({
        name:req.body.name
    });

    newItem.save().then(item=>res.json(item));
});


//DELETE

router.delete('/:id',(req,res)=>{
    //findbyid available with mongoose
    Item.findById(req.params.id)
        .then(item=>item.remove().then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}))
});

//DELETE ALL

module.exports=router;

//find ,findbyud functionalities provided by mongoose