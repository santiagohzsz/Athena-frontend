import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Home from "@/pages/features/Home/pages/Home"
import Chatbot from "./Chatbot"

function Layout() {
    const location = useLocation()
    return (
        <>
        <main className="flex flex-col relative">
            <nav className="w-full h-14">
                <Header />
            </nav>
            <section className="main-content flex-1">
                {location.pathname === '/' ? <Home /> : <Outlet />}
            </section>
            <footer className="w-full">
                <Footer />
            </footer>
            <div className="chatbot w-full absolute right-4 bottom-4">
                <Chatbot />
            </div>
        </main>
        </>
    )
}

export default Layout