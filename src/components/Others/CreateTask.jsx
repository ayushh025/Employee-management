import React from "react";

const CreateTask = () => {
  return (
    <div className="mt-8 bg-[#2A2A2A] rounded-t-xl p-5 pb-7 md:p-8">
      <form className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div>
            <h3 className="mb-2 text-sm text-gray-300">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="w-full rounded-lg bg-transparent border border-gray-500 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <h3 className="mb-2 text-sm text-gray-300">Date</h3>
            <input
              type="date"
              className="w-full rounded-lg bg-transparent border border-gray-500 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <h3 className="mb-2 text-sm text-gray-300">Assign To</h3>
            <input
              type="text"
              placeholder="Employee Name"
              className="w-full rounded-lg bg-transparent border border-gray-500 px-4 py-3 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <h3 className="mb-2 text-sm text-gray-300">Category</h3>
            <input
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
