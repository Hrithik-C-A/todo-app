import React, { useState } from 'react'

function App() {
  const [tasks,setTasks]=useState([
    {id: 1,name:"Become Stronger Everyday",completed:true},
    {id: 2,name:"Clean Clothes",completed:true},
    {id: 3,name:"Become Dictator",completed:false}
  ])
  function handleDelete(id){
    setTasks(tasks.filter(task =>  task.id !== id))
  }
  const [show,setShow]=useState(true)
  return (
      // Main Container
    <div className='h-[100vh] flex flex-col items-center justify-center'>
      {/* App Container */}
     <div className='flex flex-col justify-center gap-5'>
        {/* Input Box */}
        <div className='text-center'>
              <input type="text" className='shadow-md p-1 rounded-md' name="" id="" />
              <button type="submit" className='ml-4 p-2 py-0 px-2 bg-teal-500 text-white rounded-md font-semibold'>Add</button>
        </div> 
        {/* Todo Container */}
          <ul className='flex flex-col justify-center items-center'>
          <button className='bg-[#443C68] py-1 px-4 text-white font-semibold rounded-md' onClick={()=>setShow(!show)}>Toggle</button>
          {show && tasks.map((task)=> <li className={`flex flex-row justify-between bg-gray-300 w-96 m-2 p-4 rounded-lg font-medium ${task.completed ? 'text-green-600' : 'text-black'}`} key={task.id}>{task.name} <button className='py-0 px-2 bg-gray-600 text-white rounded-md font-semibold' onClick={()=>handleDelete(task.id)}>Delete</button> </li> )}
          </ul>
     </div>
    </div>
  )
}

export default App