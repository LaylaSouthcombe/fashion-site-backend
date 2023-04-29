const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products')
//Admin routes
router.post('/product/', productsController.createProduct)
router.put('/product/:id', productsController.updateProduct)
router.delete('/product/:id', productsController.deleteProduct)
//Site routes
router.get('/products/', productsController.showAllProducts)
router.get('/product/:id', productsController.findProductById)
router.get('/products/query', productsController.queryProducts)
router.get('/products/search', productsController.searchProducts)


module.exports = router