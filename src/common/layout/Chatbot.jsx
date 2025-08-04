import ChatBot from 'react-chatbotify'

function Chatbot() {

    const getResponse = (input) => {
        return input
    }

    const settings = {
        tooltip: {
            mode: "NEVER"
        },
        chatButton: {
            icon: 'https://www.pngmart.com/files/23/Chat-Icon-PNG-Clipart.png'
        },
        header: {
            title: 'Athena Bot',
            avatar: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png'
        },
        chatInput: {
            enabledPlaceholderText: 'Envía un mensaje...'
        }
    }

    const flow = {
        start: {
            message: "¡Bievenido a Athena Sphere 🚀!",
            path: 'model_loop',
        },
        model_loop: {
            message: async ({ userInput }) => {
                return getResponse(userInput)
            },
            path: 'model_loop'
        }
    }

    const themes = {
        id: 'simple_blue',
        version: "0.1.0"
    }

    const styles = {
        chatButtonStyle: {
            scale: 0.7, bottom: '32px', right: '30px'
        }
    }

    return (
        <>
            <ChatBot
            flow={flow}
            themes={themes}
            settings={settings}
            styles={styles}
            />
        </>
    )
}

export default Chatbot