const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()
app.use(express.json())
// app.use(cors())

// const Product = require('./models/Product')
const productRoutes = require('./routes/products')

app.use('/', productRoutes)

app.get('/', (req, res) => {
  res.send('Hello World')
})

const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
  console.log('connected to mongoDB')
  app.listen(port, () => console.log(`Express departed from port ${port}`))
}).catch((error) => {
  console.log(error)
})


