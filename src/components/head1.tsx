import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/images/logo.png"
import { BellIcon, Briefcase, MessageSquare } from "lucide-react";
import { PiHandCoins } from "react-icons/pi";
const Head1 = () => {
    return (
        <div className="flex flex-row justify-between items-center w-full h-[8vh] px-8 border-b border-gray-200">
            <div className="flex flex-col justify-center items-center bg-[#89858266] px-4 py-2">
                <span className="text-[#DC4A2D] font-bold">Logo</span>
            </div>

            <div className="rounded-[36px] w-1/3 border border-gray-200 flex flex-row justify-between px-2 items-center h-[6.3vh]">

                <div className="flex flex-row justify-center items-center text-white gap-2 hover:border px-3 h-[4.5vh] cursor-pointer rounded-full bg-[#DC4A2D] hover:text-white hover:opacity-100 ">
                    <Briefcase size={17} />
                    <span className=" font-medium text-[17px]">Jobs</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 hover:border px-3 h-[4.5vh] cursor-pointer rounded-full hover:bg-[#DC4A2D] hover:text-white hover:opacity-100">
                    <div className="relative">
                        <MessageSquare className="text-[#B0B0B0]" size={17} />
                        <div className="w-[4px] h-[4px] rounded-full bg-[#e76d44] absolute -top-[2px] -right-[2px]"></div>
                    </div>
                    <span className=" font-medium text-[#B0B0B0] text-[17px] hover:text-white hover:opacity-100">Messages</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 hover:border px-3 h-[4.5vh] cursor-pointer rounded-full hover:bg-[#DC4A2D] hover:text-white hover:opacity-100">
                    <PiHandCoins className="text-[#B0B0B0]" size={17} />
                    <span className=" font-medium text-[#B0B0B0] text-[17px] hover:text-white hover:opacity-100">Payments</span>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center w-auto gap-4">
                <div className="relative">
                    <BellIcon size={17} />
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