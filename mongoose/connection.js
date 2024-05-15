const mongoose =require('mongoose');
require('dotenv').config()

module.exports={
     connect :async function connect(){ 
        try {
            await mongoose.connect(process.env.MONGO_URL)
            .then(()=>console.log('Db connected ')) 
            .catch((err)=>{
            throw new Error('Mongo Db error') 
    
            })      
        } catch (error) {
            console.log(error) 
            setTimeout(() => {
                connect()
            }, 5000);
            
        }
    }  
} 