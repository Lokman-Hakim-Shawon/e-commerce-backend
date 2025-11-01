const router= require('express').Router()

const {getAllProduct,getOneProduct,createProduct,updateProduct,deleteProduct}=require('../controller/product.controller')
router.get('/',getAllProduct)
router.get('/:id',getOneProduct)
router.post('/',createProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router