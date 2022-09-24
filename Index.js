const dotenv = require('dotenv')
require('dotenv').config()
const express = require('express')
const connectToMongo = require('./db')
const cors = require('cors')
connectToMongo()
const app = express()
const port = 5000;
 
app.use(cors())
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/product', require('./routes/product'))


app.listen(port, () => {

  console.log(`Notepad App is listening at port  ${port}`)
})

