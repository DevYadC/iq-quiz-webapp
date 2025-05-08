import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import problemSetRoutes from './routes/problemSetRoutes'
import scoreRoutes from './routes/scoreRoutes';
import { errorHandler } from './middleware/errorHandler'
import cors from 'cors'
import { postScore } from './controllers/postScores';
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// database
connectDB(process.env.MONGODB_URI!)

// routes

app.use('/api', problemSetRoutes)

app.use('/api', scoreRoutes);

app.use('/api', postScore);


// error handling
app.use(errorHandler)

// start server
const PORT = Number(process.env.PORT) || 3000
app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`)
)
