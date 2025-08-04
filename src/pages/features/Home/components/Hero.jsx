import { ArrowBigDownIcon } from "lucide-react"

function Hero() {
    return (
        <>
            <div className="hero-container relative h-[90dvh] bg-sky-600 flex flex-col items-center justify-center gap-4">
                <div className="hero-text">
                    <h1 className="font-bold text-white text-6xl leading-normal">El Futuro de la <span className="animate-text">Inteligencia</span> Está Aquí</h1>
                </div>
                <div className="hero-description mb-6">
                    <p className="text-white max-w-[60ch] text-xl text-center">Athena Project redefine los límites de la tecnología con soluciones innovadoras</p>
                </div>
                <div className="hero-buttons flex gap-6 items-center justify-center">
                    <button className="rounded-full bg-linear-to-br from-sky-800 via-sky-600 to-sky-500 text-white font-semibold px-8 py-4 border border-sky-700 cursor-pointer">Conoce Innovis 🚀</button>
                    <button className="bg-sky-600 text-white border border-sky-700 rounded-full px-6 py-4 cursor-pointer hover:bg-sky-700 transition-colors duration-200">Explora AthenaEdu 🎓</button>
                </div>

                <div className="arrow-bottom absolute bottom-8 text-white animate-bounce">
                    <ArrowBigDownIcon className="size-8" />
                </div>
            </div>
        </>
    )
}

export default Hero