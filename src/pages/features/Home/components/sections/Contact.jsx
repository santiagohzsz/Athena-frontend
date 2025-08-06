import { SendHorizonalIcon } from "lucide-react"

function Contact() {
    return (
        <>
        <div className="contact-container w-full flex flex-col gap-2 items-center h-auto py-20 max-xl:px-4 bg-sky-500">
            <div className="contact-text">
                <h2 className="text-4xl text-white font-bold text-center leading-normal">Contáctanos</h2>
                <p className="text-neutral-700">Rellena el formulario para contactarnos</p>
            </div>
            <div className="contact-form w-3xl max-xl:w-full bg-white rounded-xl p-4">
                <form onSubmit={e => e.preventDefault()} className="flex flex-col items-center justify-center w-full gap-8">
                    <div className="name w-full flex flex-col gap-1">
                        <label htmlFor="name" className="font-semibold">Nombre</label>
                        <input type="text" id="name" name="name" className="w-full border border-neutral-400 px-2 rounded-md h-10 outline-0" placeholder="Jhon Doe" />
                    </div>
                    <div className="email w-full flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Correo</label>
                        <input name="email" id="email" type="text" className="w-full border border-neutral-400 px-2 rounded-md h-10 outline-0" placeholder="ejemplo@dominio.com" />
                    </div>
                    <div className="interest w-full flex flex-col gap-1">
                        <label htmlFor="interest" className="font-semibold">Interés</label>
                        <select id="interest" name="interest" className="h-10 border border-neutral-400 rounded-md w-full outline-0 px-2">
                            <option value="">Interés en...</option>
                            <option value="innovis">Athena Innovis</option>
                            <option value="edu">AthenaEdu</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                    <div className="message w-full flex flex-col gap-1">
                        <label htmlFor="contact-message" className="font-semibold">Mensaje</label>
                        <textarea name="contact-message" id="contact-message"className="w-full border border-neutral-400 p-2 rounded-md h-20 outline-0" placeholder="Tu mensaje..." />
                    </div>
                    <div className="send-button w-full flex flex-col gap-1">
                        <button type="submit" className="text-white font-semibold bg-sky-500 rounded-lg px-4 py-2 flex justify-center items-center gap-2 outline-0 h-12 cursor-pointer active:bg-sky-600 transition-colors duration-200">
                            Enviar mensaje <SendHorizonalIcon/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact