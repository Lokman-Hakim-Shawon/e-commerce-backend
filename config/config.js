
const dev={
    app:{
        port:process.env.PORT || 5000
    },
    db:{
        url:process.env.DB_URL || "mongodb://localhost:27017/e_commerce"
    }
}

module.exports = dev