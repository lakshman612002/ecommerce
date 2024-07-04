
import mongoose from "mongoose";



export const Connection=async(username,password)=>{
    const url=`mongodb+srv://${username}:${password}@ecommerce.ev6tyk5.mongodb.net/`;
    try{
        await mongoose.connect(url,{});
        console.log('database connected successfully')
    }
    catch(error){
      console.log('error while connecting',error.message);
    }

}

