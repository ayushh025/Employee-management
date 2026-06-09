import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [task, setTask] = useState({});

  const userData = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      completed: false,
      failed: false,
      newTask: true,
    });

    const employees = JSON.parse(localStorage.getItem("employees"));
    console.log(employees);

    employees.forEach((emp) => {
      if (assignTo === emp.name) {
        emp.taskNumbers.newTask += 1;
        emp.tasks.push(task);
        // localStorage.setItem(employees);
        // alert("Task assigned successfully");
        // return;
      }
    });
    setAssignTo("");
    setCategory("");
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
  };

  return (
    <div className="mt-8 bg-[#2A2A2A] rounded-t-xl p-5 pb-7 md:p-8">
      <form
        onSubmit={submitHandler}
        className="flex flex-col lg:flex-row gap-8"
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div>
            <h3 className="mb-2 text-sm text-gray-300">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI Design"
              className="w-full rounded-lg bg-transparent border border-gray-500 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <h3 className="mb-2 text-sm text-gray-300">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full rounded-lg bg-transparent border border-gray-500 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <h3 className="mb-2 text-sm text-gray-300">Assign To</h3>
            <select
              defaultValue={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full rounded-lg bg-[#2A2A2A] border border-gray-500 px-4 py-3 outline-none focus:border-emerald-500"
            >
              <option value="" disabled>
                Select Employee
              </option>

              {userData.employessData.map((emp) => (
                <option
                  key={emp.id}
                  value={emp.name}
                  className="bg-[#1C1C1C] text-white"
                >
                  {emp.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3 className="mb-2 text-sm text-gray-300">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Development, Testing"
              className="w-full rounded-lg bg-transparent border border-gray-500 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h3 className="mb-2 text-sm text-gray-300">Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows="10"
            placeholder="Enter task details..."
            className="w-full rounded-lg bg-transparent border border-gray-500 px-4 py-3 outline-none resize-none focus:border-emerald-500"
          />

          <button
            type="submit"
            className="mt-6 bg-emerald-500 hover:bg-emerald-600 transition-all py-3 rounded-lg text-lg font-semibold"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
