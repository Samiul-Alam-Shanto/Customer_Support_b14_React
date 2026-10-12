import React from "react";
import IssueCard from "./IssueCard";
import CompletedIssueCard from "./CompletedIssueCard";
import toast from "react-hot-toast";

const AllIssues = ({ allIssues, completedIssues, setCompletedIssues }) => {
  //   console.log(allIssues);
  return (
    <div className="grid grid-cols-12 gap-2 my-2">
      <div className="col-span-12 md:col-span-9">
        <h2 className="font-black text-2xl mb-4">Customer Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {allIssues.map((issue) => (
            <IssueCard
              key={issue.id}
              setCompletedIssues={setCompletedIssues}
              completedIssues={completedIssues}
              issue={issue}
            />
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-3">
        <h2 className="font-black text-2xl mb-4">Completed Issues</h2>
        <button
          onClick={() => {
            setCompletedIssues([]);
            toast.error("Removed All Completed Issues");
          }}
          className="bg-cyan-600 p-2 w-full border rounded text-white font-bold text-xl cursor-pointer"
        >
          Clear All
        </button>
        {completedIssues.length === 0 ? (
          <h4>No Resolved Issues Yet</h4>
        ) : (
          completedIssues.map((completedIssue) => (
            <CompletedIssueCard
              key={completedIssue.id}
              completedIssue={completedIssue}
              setCompletedIssues={setCompletedIssues}
              completedIssues={completedIssues}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllIssues;
