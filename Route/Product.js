const express = require('express')
const { AddProduct, GetProduct, DeleteProduct, UpdateContact, GetOneProduct } = require('../Controllers/Product')
const { updateMany } = require('../Model/Product')

const ProductRouter = express.Router()

ProductRouter.post('/AddProduct',AddProduct)
ProductRouter.get('/GetProduct',GetProduct)
ProductRouter.delete('/DeleteProduct/:id',DeleteProduct)
ProductRouter.put('/UpdateProduct/:id',UpdateContact)
ProductRouter.get('/GetOneProduct/:id',GetOneProduct)

module.exports = ProductRouter