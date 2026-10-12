import React, { use, useState } from "react";
import Counter from "./Counter";
import AllIssues from "./AllIssues";

const MainLayout = ({ dataPromise }) => {
  const allIssues = use(dataPromise);
  //   console.log(allIssues);
  const [completedIssues, setCompletedIssues] = useState([]);
  //   console.log(completedIssues);
  return (
    <div className="container mx-auto">
      <Counter completedIssues={completedIssues} />
      <AllIssues
        setCompletedIssues={setCompletedIssues}
        completedIssues={completedIssues}
        allIssues={allIssues}
      />
    </div>
  );
};

export default MainLayout;
