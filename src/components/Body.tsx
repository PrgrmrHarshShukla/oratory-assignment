import BodyL from "./BodyL"
import BodyR from "./BodyR"


const Body = () => {
    return (
        <div className="flex flex-row justify-start items-start w-full h-auto min-h-[86vh]">
            <BodyL />
            <BodyR />
        </div>
    )
}

export default Body
