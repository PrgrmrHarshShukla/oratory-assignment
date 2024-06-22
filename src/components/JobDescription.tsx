const JobDescription = ({ description, benefits, schedule, payTypes, workLocation }: {
    description: string[];
    benefits: string[];
    schedule: string[];
    payTypes: string[];
    workLocation: string;
  
}) => {
    return (
      <div className="flex flex-col justify-center items-start w-full px-20 border-b h-auto py-6">
        <div>
          <h1  className="text-[14px] font-semibold mb-2 opacity-70">About the job</h1>
          {description.map((item, index) => (
            <p key={index} className=" text-[16px] text-[#3D3D3D] font-medium leading-relaxed">{item}</p>
          ))}
        </div>

        <div className="w-full my-[1px]"></div>
        
        <Section title="Benefits:">
          <ul className="list-disc list-inside text-[#3D3D3D] font-medium ml-2 text-[16px]  leading-relaxed">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </Section>
        
        <div className="w-full my-[1px]"></div>

        <Section title="Schedule:">
          <ul className="list-disc list-inside text-[#3D3D3D] font-medium ml-2 text-[16px]">
            {schedule.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>
        <div className="w-full my-[1px]"></div>
        
        <Section title="Supplemental pay types:">
          <ul className="list-disc  list-inside text-[#3D3D3D] font-medium ml-2 text-[16px]">
            {payTypes.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </Section>
        
        <div className="w-full my-[1px]"></div>
        
        <p className="text-[#3D3D3D] font-medium text-[16px]">Work Location: {workLocation}</p>
        
      </div>
    );
  };
  
  const Section = ({ title, children }: {
    title: string;
    children: React.ReactNode;
  
  }) => {
    return (
      <div>
        <h3 className="text-[16px] font-medium text-[#3D3D3D] leading-relaxed">{title}</h3>
        {children}
      </div>
    );
  };
  
  export default JobDescription;