const {createUser,getUser,editUser,deleteUser} = require('../controller/user')
const express = require('express')
const router = express.Router()

router.post('/',createUser)
router.get('/:id',getUser)
router.put('/:id',editUser)
router.delete('/:id',deleteUser)

module.exports= router
