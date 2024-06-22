import { FaChevronDown, FaCommentAlt, FaRegBell, FaSuitcase } from "react-icons/fa";
import logo from "../assets/images/logo.png"
import { FaHandHoldingDollar } from "react-icons/fa6";
const Head1 = () => {
    return (
        <div className="flex flex-row justify-between items-center w-full h-[8vh] px-8 border-b border-gray-200">
            <div className="flex flex-col justify-center items-center rounded-[2px] bg-[#89858266] px-4 py-2">
                <span className="text-[#e76d44] font-bold">Logo</span>
            </div>

            <div className="rounded-full w-1/4 border border-gray-200 flex flex-row justify-between px-2 items-center h-[6vh]">
                <div className="flex flex-row justify-center items-center gap-2 border px-2 h-[4.5vh] cursor-pointer rounded-full bg-[#e5604f] hover:text-white hover:opacity-100">
                    <FaSuitcase />
                    <span className="opacity-55 font-semibold text-sm hover:text-white hover:opacity-100">Jobs</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 border px-2 h-[4.5vh] cursor-pointer rounded-full hover:bg-[#e5604f] hover:text-white hover:opacity-100">
                    <div className="relative">
                        <FaCommentAlt />
                        <div className="w-[4px] h-[4px] rounded-full bg-[#e76d44] absolute -top-[2px] -right-[2px]"></div>
                    </div>
                    <span className="opacity-55 font-semibold text-sm hover:text-white hover:opacity-100">Messages</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 border px-2 h-[4.5vh] cursor-pointer rounded-full hover:bg-[#e5604f] hover:text-white hover:opacity-100">
                    <FaHandHoldingDollar />
                    <span className="opacity-55 font-semibold text-sm hover:text-white hover:opacity-100">Payments</span>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center w-auto gap-4">
                <div className="relative">
                    <FaRegBell />
                    <div className="w-[4px] h-[4px] rounded-full bg-[#e76d44] absolute top-0 right-0"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-1">
                    <img src={logo} alt="Logo" className="w-6 h-6 rounded-full" />
                    <FaChevronDown color="" className="font-normal" />
                </div>
                

            </div>



        </div>
    )
}

export default Head1