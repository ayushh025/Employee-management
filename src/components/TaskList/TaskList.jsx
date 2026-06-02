import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] py-5 w-full mt-10 flex gap-5 overflow-x-auto'>
      <div className="h-full shrink-0 w-75 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center p-5">
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4>20 Feb 2026</h4>
        </div>
        <h2 className='mt-5'>Make a YouTube Video</h2>
      </div>
      <div className="h-full shrink-0 w-75 bg-yellow-400 rounded-xl"></div>
      <div className="h-full shrink-0 w-75 bg-yellow-400 rounded-xl"></div>
      <div className="h-full shrink-0 w-75 bg-yellow-400 rounded-xl"></div>
      <div className="h-full shrink-0 w-75 bg-yellow-400 rounded-xl"></div>
      <div className="h-full shrink-0 w-75 bg-yellow-400 rounded-xl"></div>
      <div className="h-full shrink-0 w-75 bg-yellow-400 rounded-xl"></div>
    </div>
  )
}

export default TaskList
