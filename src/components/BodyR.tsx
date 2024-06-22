import { FaCommentAlt, FaEye, FaUserCheck, FaUsers } from "react-icons/fa"
import pen from "../assets/images/pen.png"
import bin from "../assets/images/bin.png"

const BodyR = () => {
    return (
        <div className="flex flex-col justify-start items-center w-1/4 h-auto min-h-[86vh] bg-[#FCFCFC]">

            <div className="flex flex-row justify-around w-full items-center my-4">
                <button className="px-4 py-2 text-red-500 border w-[172px] flex flex-row  justify-center items-center gap-2 border-red-500 rounded-[8px] bg-red-50">
                    <img src={bin} className="w-[16px] h-[16px]" />
                    <span className="text-[16px] text-[#DC4A2D]">Delete job</span>
                </button>
                <button className="px-4 py-2 text-white w-[172px] flex flex-row  justify-center items-center gap-2 bg-[#DC4A2D] rounded-[8px] hover:bg-red-600">
                    <img src={pen} className="w-[16px] h-[16px]" />
                    <span className="text-[16px]">Edit job</span>
                </button>
            </div>


            
            <div className="flex flex-row w-[90%] px-3 items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <FaUsers />
                <span className="text-[16px] font-medium">Applicants</span>
                </div>
                <span className="font-bold text-[20px] opacity-80">400</span>
            </div>
            <div className="flex flex-row w-[90%] px-3 items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <FaUserCheck />
                <span className="text-[16px] font-medium">Matches</span>
                </div>
                <span className="font-bold text-[20px] opacity-80">100</span>
            </div>
            <div className="flex flex-row w-[90%] px-3 items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <FaCommentAlt />
                <span className="text-[16px] font-medium">Messages</span>
                </div>
                <span className="font-bold text-[20px] opacity-80">147</span>
            </div>
            <div className="flex flex-row w-[90%] px-3 items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <FaEye />
                <span className="text-[16px] font-medium">Views</span>
                </div>
                <span className="font-bold text-[20px] opacity-80">800</span>
            </div>





        </div>
    )
}

export default BodyR
