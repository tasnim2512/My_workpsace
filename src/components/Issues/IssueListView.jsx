
"use client";
import Image from 'next/image';
import IssueContent from './IssueContent';

export default function IssueList({ issues }) {
  return (
    <div className="space-y-1">
      {issues.map((issue, index) => (
        <div key={issue.id}
          className="px-2 py-[14px] flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-gray-mw-500 duration-200 border-b border-gray-mw-800">
          <IssueContent issue={issue} />

          <div className="flex items-center sm:items-center mt-2 sm:mt-0 space-x-2 sm:space-x-4 mr-8 w-full sm:w-auto sm:pl-0 pl-4">
            <span className="text-gray-mw-200 text-xs">{issue.date}</span>

            {index === 0 ? (
              <Image src="/images/assigne.png" alt="User Profile" width={14} height={14} />
            ) : (
              <Image src="/images/user-icon.svg" alt="Assignee Avatar" width={14} height={14} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}





