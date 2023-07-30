  require('dotenv').config
 const mysql = require('mysql')
 const express = require('express')
 const app = express()

 const db = mysql.createConnection({
   host:'localhost',
   user: 'Deobaba',
   password:'Baba1996',
 })

 db.connect((err)=>{
   if(err){
      throw err
   }
   console.log('connected to database')
 })

 app.use(express.json())

 app.get('/createdb',(req,res)=>{
   let sql = 'CREATE DATABASE PIZZAPP'
   db.query(sql,(err,result)=>{
      if(err){throw err}
      console.log(result)
      res.send('Database created')
   })
 })

 const PORT = process.env.PORT || 5000
  
 app.listen(PORT,()=>{
    console.log(`server is on ${PORT}`)
 })