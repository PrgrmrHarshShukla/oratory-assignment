

const Head2 = ({ activeTab }: { activeTab: string }) => {

    const tabs = ['Job preview', 'Applicants', 'Match', 'Messages'];


    return (
        <div className="flex flex-row justify-start items-center w-full h-[6vh] px-20 border-b border-gray-200">
            <div className="flex flex-row justify-center items-center gap-24 h-full">
            {tabs.map((tab: string, index: number) => (
                <div key={index} 
                    className={`h-full flex flex-col justify-center items-center ${
                        activeTab === tab
                        ? 'text-[#DC4A2D] border-b-2 border-red-500 font-medium'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    {tab}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Head2
