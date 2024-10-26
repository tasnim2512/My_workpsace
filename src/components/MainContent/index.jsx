"use client";
import { useState, useEffect } from 'react';
import Header from '../Header';
import IssueList from '../Issues/IssueListView';
import IssueGrid from '../Issues/IssueGridView';
import AddIssue from '../Issues/AddIssue';
import SkeletonList from '../Issues/SkeletonList';

export default function MainContent({ toggleSidebar, isSidebarOpen }) {
  const [isGridView, setIsGridView] = useState(false); 
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/issues.json')
      .then((response) => response.json())
      .then((data) => {
        setIssues(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching issues:", error);
        setLoading(false);
      });
  }, []);

  // function to add a new issue
  const addNewIssue = ({ title, status, priority }) => {
    const newId = `MY-${issues.length + 1}`;
    const newIssue = { id: newId, title, status, priority, date: 'Today' };
    setIssues([...issues, newIssue]);
  };

  return (
    <div className="flex-1 py-2">
      {/* passing toggleSidebar and isSidebarOpen to header for small screen resposiveness */}
      <Header 
        isGridView={isGridView} 
        setIsGridView={setIsGridView} 
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      {/* add issue part with adding todo functionality */}
      <AddIssue addNewIssue={addNewIssue} />

      {loading ? (
        <SkeletonList />
      ) : isGridView ? (
        <IssueGrid issues={issues} />
      ) : (
        <IssueList issues={issues} />
      )}
    </div>
  );
}
