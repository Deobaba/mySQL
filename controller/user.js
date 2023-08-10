const {db} = require('../config/db')

let queryCommand = (que,res,set= null) =>{
   if (set === null){
      db.query(que,(err,result)=>{
         if(err){throw err}
         console.log(result)
         res.json({
            data:result
         })
     })
   }
   else{
      db.query(que,set,(err,result)=>{
      if(err){throw err}
      console.log(result)
      res.json({
         data:result
      })
  })}
    
}

exports.createUser = async (req,res)=>{
   let d = new Date();
   let yyyy = d.getFullYear();
   let mm = d.getMonth();
   let dd = d.getDate();

   let createdAtDate = `${yyyy}-${mm}-${dd}`;
   let updatedAtDate = `${yyyy}-${mm}-${dd}`;
   console.log(req.body)
   const {password,usertype,username} = req.body

   let sql =`INSERT INTO user SET?`
   let post = {password,usertype,create_at:createdAtDate,username}
   queryCommand(sql,res,post)
}

exports.getUser = async (req,res)=>{
   let sql =`SELECT * FROM user WHERE userid = ${req.params.id}`
   queryCommand(sql,res)
} 

exports.editUser = async (req,res)=>{
   const {username} = req.body
   let sql =`UPDATE user SET username = '${username}' WHERE userid = ${req.params.id}`
   queryCommand(sql,res)
}

exports.deleteUser = async (req,res)=>{
   let sql =`DELETE FROM user WHERE userid =${req.params.id}`
   queryCommand(sql,res)
}

