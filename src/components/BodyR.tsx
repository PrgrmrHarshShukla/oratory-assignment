
import pen from "../assets/images/pen.png"
import bin from "../assets/images/bin.png"
import { Eye, MessageSquare, UserCheck2Icon, Users } from "lucide-react"

const BodyR = () => {
    return (
        <div className="flex flex-col justify-start items-center w-1/4 h-auto min-h-[150vh] shadow-md border-l bg-[#FCFCFC]">

            <div className="flex flex-row justify-center gap-4 w-full items-center my-8 mb-6">
                <button className="px-4 py-2 text-red-500 border w-[164px] flex flex-row  justify-center items-center gap-2 border-red-500 rounded-[8px] bg-red-50">
                    <img src={bin} className="w-[16px] h-[16px]" />
                    <span className="text-[16px] text-[#DC4A2D]">Delete job</span>
                </button>
                <button className="px-4 py-2 text-white w-[164px] flex flex-row  justify-center items-center gap-2 bg-[#DC4A2D] rounded-[8px] hover:bg-red-600">
                    <img src={pen} className="w-[16px] h-[16px]" />
                    <span className="text-[16px]">Edit job</span>
                </button>
            </div>


            
            <div className="flex flex-row w-[85%] px-3 items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                
                <Users size={17} />
                <span className="text-[16px] font-medium text-[#4F4F4F]">Applicants</span>
                </div>
                <span className="font-l600 text-[20px] text-[#3D3D3D] ">400</span>
            </div>
            <div className="flex flex-row w-[85%] px-3 items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                
                <UserCheck2Icon size={17} />
                <span className="text-[16px] font-medium text-[#4F4F4F]">Matches</span>
                </div>
                <span className="font-l600 text-[20px] text-[#3D3D3D] ">100</span>
            </div>
            <div className="flex flex-row w-[85%] px-3 items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <MessageSquare size={17} />
                <span className="text-[16px] font-medium text-[#4F4F4F]">Messages</span>
                </div>
                <span className="font-l600 text-[20px] text-[#3D3D3D] ">147</span>
            </div>
            <div className="flex flex-row w-[85%] px-3 items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <Eye size={17} />
                <span className="text-[16px] font-medium text-[#4F4F4F]">Views</span>
                </div>
                <span className="font-l600 text-[20px] text-[#3D3D3D] ">800</span>
            </div>





        </div>
    )
}

export default BodyR
