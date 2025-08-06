import { useState, useEffect } from 'react'
import { Contact, GraduationCap, Home, LogIn, Map, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 820)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <div className="header-container w-full h-full flex justify-between items-center px-8 max-sm:px-4">
                <div className="header-left">
                    <h2 className="text-sky-500 font-bold text-2xl">Athena Sphere</h2>
                </div>
                <div className="header-right flex gap-8 items-center text-sm">
                    {!isMobile ? (
                        <>
                            <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">Inicio <Home className="size-4" /> </Link>
                            <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">AthenaEdu <GraduationCap className="size-4" /> </Link>
                            <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">Innovis <Map className="size-4" /></Link>
                            <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">Contacto <Contact className="size-4" /> </Link>
                            <button className="px-4 py-2 rounded-md bg-sky-600 text-white font-semibold hover:bg-sky-700 active:bg-sky-600 transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2">Iniciar Sesión <LogIn className="size-4" /> </button>
                        </>
                    ) : (
                        <>
                            <button onClick={toggleMobileMenu}>
                                <Menu />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {isMobileMenuOpen && (
                <>
                    <div className="mobile-menu-container w-full h-[40dvh] fixed top-0 bg-white z-100 rounded-br-xl rounded-bl-xl flex flex-col p-4">
                        <div className="menu-top flex justify-between items-center">
                            <div className="logo">
                                <h2 className="text-sky-500 font-bold text-2xl">Athena Sphere</h2>
                            </div>
                            <div className="close-menu-btn w-max self-end">
                                <button onClick={toggleMobileMenu}>
                                    <X />
                                </button>
                            </div>
                        </div>
                        <div className="links-list flex flex-col gap-4 h-full justify-evenly">
                            <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">Inicio <Home className="size-4" /> </Link>
                            <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">AthenaEdu <GraduationCap className="size-4" /> </Link>
                            <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">Innovis <Map className="size-4" /></Link>
                            <Link to="/" className="font-semibold text-slate-800 flex items-center gap-1">Contacto <Contact className="size-4" /> </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Header