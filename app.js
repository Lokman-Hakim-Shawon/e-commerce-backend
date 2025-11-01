const express=require('express')
const cors=require('cors')
const app=express()
const productRouter=require('./router/Product.route')
require('./config/db')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.status(200).json({message:'welcome to express server'})
})

app.use((req,res,next)=>{
    res.status(500).json({messegae:'rotue is not found'})
})
app.use((err,req,res,next)=>{
    res.status(404).json({message:'something was wrong'})
})



module.exports=app