import React from 'react'
import VideoBackground from './VideoBackground'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black'>
         <div>
     <h1 
     className='text-5xl font-bold'>{title}</h1>
     <p className='text-sm w-1/4 m-2' >{overview}</p>
    </div>
    <div>
    <button className='bg-white text-black p-3 px-10 text-xl bg-opacity-90 rounded-lg'> ▶️Play </button>
        <button className='bg-white text-black p-3 px-10 text-xl bg-opacity-90 rounded-lg m-2'> Play More Info</button>
    </div>

    </div>
   
  )
}

export default VideoTitle
