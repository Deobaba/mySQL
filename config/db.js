const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user: 'Deobaba',
    password:'Baba1996',
    database:'PIZZAPP'
  })

  const conn =  db.connect((err)=>{
    if(err){
       throw err
    }
    console.log('connected to database')
  })
 
  const connectDB = async() =>{
    await conn
  
  }

  
module.exports = {connectDB,db}