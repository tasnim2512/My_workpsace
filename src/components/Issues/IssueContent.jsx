"use client";
import PriorityIcon from './PriorityIcon';
import StatusIcon from './StatusIcon';

export default function IssueContent({ issue }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 space-x-0 sm:space-x-2 ml-3 sm:ml-5 md:ml-6 lg:ml-8">
      <div className="flex items-center space-x-2">
        <PriorityIcon priority={issue.priority} />
        <span className="text-gray-mw-200 text-xs">{issue.id}</span>
      </div>

      <div className="sm:pl-3 pl-0 flex items-center space-x-2 mt-2 sm:mt-0">
        <StatusIcon status={issue.status} />
        <h3 className="text-13 font-medium ">{issue.title}</h3>
      </div>
    </div>
  );
}
