function Message({ message, isUser = false }) {
    return (
        <>
            <div className={`message-container w-full flex ${!isUser ? 'justify-start' : 'justify-end' }`}>
                <div className={`message ${!isUser ? 'bg-gray-800' : 'bg-sky-500'} h-auto w-max p-4 rounded-md`}>
                    <p className="text-white">{message}</p>
                </div>
            </div>
        </>
    )
}

export default Message