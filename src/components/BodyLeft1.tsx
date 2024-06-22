import { FaCoins, FaMapMarkerAlt } from "react-icons/fa"

const BodyLeft1 = ({postedDays, salary, location, isOpen, title}: {
    postedDays: number,
    salary: string,
    location: string,
    isOpen: boolean,
    title: string
}) => {
    return (
        <div className="w-[100%] border-b px-20 flex flex-col justify-center items-start gap-4 py-6">
            <div className="flex flex-row justify-start items-center gap-4">
                <h1 className="text-[35px] font-bold text-[#3D3D3D]">{title}</h1>

                <span className="opacity-30">•</span>
                
                <span className="text-sm text-[#888888] font-medium">posted {postedDays} days ago </span> 
                <div className={`flex flex-row justify-center items-center gap-[2px] border border-[#ABEFC6] rounded-full font-semibold opacity-100 px-2 py-0  ${isOpen ? 'text-[#067647] bg-[#ECFDF3]' : 'text-red-500'} h-[25px]`}>
                    <span className="pb-[4px] text-[20px] ">•</span>
                    <span className="pb-[0px] text-[12px]">{isOpen ? 'Open' : 'Closed'}</span>
                </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-2">
                <div className="flex flex-row justify-center items-center gap-2 text-[#5D5D5D]">
                    <FaMapMarkerAlt />
                    <span className="mr-4 text-[#5D5D5D] text-[15px] font-medium">{location}</span>
                </div>
                <span className="opacity-50 mr-4">•</span>
                <div className="flex flex-row justify-center items-center gap-2 text-[#5D5D5D]">
                    <FaCoins />
                    <span className="mr-4 text-[#5D5D5D] text-[15px] font-medium">{salary}</span>
                </div>
            </div>

        </div>
    )
}

export default BodyLeft1