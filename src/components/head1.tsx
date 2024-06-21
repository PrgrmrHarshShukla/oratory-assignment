import { FaRegBell } from "react-icons/fa";
import logo from "../assets/images/logo.png"


const Head1 = () => {
    return (
        <div className="flex flex-row justify-between items-center w-full h-[8vh] px-8 border-b border-gray-200">
            <div className="flex flex-col justify-center items-center rounded-[2px] bg-[#89858266] px-4 py-2">
                <span className="text-[#e76d44] font-bold">Logo</span>
            </div>

            <div className="rounded-full w-1/4 border border-gray-200 flex flex-row justify-around items-center h-[6vh]">
                <div>Jobs</div>
                <div>Messages</div>
                <div>Payments</div>
            </div>

            <div className="flex flex-row justify-center items-center w-auto gap-2">
                <div className="relative">
                    <FaRegBell />
                    <div className="w-[4px] h-[4px] rounded-full bg-[#e76d44] absolute top-0 right-0"></div>
                </div>
                <img src={logo} alt="Logo" className="w-6 h-6 rounded-full" />

            </div>



        </div>
    )
}

export default Head1