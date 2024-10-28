const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('./middleware/error')

require('dotenv').config()
var cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();

//DB
mongoose.connect(process.env.DATABASE).then(()=>console.log('Db connected')).catch((err)=>  console.log(err))

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}))
app.use(cookieParser())
app.use(cors())

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
