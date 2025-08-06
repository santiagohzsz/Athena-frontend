// ---------- MESSAGES ----------

export const messages = [
    {
        id: 1,
        isUser: false,
        content: "¡Hola! Soy Athena Innovis ¿En qué puedo ayudarte hoy?"
    }
]

// ---------- FUNCTIONS ----------

export const sendMessage = async (setChatHistory, setDemoInput, chatHistory, demoInput) => {
    if (demoInput.length <= 2) return

    const newUserMessage = { id: chatHistory.length + 1, isUser: true, content: demoInput }
    setChatHistory(prev => [...prev, newUserMessage])
    setDemoInput('')

    const loadingMessage = { id: 'loading', isUser: false, content: 'loading' }
    setChatHistory(prev => [...prev, loadingMessage])

    try {
        const aiResponse = await fetchAIAPI(demoInput)
        const aiMessage = { id: chatHistory.length + 1, isUser: false, content: aiResponse.content }
        setChatHistory(prev => [...prev, aiMessage])
    } catch (error) {
        console.error("Ha ocurrido un error recibiendo el mensaje de la IA: ", error)
    } finally {
        setChatHistory(prev => prev.filter(msg => msg.id !== 'loading'))
    }
}

// ---------- Fetch AI ----------

const fetchAIAPI = async (prompt) => {
    try {
        const response = await fetch("http://localhost:3000/api/gemini", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Ocurrió un error al llamar a la API: ", error)
    }
}