const {db} = require('../config/db')

let queryCommand = (que,message,res) =>{
    db.query(que,(err,result)=>{
        if(err){throw err}
        console.log(result)
        res.send(message)
    })
}

exports.createUser = async (req,res)=>{
   let d = new Date();
   let yyyy = d.getFullYear();
   let mm = d.getMonth();
   let dd = d.getDate();

   let createdAtDate = `${yyyy}-${mm}-${dd}`;
   let updatedAtDate = `${yyyy}-${mm}-${dd}`;

   const {password,usertyp,create_at} = req.body

   let sql =`INSERT INTO user(password,usertype,create_at) VALUES(``)`
}

exports.getUser = async (req,res)=>{
   let sql =''
}

exports.editUser = async (req,res)=>{
   let sql =''
}

exports.deleteUser = async (req,res)=>{
   let sql =''
}

exports.updateUser = async (req,res)=>{
    let sql =''
}