const express = require('express') ;


const router = express.Router() ;
const shoppingController = require('../controllers/shoppingController')

router.get('/allproducts',shoppingController.getAllProduct) ;

router.post('/addproduct',shoppingController.addProduct)

module.exports = router