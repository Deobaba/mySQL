const mysql = require('mysql2')

const pool = mysql.createPool({
    host: localhost ,
    user: root ,
    database:blog ,
    password:Baba1996,

})

module.exports = pool.promise()