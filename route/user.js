const {createUser} = require('../controller/user')
const express = require('express')
const router = express.Router()

router.post('/',createUser)

module.exports= router
