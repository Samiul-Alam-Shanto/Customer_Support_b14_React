import React from "react";
import { CalendarDays } from "lucide-react";
import toast from "react-hot-toast";

const IssueCard = ({ issue, completedIssues, setCompletedIssues }) => {
  const isCompleted = completedIssues.some((iss) => iss.id === issue.id);

  const handleCompletedTask = () => {
    if (isCompleted) return toast.error("Already Completed");
    setCompletedIssues([...completedIssues, issue]);
    toast.success("Issue Resolved");
  };
  return (
    <div
      onClick={handleCompletedTask}
      className={`w-full rounded-lg border border-black bg-[#fffdec] p-4 ${isCompleted ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      {/* Title and Status */}
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl  font-medium text-black sm:text-2xl">
          {issue.title}
        </h2>

        <span
          className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2n ${isCompleted ? "bg-green-400" : "bg-amber-400"} `}
        >
          <span className="h-3 w-3 rotate-45 bg-current"></span>
          {isCompleted ? "Completed" : issue.status}
        </span>
      </div>

      {/* Description */}
      <p className="mt-2 line-clamp-2 text-lg leading-8 text-slate-600">
        {issue.description}
      </p>

      {/* Ticket Information */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        {/* ID and Priority */}
        <div className="flex items-center gap-4">
          <span className="text-slate-600">#{issue.id}</span>

          <span
            className={`${
              issue.priority === "URGENT PRIORITY"
                ? "text-red-600"
                : issue.priority === "HIGH PRIORITY"
                  ? "text-orange-600"
                  : issue.priority === "MEDIUM PRIORITY"
                    ? "text-yellow-600"
                    : "text-green-600"
            }`}
          >
            {issue.priority}
          </span>
        </div>

        {/* Customer and Date */}
        <div className="flex flex-wrap items-center gap-4 text-slate-600">
          <span>{issue.customer}</span>

          <div className="flex items-center gap-2">
            <CalendarDays size={28} />

            <span>{issue.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
