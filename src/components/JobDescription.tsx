const JobDescription = ({ description, benefits, schedule, payTypes, workLocation }: {
    description: string[];
    benefits: string[];
    schedule: string[];
    payTypes: string[];
    workLocation: string;
  
}) => {
    return (
      <div className="flex flex-col justify-center items-start w-full px-20 border-b h-auto py-6">
        <Section title="About the job">
          {description.map((item, index) => (
            <p key={index} className="text-black text-[13px] font-semibold opacity-80">{item}</p>
          ))}
        </Section>
        
        <Section title="Benefits:">
          <ul className="list-disc list-inside font-semibold opacity-80 text-black ml-2 text-[13px]">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </Section>
        
        <Section title="Schedule:">
          <ul className="list-disc list-inside font-semibold opacity-80 text-black ml-2 text-[13px]">
            {schedule.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Section>
        
        <Section title="Supplemental pay types:">
          <ul className="list-disc font-semibold opacity-80 list-inside text-black ml-2 text-[13px]">
            {payTypes.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </Section>
        
        
        <p className="text-black font-bold opacity-70 text-[12px]">Work Location: {workLocation}</p>
        
      </div>
    );
  };
  
  const Section = ({ title, children }: {
    title: string;
    children: React.ReactNode;
  
  }) => {
    return (
      <div>
        <h3 className="text-[12px] font-bold opacity-70">{title}</h3>
        {children}
      </div>
    );
  };
  
  export default JobDescription;