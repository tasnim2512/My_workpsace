"use client";
import Image from 'next/image';
import IssueContent from './IssueContent';

export default function IssueGrid({ issues }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 mt-4">
      {issues.map((issue, index) => (
        <div key={issue.id} 
          className="p-4 rounded-lg shadow-lg flex flex-col lg:flex-row justify-between items-start lg:items-center hover:bg-gray-mw-500 duration-200 border border-gray-mw-700">
          <div className="flex-1 mb-2 sm:mb-0">
            <IssueContent issue={issue} />
          </div>

          <div className="flex flex-row lg:flex-col items-center space-x-4 lg:pl-0 pl-4 mt-2 lg:mt-0">
            {index === 0 ? (
              <Image src="/images/assigne.png" alt="User Profile" width={16} height={16} />
            ) : (
              <Image src="/images/user-icon.svg" alt="Assignee Avatar" width={16} height={16} />
            )}
            <span className="text-gray-mw-200 text-xs mt-1 sm:mt-0">{issue.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
