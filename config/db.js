const mongoose = require("mongoose")


module.exports = mongoose.connect(process.env.MONGO_URI).then(connect=>{
    console.log("Database connected")
}).catch(error =>{
    console.error(error);
})