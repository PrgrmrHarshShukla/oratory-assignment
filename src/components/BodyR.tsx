import { FaCommentAlt, FaEye, FaPen, FaUserCheck, FaUsers } from "react-icons/fa"
import { FaTrashCan } from "react-icons/fa6"

const BodyR = () => {
    return (
        <div className="flex flex-col justify-start items-center w-1/6 h-auto min-h-[86vh] bg-[#fcffff]">

            <div className="flex flex-row justify-around w-full items-center my-8">
                <button className="px-4 py-1 text-red-500 border w-auto flex flex-row  justify-center items-center gap-2 border-red-500 rounded bg-red-50">
                    <FaTrashCan size={10} />
                    <span className="text-[12px]">Delete job</span>
                </button>
                <button className="px-4 py-1 text-white w-auto flex flex-row  justify-center items-center gap-2 bg-red-500 rounded hover:bg-red-600">
                    <FaPen size={10} />
                    <span className="text-[12px]">Edit job</span>
                </button>
            </div>


            
            <div className="flex flex-row w-[80%] items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <FaUsers />
                <span className="text-[13px] font-medium">Applicants</span>
                </div>
                <span className="font-bold opacity-80">400</span>
            </div>
            <div className="flex flex-row w-[80%] items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <FaUserCheck />
                <span className="text-[13px] font-medium">Matches</span>
                </div>
                <span className="font-bold opacity-80">100</span>
            </div>
            <div className="flex flex-row w-[80%] items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <FaCommentAlt />
                <span className="text-[13px] font-medium">Messages</span>
                </div>
                <span className="font-bold opacity-80">147</span>
            </div>
            <div className="flex flex-row w-[80%] items-center justify-between border-b py-4">
                <div className="flex flex-row justify-center gap-2 items-center text-gray-600">
                <FaEye />
                <span className="text-[13px] font-medium">Views</span>
                </div>
                <span className="font-bold opacity-80">800</span>
            </div>





        </div>
    )
}

export default BodyR
