"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import GridIconSvg from './icon/GridIconSvg';
import ListIconSvg from './icon/ListIconSvg';
import FilterDropdown from './FilterDropdown';

export default function Header({ isGridView, setIsGridView, toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilterDropdown = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // closing filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start lg:items-center px-4 sm:px-5 md:px-6 lg:px-8 py-3 w-full">

      {/* menu and heading title */}
      <div className="flex items-center space-x-4 mb-2 lg:mb-0">
        <button className="p-2 lg:hidden" onClick={toggleSidebar}>
          <Image src="/images/hamburger-menu.svg" alt="Menu" width={14} height={14} />
        </button>
        <h1 className="text-13 font-medium">All Issues</h1>

        {/* add to wishlist button */}
        <button className="cursor-pointer pl-2">
          <Image src="/images/star-icon.svg" alt="Star" width={14} height={14} />
        </button>

        {/* filter button */}
        <div className="relative" ref={filterRef}>
          <button className="flex items-center border border-dashed border-gray-mw-300 duration-200 hover:bg-gray-mw-500 text-xs px-2 py-1 rounded-sm" onClick={toggleFilterDropdown}>
            <Image src="/images/plus-icon.svg" alt="Plus" width={8} height={8} className="mr-2" />
            Filter
          </button>
          <FilterDropdown isOpen={isFilterOpen} toggleFilterDropdown={toggleFilterDropdown} />
        </div>
      </div>


      <div className="flex items-center sm:space-x-2 space-x-4 w-full sm:w-auto ml-11 sm:ml-0 my-2 sm:my-0">
        {/* grid and list view toggle button */}
        <div className="flex items-center bg-gray-mw-600 rounded-sm">
          <div className="flex items-center">
            <button onClick={() => setIsGridView(false)} className={`flex items-center justify-center px-2 py-1 rounded-sm transition-colors duration-300
               ${!isGridView ? 'bg-gray-mw-700 border-gray-mw-300' : 'bg-gray-mw-600'}`}>
              <ListIconSvg fillColor={!isGridView ? "#D2D3E0" : "#4C4F6B"} />
            </button>
          </div>
          <div className="flex items-center">
            <button onClick={() => setIsGridView(true)} className={`flex items-center justify-center px-2 py-1 rounded-sm border transition-all duration-300 
              ${isGridView ? 'bg-gray-mw-700 border-gray-mw-300' : 'bg-gray-mw-600 border-transparent'}`}>
              <GridIconSvg fillColor={isGridView ? "#D2D3E0" : "#4C4F6B"} />
            </button>
          </div>
        </div>

        {/* dropdown to show list/grid view */}
        <div className="relative w-[82px]">
          <button className="flex items-center text-xs p-2 h-[24px] rounded-sm bg-gray-mw-700  duration-200 hover:bg-gray-mw-500 border border-gray-mw-300"
            onClick={toggleDropdown}>
            <Image src="/images/adjust-icon.svg" alt="Adjust" width={14} height={14} className="mr-2" />
            View
            <Image src="/images/down-arrow.svg" alt="Dropdown Arrow" width={7} height={7} className="ml-1" />
          </button>

          {isOpen && (
            <div className="absolute mt-2 w-24 bg-gray-mw-600 border border-gray-700 rounded-lg shadow-lg">
              <ul className="py-2 text-xs">
                <li className="p-2 hover:bg-gray-mw-500 cursor-pointer"
                  onClick={() => { setIsGridView(false); toggleDropdown() }}>
                  List
                </li>
                <li className="p-2 hover:bg-gray-mw-500 cursor-pointer"
                  onClick={() => { setIsGridView(true); toggleDropdown() }}>
                  Grid
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
