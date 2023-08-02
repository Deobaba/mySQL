  require('dotenv').config
  const {connectDB} = require('./config/db')
 const express = require('express')
 const app = express()

 const database = require('./route/database')

connectDB()

app.use(express.json())

app.use('/',database)

 const PORT = process.env.PORT || 5000
  
 app.listen(PORT,()=>{
    console.log(`server is on ${PORT}`)
 })