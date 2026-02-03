import React from 'react'

const Loader = () => {
  return (
    <div className='min-h-screen flex justify-center items-center text-center'>
      <div className='border-2 border-black h-40 w-40 absolute rounded-full'></div>
      <span>LOADING...</span>
    </div>
  )
}

export default Loader;