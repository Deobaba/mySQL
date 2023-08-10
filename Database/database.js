const {db}= require('../config/db')



 let queryCommand = (que,message,res) =>{
    db.query(que,(err,result)=>{
        if(err){throw err}
        console.log(result)
        res.send(message)
    })
  }

exports.createDB = async (req,res) => {
   let sql = 'CREATE DATABASE chek'
  await queryCommand(sql)
};

exports.createTable = async(req,res)=>{
  //  let sql = 'CREATE TABLE newist(id INT AUTO_INCREMENT,state INT , total_price INT,PRIMARY KEY (id))'
  // let sql = 'CREATE TABLE orderSchema(id INT PRIMARY KEY AUTO_INCREMENT,created_at DATE,state INT DEFAULT "1",total_price INT )'
  let sql = 'CREATE TABLE item (id INT, name VARCHAR(225),price INT, quantity INT, PRIMARY KEY(id),FOREIGN KEY(id) REFERENCES orderSchema(id) ON DELETE CASCADE )'
   await queryCommand(sql,'table created',res)
}

exports.editTable = async (req,res)=>{
   let sql = 'ALTER TABLE user  ADD COLUMN username VARCHAR(225) NOT NULL UNIQUE '
    await queryCommand(sql,'table edited',res)
}

exports.deleteTable = async (req,res)=>{
  let sql = 'ALTER TABLE DROP '
   await queryCommand(sql,'table edited',res)
}

exports.getTable = async (req,res) =>{
  // let sql ='DROP TABLE orderlist '
  // await queryCommand(sql,'TABLES',res)
  res.send('it finally here')
}

exports.addUser = async(req,res)=>{
   let sql = 'CREATE TABLE user(userid INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,password VARCHAR(225) NOT NULL,usertype ENUM("admin","user") NOT NULL,create_at DATE)' 
   await queryCommand(sql,'table created',res)
}