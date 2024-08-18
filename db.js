const mongoose = require('mongoose')

// const mongoDbUrl = process.env.mongoDbUrl;

const mongoDbUrl = `mongodb+srv://jananib6:Janani2000@cluster0.4h2ombp.mongodb.net/TheBookBazaar`

const connectDb = async () => {

   if(mongoose.connection.readyState)
   return;
   await mongoose.connect(mongoDbUrl)

   console.log(mongoose.connection.readyState , "--- Connection State")
}


module.exports = {
    connectDb,
    mongoose
}