import express from 'express'
import geminiController from '../controllers/geminiController.js'

export const geminiRouter = express.Router()

geminiRouter.post('/gemini', geminiController.post)