const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

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


mongoose.connect('mongodb+srv://laylasouthcombe789:O0YK6hmdILADdjKZ@portfolioprojectscluste.gs0gxnt.mongodb.net/FashionSite?retryWrites=true&w=majority')
.then(() => {
  console.log('connected to mongoDB')
  app.listen(port, () => console.log(`Express departed from port ${port}`))
}).catch((error) => {
  console.log(error)
})


