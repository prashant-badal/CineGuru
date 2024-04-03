import React from 'react'

import useMovieTrailor from '../../hooks/useMovieTrailor';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
    const trailorVideo=useSelector(store=>store.movie.trailorVideo)
   useMovieTrailor(movieId);
    
     

  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 

       src={"https://www.youtube.com/embed/"+ trailorVideo?.key+ "?&autoplay=1&mute=1" } 
       title="YouTube video player" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground
