const mongoose = require('mongoose')

const mongoDbUrl = process.env.mongoDbUrl;

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