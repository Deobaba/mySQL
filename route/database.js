const {createDB,createTable,editTable,deleteTable,getTable,addUser } = require('../Database/database')
const express = require('express')
const router = express.Router()

router.get('/createDB',createDB)
router.get('/createtable',createTable)
router.get('/edittable',editTable)
router.get('/deletetable',deleteTable)
router.get('/gettable',getTable)
router.get('/addUser',addUser)


module.exports = router