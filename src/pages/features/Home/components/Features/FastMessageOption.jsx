function FastMessageOption({ icon, optionText }) {
    return (
        <>
        <div className="fast-message-option text-white w-max h-max px-2 py-1 rounded-md border border-sky-500 cursor-pointer hover:bg-sky-500 transition-colors duration-200 active:bg-sky-600 select-none">
            <p className="flex justify-center items-center gap-2">{icon}{optionText}</p>
        </div>
        </>
    )
}

export default FastMessageOption