import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"


// app config
const app = express()
const port  = 4000


// middleware
app.use(express.json())
app.use(cors())


// db Connection
connectDB();



// api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("Api Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})