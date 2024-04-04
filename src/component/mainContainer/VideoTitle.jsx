import React from 'react'
import VideoBackground from './VideoBackground'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black '>
         <div>
     <h1 
     className='text-2xl md:text-5xl font-bold'>{title}</h1>
     <p className='md:inline-block text-sm w-1/4 m-2 hidden' >{overview}</p>
    </div>
    <div className='md:my-2 my-4'>
    <button className=  'bg-white text-black p-1 md:p-3 md:px-10 px-5 text-xl bg-opacity-90 rounded-lg'> ▶️Play </button>
        <button className=' hidden md:inline-block bg-white text-black p-3 px-10 text-xl bg-opacity-90 rounded-lg m-2'> Play More Info</button>
    </div>

    </div>
   
  )
}

export default VideoTitle
