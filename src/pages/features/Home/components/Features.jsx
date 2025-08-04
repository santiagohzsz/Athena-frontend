import Card from "@/common/components/Card"
import Demo from "./Features/Demo"
import { abilities, features, subSectionAthenaEdu } from "../data/features"
import { Brain, Zap, ShieldHalf, ChartLine, Bot, ArrowRightCircle } from "lucide-react"
import SubSection from "./Features/SubSection"

function Features() {

    const iconsFeatMap = { Brain: <Brain className="size-10 text-sky-600" />, Zap: <Zap className="size-10 text-sky-600" />, ShieldHalf: <ShieldHalf className="size-10 text-sky-600" /> }
    const iconsAbilitiesMap = { Brain: <Brain className="size-10 text-sky-600" />, ChartLine: <ChartLine className="size-10 text-sky-600" />, Bot: <Bot className="size-10 text-sky-600" />  }

    return (
        <>
            <div className="demo-container min-h-[70dvh] flex flex-col items-center py-12 bg-neutral-100">
                <div className="demo-title flex flex-col items-center justify-center gap-2">
                    <h2 className="text-4xl text-center font-semibold leading-normal">Athena <span className="text-sky-500">Innovis</span></h2>
                    <p className="text-neutral-400 text-[18px]">Tu asistente de IA de próxima generación</p>
                </div>
                <div className="demo-ai mb-18">
                    <Demo />
                </div>
                <div className="features-content flex flex-col gap-8 items-center mb-20">
                    <div className="features-content-text flex flex-col items-center justify-center gap-2">
                        <h3 className="leading-normal text-3xl font-semibold text-center">Nuestras <span className="text-sky-500">Funcionalidades Clave</span></h3>
                        <p className="text-xl text-neutral-400 text-center">Conoce nuestras funcionalidades destacadas</p>
                    </div>
                    <div className="card-features grid grid-cols-3 gap-6">
                        {features.map(feat => <Card key={feat.id} icon={iconsFeatMap[feat.icon]} title={feat.title} description={feat.description} />)}
                    </div>
                </div>
                <div className="abilities-content flex flex-col gap-8 items-center w-6xl mb-20">
                    <div className="features-content-text flex flex-col items-center justify-center gap-2">
                        <h3 className="leading-normal text-3xl font-semibold text-center">Nuestras <span className="text-sky-500">Habilidades Clave</span></h3>
                        <p className="text-xl text-neutral-400 text-center">Conoce nuestras habilidades destacadas</p>
                    </div>
                    <div className="card-features grid grid-cols-3 gap-6">
                        {abilities.map(feat => <Card key={feat.id} icon={iconsAbilitiesMap[feat.icon]} title={feat.title} description={feat.description} />)}
                    </div>
                    <button className="bg-sky-500 rounded-md px-4 py-2 text-white flex justify-center items-center gap-2 cursor-pointer font-semibold active:bg-sky-600 transition-colors duration-200">Solicitar Demo <ArrowRightCircle /></button>
                </div>
                <div className="athena-edu">
                    <SubSection title={subSectionAthenaEdu.title} description={subSectionAthenaEdu.description} options={subSectionAthenaEdu.options} />
                </div>
            </div>
        </>
    )
}

export default Features