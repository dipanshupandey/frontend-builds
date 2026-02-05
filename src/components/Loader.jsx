import React from 'react'

const Loader = () => {
  return (
    <div className='min-h-screen flex justify-center items-center text-center '>
      <div className='border-2 border-black h-40 w-40 absolute rounded-full animate-spin transition-all ease-linear duration-1000 border-t-2 border-r-2
            border-b-0 border-l-0
            animate-spin-color
            '></div>
      <span className="animate-loading 
  font-medium
  tracking-[0.20em]   /* 👈 tech feel */
  text-gray-900">LOADING...</span>
    </div>
  )
}

export default Loader;