function Message({ message, isUser = false, isLoading = false }) {
    return (
        <>
            <div className={`message-container w-full flex ${!isUser ? 'justify-start' : 'justify-end'}`}>
                <div className={`message ${!isUser ? 'bg-gray-800' : 'bg-sky-500'} h-auto w-max p-4 rounded-md`}>
                    {isLoading ? (
                        <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                    ) : (
                        <p className="text-white max-sm:text-sm">{message}</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Message