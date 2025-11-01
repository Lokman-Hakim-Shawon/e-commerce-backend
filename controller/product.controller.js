
const getAllProduct=(req,res)=>{
    res.status(200).json({message:"show all products"})
}
const getOneProduct=(req,res)=>{
    res.status(200).json({message:"show one product"})
}
const createProduct=(req,res)=>{
    res.status(200).json({message:"show create product"})
}
const updateProduct=(req,res)=>{
    res.status(200).json({message:"show update product"})
}
const deleteProduct=(req,res)=>{
    res.status(200).json({message:"show delete product"})
}

module.exports={getAllProduct,getOneProduct,createProduct,updateProduct,deleteProduct}