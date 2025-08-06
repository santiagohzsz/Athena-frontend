import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { geminiRouter } from './routes/geminiRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', geminiRouter)

app.get('/', (req, res) => {
    res.json({ success: "La API está funcionando correctamente" })
})

app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
})