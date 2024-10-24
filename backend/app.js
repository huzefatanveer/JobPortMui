const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

require('dotenv').config()
var cors = require('cors')
const app = express();

//DB
mongoose.connect(process.env.DATABASE).then(()=>console.log('Db connected')).catch((err)=>  console.log(err))

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
