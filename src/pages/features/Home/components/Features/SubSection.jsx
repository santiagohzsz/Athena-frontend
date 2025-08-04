import { ArrowRight } from "lucide-react"

function SubSection({ title, description, options, image, className }) {
    return (
        <>
        <div className={`subsection w-6xl flex items-center justify-between gap-12 ${className}`}>
            <div className="subsection-left w-1/2 flex flex-col gap-6">
                <div className="subsection-text flex flex-col gap-2">
                    <h3 className="font-semibold text-3xl leading-normal">{title}</h3>
                    <p className="text-neutral-400">{description}</p>
                </div>
                <ul className="flex flex-col gap-2">
                    {options.map((option, i) => <li key={i} className="list-inside mask-linear-to-stone-200 list-disc marker:text-sky-500">{option}</li>)}
                </ul>
                <div className="cta-button">
                    <button className="bg-sky-500 rounded-md px-4 py-2 text-white flex justify-center items-center gap-2 cursor-pointer active:bg-sky-600 transition-colors duration-200">Ver Plataforma <ArrowRight /></button>
                </div>
            </div>
            <div className="subsection-right w-1/2 border border-sky-500 h-100 rounded-lg">
                <img src={image ? image : '/placeholder.svg'} className="w-full h-full object-cover rounded-lg"/>
            </div>
        </div>
        </>
    )
}

export default SubSection