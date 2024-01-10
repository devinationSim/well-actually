import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'


dotenv.config({path: './.env'})

connectDB()

const app = express()

const PORT = process.env.PORT || 5000


app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting the server:`, err)
    }else {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    }
})
