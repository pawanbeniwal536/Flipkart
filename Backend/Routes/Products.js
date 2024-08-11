const express = require('express')
const getProducts = require('../Controllers/Products/Products');


const router = express.Router();

router.get('/products',getProducts)

module.exports = router;