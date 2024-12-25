const express=require('express')
const app=express()
const path=require('path')
const env=require('dotenv').config()
const DB=require('./Database/db')
const userRouter=require("./routes/userRouter")
DB()


app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static('public'))


app.use('/user',userRouter)


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})
