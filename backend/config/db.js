import mongoose from "mongoose";
 
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sabasaiyeda:sabapassword0705@cluster0.qj2rab9.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
