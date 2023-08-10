const {createUser,getUser} = require('../controller/user')
const express = require('express')
const router = express.Router()

router.post('/',createUser)
router.get('/:id',getUser)

module.exports= router
