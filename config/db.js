const config=require('./config')
const mongoose=require('mongoose')

const DBurl=config.db.url
 try {
    mongoose.connect(DBurl)
    console.log('mongodb is connected')
 } catch (error) {
    console.log(error.message)
 }
