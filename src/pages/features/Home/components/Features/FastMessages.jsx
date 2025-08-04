import { Star, BriefcaseBusiness, Info } from "lucide-react"
import { fastMessagesOptions } from "../../data/features"
import FastMessageOption from "./FastMessageOption"

function FastMessage() {

    const iconsMap = { Star: <Star />, BriefcaseBusiness: <BriefcaseBusiness />, Info: <Info /> }
    
    return (
        <>
        <div className="fast-messages w-full h-auto flex gap-4">
            {fastMessagesOptions.map(option => <FastMessageOption key={option.id} icon={iconsMap[option.icon]} optionText={option.optionText} />)}
        </div>
        </>
    )
}

export default FastMessage