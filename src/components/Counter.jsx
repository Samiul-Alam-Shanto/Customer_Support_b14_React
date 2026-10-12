import React from "react";

const Counter = ({ completedIssues }) => {
  return (
    <div className="bg-amber-400 text-center my-4 py-16">
      <h2 className="font-bold text-4xl">Completed</h2>
      <p className="font-bold text-4xl">{completedIssues.length}</p>
    </div>
  );
};

export default Counter;
