function Card({ icon, title, description }) {
    return (
        <>
        <div className="card-container w-full px-4 py-6 rounded-lg bg-white flex flex-col gap-4 shadow-xl shadow-neutral-300 hover:scale-[1.01] transition-all duration-200">
            <div className="card-icon">
                {icon}
            </div>
            <div className="card-text">
                <h4 className="text-2xl font-semibold leading-normal">{title}</h4>
                <p className="text-neutral-400 my-2">{description}</p>
            </div>
        </div>
        </>
    )
}

export default Card