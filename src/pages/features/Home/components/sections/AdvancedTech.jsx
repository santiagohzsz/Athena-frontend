import { subSectionDataSecurity, subSectionNeuronArchitecture } from "../../data/features"
import SubSection from "../Features/SubSection"

function AdvancedTech() {
    return (
        <>
        <div className="advanced-tech min-h-[70dvh] flex flex-col items-center w-6xl mx-auto py-20 max-xl:w-full ">
            <div className="advanced-tech-title flex flex-col gap-2">
                <h2 className="text-4xl font-semibold text-center leading-normal">Tecnología <span className="text-sky-500">Avanzada</span></h2>
                <p className="text-center text-neutral-400">Innovación en cada componente</p>
            </div>
            <div className="neurons my-12 w-full">
                <SubSection title={subSectionNeuronArchitecture.title} description={subSectionNeuronArchitecture.description} options={subSectionNeuronArchitecture.options} />
            </div>
            <div className="data-security my-12 w-full">
                <SubSection title={subSectionDataSecurity.title} description={subSectionDataSecurity.description} options={subSectionDataSecurity.options} className="flex-row-reverse" />
            </div>
        </div>
        </>
    )
}

export default AdvancedTech