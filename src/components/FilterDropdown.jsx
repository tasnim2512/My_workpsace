import React from 'react';
import CustomCheckbox from './common/CustomCheckbox';
import CustomInput from './common/CustomInput';

export default function FilterDropdown({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full mt-2 w-64 bg-gray-mw-600 border border-gray-700 rounded-lg shadow-lg p-4 z-10">
      <div className="mb-4">
        <CustomInput
          type="text"
          placeholder="Enter a keyword..."
          className="w-full p-2 text-xs" />
      </div>

      <div className="mb-4">
        <h3 className="text-xs mb-2">Members</h3>
        <CustomCheckbox label="No members" />
        <CustomCheckbox label="Cards assigned to me" className="mt-2" />
        <CustomCheckbox label="Select members" className="mt-2" />
      </div>

      <div className="mb-4">
        <h3 className="text-xs mb-2">Due date</h3>
        <CustomCheckbox label="No dates" />
        <CustomCheckbox label="Overdue" className="mt-2" />
        <CustomCheckbox label="Due in the next day" className="mt-2" />
      </div>

      <div className="mb-4">
        <h3 className="text-xs mb-2">Labels</h3>
        <CustomCheckbox label="No labels" />
      </div>

      <div>
        <h3 className="text-xs mb-2">Activity</h3>
        <CustomCheckbox label="Active in the last week" />
        <CustomCheckbox label="Active in the last two weeks" className="mt-2" />
        <CustomCheckbox label="Active in the last four weeks" className="mt-2" />
      </div>
    </div>
  );
}
