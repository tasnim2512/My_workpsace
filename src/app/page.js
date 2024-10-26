"use client";
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    // function to check if the screen size is large
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      if (!isLarge) {
        setIsSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`flex-1 transition-all duration-300 ease-in-out z-20 relative bg-gray-mw-50
           ${isSidebarOpen && !isLargeScreen ? 'ml-[220px]' : 'ml-0'} lg:ml-[220px]`}>
        <MainContent toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
}
