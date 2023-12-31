const express = require('express')
const connection = require('./MongoDb/mongoose')
const router = require('./Router/userRouter')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

connection()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/',router)


const PORT = process.env.PORT || 5000
app.listen(PORT,()=> {
    console.log(`Server is running on ${PORT}`);
})