const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const ProductRouter = require('./Route/Product')
const app = express()
require('dotenv').config()


ConnectDB()
app.use(express.json())
app.use('/api/Product',ProductRouter)

app.listen(process.env.port,console.log('server is running'))