const express=require('express')
const app=express()
const env=require('dotenv').config()
const DB=require('./Database/db')
DB()

const port=process.env.PORT


app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})
