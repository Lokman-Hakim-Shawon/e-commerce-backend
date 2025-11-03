const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('product',productSchema)