import { FaChevronDown, FaCommentAlt, FaRegBell, FaSuitcase } from "react-icons/fa";
import logo from "../assets/images/logo.png"
import { FaHandHoldingDollar } from "react-icons/fa6";
const Head1 = () => {
    return (
        <div className="flex flex-row justify-between items-center w-full h-[8vh] px-8 border-b border-gray-200">
            <div className="flex flex-col justify-center items-center bg-[#89858266] px-4 py-2">
                <span className="text-[#DC4A2D] font-bold">Logo</span>
            </div>

            <div className="rounded-[36px] w-1/3 border border-gray-200 flex flex-row justify-between px-2 items-center h-[6.3vh]">

                <div className="flex flex-row justify-center items-center gap-2 hover:border px-3 h-[4.5vh] cursor-pointer rounded-full bg-[#DC4A2D] hover:text-white hover:opacity-100 ">
                    <FaSuitcase color="white" />
                    <span className=" font-medium text-[17px] text-white">Jobs</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 hover:border px-3 h-[4.5vh] cursor-pointer rounded-full hover:bg-[#DC4A2D] hover:text-white hover:opacity-100">
                    <div className="relative">
                        <FaCommentAlt />
                        <div className="w-[4px] h-[4px] rounded-full bg-[#e76d44] absolute -top-[2px] -right-[2px]"></div>
                    </div>
                    <span className="opacity-55 font-medium text-[17px] hover:text-white hover:opacity-10">Messages</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 hover:border px-3 h-[4.5vh] cursor-pointer rounded-full hover:bg-[#DC4A2D] hover:text-white hover:opacity-100">
                    <FaHandHoldingDollar />
                    <span className="opacity-55 font-medium text-[17px] hover:text-white hover:opacity-10">Payments</span>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center w-auto gap-4">
                <div className="relative">
                    <FaRegBell />
                    <div className="w-[4px] h-[4px] rounded-full bg-[#e76d44] absolute top-0 right-0"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-1">
                    <img src={logo} alt="Logo" className="w-6 h-6 rounded-full" />
                    <FaChevronDown className="font-light" />
                </div>
                

            </div>



        </div>
    )
}

export default Head1