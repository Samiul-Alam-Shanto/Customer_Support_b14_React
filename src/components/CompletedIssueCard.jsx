import { X } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const CompletedIssueCard = ({
  completedIssue,
  completedIssues,
  setCompletedIssues,
}) => {
  const handleDelete = () => {
    const newCompletedIssues = completedIssues.filter(
      (iss) => iss.id !== completedIssue.id,
    );
    setCompletedIssues(newCompletedIssues);
    toast.error("Removed");
  };
  return (
    <div className="flex bg-amber-300 justify-between items-center p-3 border rounded mt-2">
      <h2>{completedIssue.title}</h2>
      <button className="cursor-pointer" onClick={handleDelete}>
        <X />
      </button>
    </div>
  );
};

export default CompletedIssueCard;
