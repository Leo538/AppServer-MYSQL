
import 'dotenv/config'
import express , {json} from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import {movieRouter} from './routes/movie.js'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(express.json())
app.disable('x-powered-by')
app.use(corsMiddleware()) 

// Servir archivos estáticos del frontend
app.use(express.static(join(__dirname, 'web')))

app.use('/movies', movieRouter)

const PORT = process.env.PORT ?? 3500
app.listen(PORT, () => {
  console.log(`Server listening in port http://localhost:${PORT}`)
})
