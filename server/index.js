import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"

import shiftRoutes from './routes/shifts.js' //rename the export when import

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true })) //if upload imgs, limit its size
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// routes must put under app.use(cors())
app.use('/shifts', shiftRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to Self Service Entry API')
})

const PORT = process.env.PORT || 5000;

mongoose.connect(
    process.env.CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));