const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected successfully");
    }catch(err){
        console.error("database connectiojn failed", err);
    }
}

module.exports = connectDB;