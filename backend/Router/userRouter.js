const express = require('express')
const userRegistration = require('../Controls/User/user')
const userMiddleware = require('../Middleware/user')


const router = express.Router()

router.post('/userregistration', userMiddleware.userRegMiddleware, userRegistration.userRegistration );
router.post('/userlogin', userMiddleware.userLoginMiddleware, userRegistration.userLogin );

module.exports=router;