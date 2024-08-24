const express = require('express')
const MakePayment = require('../Controllers/Payment/Payment')

const router = express.Router();

router.post('/paypal',MakePayment)

module.exports = router;