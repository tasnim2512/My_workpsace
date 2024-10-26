"use client";

export default function SkeletonList() {
  return (
    <div className="space-y-1">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div key={index} className="px-2 py-[14px] flex justify-between items-center bg-gray-800 animate-pulse">
          <div className="flex items-center space-x-2 ml-3 sm:ml-5 md:ml-6 lg:ml-8">
            <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
            <div className="h-3 w-16 bg-gray-700 rounded"></div>
            <div className="h-3 w-40 bg-gray-700 rounded ml-3"></div>
          </div>
          <div className="flex items-center space-x-4 mr-8">
            <div className="h-3 w-10 bg-gray-700 rounded"></div>
            <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
