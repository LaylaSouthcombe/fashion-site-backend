const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products')

router.get('/', productsController.showAllProducts)
router.get('/:id', productsController.findProductById)
router.post('/', productsController.createProduct)
router.put('/:id', productsController.updateProduct)
router.delete('/:id', productsController.deleteProduct)

module.exports = router