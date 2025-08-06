import { fetchAI } from "../services/geminiService.js"

export default {
    post: async (req, res) => {
        try {
            const { prompt } = req.body
            if (!prompt) return res.status(400).json({ error: "Faltan parámetros: prompt<string>" })
            const response = await fetchAI(prompt)
            if (response) return res.json({ content: response })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "Ha ocurrido un error en el servidor" })
        }
    }
}