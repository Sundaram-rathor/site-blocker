import React from 'react'
import Blocked from './blocked/Blocked'

function App() {
  return (
    <div className="flex items-center bg-slate-900 text-white h-screen  w-auto bg-[url('../../images/back.jpg')] bg-cover bg-center bg-no-repeat">
        
        <div className='h-full w-full bg-red-900 p-32 flex items-center opacity-15'>
         
        </div>
        <div className='absolute top-0 h-full w-full z-10 p-32 flex items-center '>
         <Blocked/>
        </div>
    </div>
  )
}

export default App