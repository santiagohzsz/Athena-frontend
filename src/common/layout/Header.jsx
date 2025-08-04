import { Contact, GraduationCap, Home, LogIn, Map } from "lucide-react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
        <div className="header-container w-full h-full flex justify-between items-center px-8">
            <div className="header-left">
                <h2 className="text-sky-500 font-bold text-2xl">Athena Sphere</h2>
            </div>
            <div className="header-right flex gap-8 items-center text-sm">
                <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">Inicio <Home className="size-4" /> </Link>
                <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">AthenaEdu <GraduationCap className="size-4" /> </Link>
                <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">Innovis <Map className="size-4" /></Link>
                <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">Contacto <Contact className="size-4" /> </Link>
                <button className="px-4 py-2 rounded-md bg-sky-600 text-white font-semibold hover:bg-sky-700 active:bg-sky-600 transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2">Iniciar Sesión <LogIn className="size-4" /> </button>
            </div>
        </div>
        </>
    )
}

export default Header