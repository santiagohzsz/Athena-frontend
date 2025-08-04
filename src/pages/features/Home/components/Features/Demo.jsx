import { useState } from "react"
import { SendHorizonalIcon } from "lucide-react"
import Message from "./Message"
import FastMessage from "./FastMessages"

function Demo() {
    const [chatHistory, setChatHistory] = useState([
        {
            id: 1,
            isUser: false,
            content: "¡Hola! Soy Athena Innovis ¿En qué puedo ayudarte hoy?"
        }
    ])
    const [demoInput, setDemoInput] = useState('')

    const sendMessage = () => {
        if (demoInput.length <= 2) return
        setChatHistory(prev => [...prev, { id: chatHistory.length + 1, isUser: true, content: demoInput }])
        setDemoInput('')
    }

    return (
        <>
            <div className="ai-live-demo bg-[#32323F] min-h-80 w-6xl rounded-xl mt-8 shadow-xl shadow-gray-800 p-8 flex flex-col gap-4 justify-between overflow-hidden">
                <div className="messages-container max-h-60 flex flex-col w-full gap-4 overflow-y-auto">
                    {chatHistory.map(message => <Message key={message.id} message={message.content} isUser={message.isUser} />)}
                </div>
                <div className="input-message relative flex flex-col gap-4">
                    <input type="text" name="message" id="message" className="w-full bg-[#3E3E4A] h-14 rounded-md outline-0 text-white pl-4 pr-18" placeholder="Envía un mensaje..." value={demoInput} onChange={(e) => setDemoInput(e.target.value)} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            if (demoInput.length > 2) {
                                sendMessage()
                                setDemoInput('')
                            }
                        }
                    }} />
                    <button className="rounded-full w-max h-max bg-linear-to-br from-sky-800 via-sky-600 to-sky-500 text-white p-2 flex items-center justify-center absolute right-4 top-1.5 cursor-pointer" onClick={() => sendMessage()}>
                        <SendHorizonalIcon className="size-6" />
                    </button>
                    <div className="fast-messages-container w-full">
                        <FastMessage />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo