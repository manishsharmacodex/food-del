import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://themanishsharmabca:manishcodex@cluster0.dzj9z.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}