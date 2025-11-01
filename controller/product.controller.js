const mongoose=require('mongoose')
const Product=require('../model/product.model')

const getAllProduct=async(req,res)=>{
    try {
        const AllProduct=await Product.find()
        res.status(200).json(AllProduct)
    } catch (error) {
        console.log(error.message)
    }
}
const getOneProduct=async(req,res)=>{
    try {
        const update= await Product.findOne({id:req.body._id})
        res.status(200).json(update)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const createProduct=(req,res)=>{
    try {
        const createProduct= new Product({
            Name:req.body.Name,
            Description:req.body.Description,
            Price:req.body.Price,
            Category:req.body.Category,
            Image:req.body.Image
        })
        createProduct.save()
        res.status(200).json(createProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateProduct=(req,res)=>{
    
    res.status(200).json({message:"show update product"})
}
const deleteProduct=async(req,res)=>{
    try {
        const deleteData= await Product.deleteOne({id:req.body._id})
        res.status(200).json({message:'delete data'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={getAllProduct,getOneProduct,createProduct,updateProduct,deleteProduct}