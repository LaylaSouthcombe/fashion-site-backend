const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = process.env.PORT || 3000;


mongoose.connect('mongodb+srv://laylasouthcombe789:O0YK6hmdILADdjKZ@portfolioprojectscluste.gs0gxnt.mongodb.net/FashionSiteretryWrites=true&w=majority')
.then(() => {
  console.log('connected to mongoDB')
  app.listen(port, () => console.log(`Express departed from port ${port}`))
}).catch((error) => {
  console.log(error)
})


