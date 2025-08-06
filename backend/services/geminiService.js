import dotenv from 'dotenv'
import { GoogleGenAI } from "@google/genai";

dotenv.config()

// ---------- ENVIRONMENT VARIABLES ----------

const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT
const GEMINI_KEY = process.env.GEMINI_KEY

// -------------

const ai = new GoogleGenAI({ apiKey: GEMINI_KEY })

export const fetchAI = async (prompt) => {
    const fullPrompt = `${SYSTEM_PROMPT}\nEstudiante:${prompt}`

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: fullPrompt
        })
        if (response.text) return response.text
        throw new Error("Ocurrió un error")
    } catch (error) {
        console.error("Error en Gemini API: ", error)
        throw new Error("Ocurrió un error")
    }
}