import { Github, Linkedin, Twitter, Youtube } from "lucide-react"

function Footer() {
    return (
        <>
            <div className="footer w-full py-20 flex justify-center items-center text text-white bg-neutral-900 pl-22 pr-8 max-lg:pl-10 max-md:flex-col-reverse gap-12">
                <div className="athena-project w-[40%] flex flex-col gap-2 max-md:w-max max-md:items-center">
                    <img src="athena-project.svg" alt="Athena Project" />
                    <p className="text-neutral-400 max-md:text-center">Innovando el futuro con inteligencia artificial.</p>
                    <ul className="flex gap-4 text-neutral-400 mt-4">
                        <li className="hover:text-white cursor-pointer"><Twitter /></li>
                        <li className="hover:text-white cursor-pointer"><Linkedin /></li>
                        <li className="hover:text-white cursor-pointer"><Github /></li>
                        <li className="hover:text-white cursor-pointer"><Youtube /></li>
                    </ul>
                </div>
                <div className="second-grid grid grid-cols-3 w-[60%] max-md:grid-cols-1 gap-6">
                    <div className="products flex flex-col gap-2 max-md:items-center">
                        <h4 className="font-semibold">Productos</h4>
                        <ul className="flex flex-col gap-2 text-neutral-400">
                            <li><a href="#">Athena Innovis</a></li>
                            <li><a href="#">AthenaEdu</a></li>
                            <li><a href="#">AthenaHealth</a></li>
                            <li><a href="#">AthenaBiz</a></li>
                        </ul>
                    </div>
                    <div className="resources flex flex-col gap-2 max-md:items-center">
                        <h4 className="font-semibold">Resources</h4>
                        <ul className="flex flex-col gap-2 text-neutral-400">
                            <li><a href="#">Documentación</a></li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Soporte</a></li>
                        </ul>
                    </div>
                    <div className="company flex flex-col gap-2 max-md:items-center">
                        <h4 className="font-semibold">Compañía</h4>
                        <ul className="flex flex-col gap-2 text-neutral-400">
                            <li><a href="#">Nosotros</a></li>
                            <li><a href="#">Carreras</a></li>
                            <li><a href="#">Privacidad</a></li>
                            <li><a href="#">Términos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright flex justify-center items-center text-neutral-400 bg-neutral-900 border-t border-t-neutral-800 py-6 flex-col gap-4">
                <p className="text-sm max-sm:text-center">&copy; 2025 Athena Project. Todos los derechos reservados</p>
                <p className="text-sm max-sm:text-center">Made By <a href="https://github.com/JunLovin" target="_blank" className="underline">JunLovin</a> - from <a href="https://syntax-world-workspace.vercel.app" target="_blank" className="underline">Syntax World</a> with ♥️</p>
            </div>
        </>
    )
}

export default Footer