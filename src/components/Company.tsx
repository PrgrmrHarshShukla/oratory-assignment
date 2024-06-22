import React from 'react';
import logo from '../assets/images/logo.png';

interface CompanyDetail {
  label: string;
  value: string;
}

interface AtlassianDescriptionProps {
  companySize: string;
  type: string;
  sector: string;
  funding: string;
  foundedYear: string;
  founders: string[];
}

const Company: React.FC<AtlassianDescriptionProps> = ({
  companySize,
  type,
  sector,
  funding,
  foundedYear,
  founders
}) => {
  const details: CompanyDetail[] = [
    { label: 'Company size', value: companySize },
    { label: 'Type', value: type },
    { label: 'Sector', value: sector },
    { label: 'Funding', value: funding },
    { label: 'Founded in', value: foundedYear },
    { label: 'Founded By', value: founders.join(', ') }
  ];

  return (
    <div className=" border-gray-200 w-full px-20 py-6 mb-20">
      <div className="flex items-center mb-4 gap-2">
          <img src={logo} className='rounded-[5px] w-8 h-8' />
        <h2 className="text-[20px] font-medium text-[#4F4F4F]">Atlassian</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {details.map((detail, index) => (
          <div key={index} className="flex flex-col ">
            <span className="text-[14px] font-medium text-[#6E6D6D]">{detail.label}</span>
            <span className="font-medium text-[#3D3D3D]">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;