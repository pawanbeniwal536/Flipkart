const express = require('express');
const connection =require('./DbCon/DbCon')
const defaultData = require('./defaultData/defaultData')
const Signup = require('./Routes/Users')
const Products = require('./Routes/Products')
const cors = require('cors');

const app = express()
app.use(cors())
require('dotenv').config();

connection()
let PORT = process.env.PORT_NUMBER
defaultData()
app.use(express.json())
app.use('/user',Signup)
app.use('/get',Products)
app.use('/',(req,res)=>{
    res.send("Helow world") 
})

app.listen(PORT,()=>{
    console.log(`Running on Port http://localhost:${PORT}`)
})