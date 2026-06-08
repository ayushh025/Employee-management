import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FaildTask from "./FaildTask";

const TaskList = ({ tasks, taskNumbers }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] py-5 w-full mt-10 flex gap-5 overflow-x-auto"
    >
      {tasks.map((task, idx) => {
        if (task.active) {
          return <AcceptTask key={idx} data={task} />;
        }
        if (task.newTask) {
          return <NewTask key={idx} data={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={idx} data={task} />;
        }
        if (task.failed) {
          return <FaildTask key={idx} data={task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
