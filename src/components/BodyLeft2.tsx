
import figma from '../assets/images/figma.png'
import adobeAI from '../assets/images/adobeAI.png'
import xd from '../assets/images/xd.png'


const BodyLeft2 = () => {
    return (
        <div className="w-[100%] border-b px-20 flex flex-row justify-start items-start gap-28 h-auto py-4">

             <div className="flex flex-col justify-center items-start">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Skills Required</h3>
                <div className="flex flex-col justify-center items-start gap-2">
                    <div className={`inline-flex items-center gap-1 border py-[2px] px-[4px] rounded text-xs font-medium`}>
                        <img src={figma} alt="" className='w-3 h-3' />
                        <span className='opacity-75'>Figma</span>
                    </div>
                    <div className={`inline-flex items-center gap-1 border py-[2px] px-[4px] rounded text-xs font-medium`}>
                        <img src={adobeAI} alt="" className='w-3 h-3' />
                        <span className='opacity-75'>Adobe Illustrator</span>
                    </div>
                    <div className={`inline-flex items-center gap-1 border py-[2px] px-[4px] rounded text-xs font-medium`}>
                        <img src={xd} alt="" className='w-3 h-3' />
                        <span className='opacity-75'>Adobe XD</span>
                    </div>
                </div>
            </div>

             <div className="flex flex-col justify-center items-start">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Preferred Language</h3>
                <span className='font-bold text-sm opacity-75'>English</span>
                
            </div>
             <div className="flex flex-col justify-center items-start">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Type</h3>
                <span className='font-bold text-sm opacity-75'>Full time</span>
                
            </div>
             <div className="flex flex-col justify-center items-start">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Years of Experience</h3>
                <span className='font-bold text-sm opacity-75'>3+ Years of Experience</span>
                
            </div>





        </div>
    )
}

export default BodyLeft2