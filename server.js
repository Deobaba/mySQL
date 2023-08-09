  require('dotenv').config({path:'./config/config.env'})
  const {connectDB} = require('./config/db')
 const express = require('express')
 const app = express()

 const database = require('./route/database')
 const user = require('./route/user')

connectDB()

app.use(express.json())

app.use('/',database)
app.use('/user',user)

 const PORT = process.env.PORT 
  
 app.listen(PORT,()=>{
    console.log(`server is on ${PORT}`)
 })