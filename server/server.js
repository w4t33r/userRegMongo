const express = require('express');
const mongoose = require("mongoose");
const authRouter = require("./routes/auth")
const cors = require('./middleware/corsMiddleware')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT
const dbUrl = process.env.dbUrl

app.use(cors)
app.use(express.json())

app.use("/api/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(dbUrl)
        app.listen(PORT, () => {
            console.log('Server started on port', PORT)
        })
    } catch (err) {
    console.log(err)
    }
}

start()