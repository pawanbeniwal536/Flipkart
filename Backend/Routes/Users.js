const express = require('express');
const { signup , signupOTPVerify , login ,loginOTPVerify ,getUser ,deleteUser } = require('../Controllers/Users/Users');
const fetchUser = require('../middleware/fetchUser')

const router = express.Router(); 

router.post('/signup', signup);
router.post('/signup-otp-verification', signupOTPVerify);
router.post('/login',login);
router.post('/login-otp-verification',loginOTPVerify);
router.post('/getUser',fetchUser,getUser);
router.delete('/delete-user/:id',deleteUser);

module.exports = router;