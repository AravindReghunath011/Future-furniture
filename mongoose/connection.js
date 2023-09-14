const mongoose =require('mongoose');
require('dotenv').config()

module.exports={
    connect(){
        console.log(process.env.MONGO_URL,'ll');
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then(()=>{
            console.log("Database connected");
        }).catch((err)=>{
            console.log("connection failed",err);
        }) 
    }
} 