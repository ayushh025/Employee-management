import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex w-full flex-wrap sm:flex-nowrap mt-7 sm:mt-10 justify-between gap-3 sm:gap-5'>
        <div className="py-4 px-5 sm:py-4 sm:px-7 rounded-xl w-[48%] sm:min-w-[23%] bg-blue-500">
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className="py-4 px-5 sm:py-4 sm:px-7 rounded-xl w-[48%] sm:min-w-[23%] bg-green-500">
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-2xl font-medium'>Completed</h3>
        </div>
        <div className="py-4 px-5 sm:py-4 sm:px-7 rounded-xl w-[48%] sm:min-w-[23%] bg-yellow-400 text-black">
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-2xl font-medium'>Accepted</h3>
        </div>
        <div className="py-4 px-5 sm:py-4 sm:px-7 rounded-xl w-[48%] sm:min-w-[23%] bg-red-600">
            <h2 className='text-3xl font-bold'>0</h2>
            <h3 className='text-2xl font-medium'>Failed</h3>
        </div> 
    </div>
  )
}

export default TaskListNumbers
