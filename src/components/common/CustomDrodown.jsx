"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function CustomDropdown({ label, dropdownIcon, workspaceIcon, items }) {
  const [isOpen, setIsOpen] = useState(true); 
  const [openSubmenu, setOpenSubmenu] = useState(0); 

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index); 
  };

  return (
    <div className="mt-6">
      <h3 className="mb-2 cursor-pointer" onClick={toggleDropdown}>
        <div className="flex items-center justify-start">
          <Image src={workspaceIcon} alt={label} width={18} height={18} />
          <span className="ml-3">{label}</span>
          <span className={`ml-3 transform transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
            <Image src={dropdownIcon} alt="dropdown_arrow" width={7} height={6} />
          </span>
        </div>
      </h3>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden  ${
          isOpen ? 'max-h-[180px]' : 'max-h-0'
        }`}
        style={{ transitionProperty: 'max-height' }}
      >
        {items.map((item, index) => (
          <div key={index}>
            <div
              className={`cursor-pointer flex items-center p-2 rounded-md h-[27px] transition-all duration-300 pl-[18px] ${
                openSubmenu === index ? 'bg-gray-mw-500 mb-0' : 'mb-2 hover:bg-gray-mw-500'
              }`}
              onClick={() => item.sublinks ? toggleSubmenu(index) : null}>
              <Image src={item.icon} alt={item.label} width={16} height={16} />
              <span className="ml-3">{item.label}</span>
            </div>

            {item.sublinks && openSubmenu === index && (
              <div className="ml-[25px] border-l border-gray-mw-300 pl-1 ">
                {item.sublinks.map((sublink, subIndex) => (
                  <SubNavLink key={subIndex} label={sublink} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SubNavLink({ label }) {
  return (
    <div className="py-2 px-3 rounded-md cursor-pointer h-[28px] flex items-center hover:text-gray-400 pl-[18px]">
      {label}
    </div>
  );
}
