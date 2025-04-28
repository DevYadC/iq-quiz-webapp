import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import problemSetRoutes from './routes/problemSetRoutes'
import { errorHandler } from './middleware/errorHandler'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

// 1) Database
connectDB(process.env.MONGODB_URI!)

// 2) Routes
app.use('/api/problem-sets', problemSetRoutes)

// 3) Error handling
app.use(errorHandler)

// 4) Start server
const PORT = Number(process.env.PORT) || 3000
app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`)
)
