const Product = require('../models/Product')

async function showAllProducts (req, res) {
    try {
      const products = await Product.find({})
      res.status(200).json(products)
    } catch(error){
      res.status(500).json({message: error.message})
    }
  }

async function findProductById (req, res) {
    try {
      const {id} = req.params
      console.log(id)
      const product = await Product.findById(id)
      res.status(200).send(product)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
}

async function createProduct (req, res) {
    try {
      const product = await Product.create(req.body)
      res.status(201).json(product)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

async function updateProduct (req, res) {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function deleteProduct (req, res) {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function queryProducts (req, res) {
    try {
        const query = JSON.parse(req.headers.query)
        const products = await Product.find(query)
        res.status(200).json(products)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

async function searchProducts (req, res) {
    try {
        const searchQuery = req.headers.search_query
        const products = await Product.aggregate( [{
            $search: {
              index: "SearchBarResults",
              text: {
                query: searchQuery,
                path: {
                  wildcard: "*"
                }
              }
            }
          }])
        res.status(200).json(products)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {showAllProducts, findProductById,createProduct, updateProduct, deleteProduct, queryProducts, searchProducts}