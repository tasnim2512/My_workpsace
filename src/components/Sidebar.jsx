"use client";
import CustomDropdown from './common/CustomDrodown';
import { useState } from 'react';
import Image from 'next/image';
import DynamicNote from './common/DynamicNote';
import CustomInput from './common/CustomInput';

export default function Sidebar() {
  const [isNoteVisible, setIsNoteVisible] = useState(true);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const closeNote = () => setIsNoteVisible(false);

  return (
    <div
      className="absolute bg-gray-mw-50 transform transition-all duration-300 ease-in-out w-[220px] inset-y-0 left-0 z-10">
      <div className="text-13 px-4  h-screen py-6 flex flex-col justify-between border-r border-gray-mw-100">
        {/* top section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Image src="/images/logo.svg" alt="logo" width={18} height={18} />
              <span className="ml-2 font-medium">My Workspace</span>
            </div>
            <Image src="/images/user-avatar.png" alt="User Icon" width={18} height={18} />
          </div>

          {/* nav links */}
          <nav className="space-y-4">
            <div className="flex items-center justify-between space-x-2 w-full">
              {isSearchMode ? (
                <div className="w-[151px] flex items-center border border-gray-mw-100 h-[28px] p-2 rounded-md">
                  <CustomInput
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search..."
                  />
                  <Image
                    src="/images/cancel-icon.svg"
                    alt="close"
                    width={16}
                    height={16}
                    className="cursor-pointer p-1 hover:bg-gray-mw-300 duration-200 rounded-full"
                    onClick={() => setIsSearchMode(false)}
                  />
                </div>
              ) : (
                <div className="w-[151px] flex items-center border border-gray-mw-100 h-[28px] p-2 rounded-md cursor-pointer" >
                  <Image src="/images/new-issue.svg" alt="new_issue" width={14} height={14} />
                  <span className="ml-2 font-normal">New issue</span>
                </div>
              )}

              <div
                className="w-[28px] border border-gray-mw-100 p-2 rounded-md cursor-pointer hover:bg-gray-mw-500 duration-200"
                onClick={() => setIsSearchMode(true)}>
                <Image src="/images/search-icon.svg" alt="Search" width={13} height={13} />
              </div>
            </div>
            <div className="space-y-2">
              <NavLink icon="/images/inbox.svg" label="Inbox" />
              <NavLink icon="/images/my-issues.svg" label="My issues" />
              <NavLink icon="/images/views.svg" label="Views" />
              <NavLink icon="/images/roadmap-icon.svg" label="Roadmaps" />
            </div>

            {/* your teams section */}
            <h3 className="text-xs font-medium text-gray-mw-200 mb-2">Your teams</h3>
            <CustomDropdown
              label="My Workspace"
              dropdownIcon="/images/dropdown-icon.svg"
              workspaceIcon="/images/my-workspace.svg"
              items={[
                {
                  label: "Issues",
                  icon: "/images/issues.svg",
                  sublinks: ["Active", "Backlog"],
                },
                {
                  label: "Projects",
                  icon: "/images/projects.svg",
                },
                {
                  label: "Views",
                  icon: "/images/views.svg",
                },
              ]}
            />
          </nav>
        </div>

        {/* bottom section */}
        <div className="">
          <div className='space-y-2'>
            <NavLink icon="/images/plus-icon.svg" label="Invite people" />
            <NavLink icon="/images/help-support.svg" label="Help & Support" />
          </div>

          {/* note for import issue */}
          <div className="relative h-[100px] mt-[30px]">
            {isNoteVisible && (
              <DynamicNote
                icon="/images/import-icon.svg"
                message="Use our Migration Assistant to copy issues from another service."
                linkText="Try Now ->"
                url="#"
                label="Import Issues"
                onClose={closeNote}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLink({ icon, label }) {
  return (
    <div className="h-[27px] flex items-center duration-200 hover:bg-gray-mw-500 p-2 rounded-md cursor-pointer">
      <Image src={icon} alt={label} width={16} height={16} />
      <span className="ml-3 font-medium">{label}</span>
    </div>
  );
}
