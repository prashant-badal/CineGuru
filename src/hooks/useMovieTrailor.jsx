import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailorVideo } from '../component/utils/redux/slice/movieSlice';
import { API_options } from '../component/utils/constant/constant';

const useMovieTrailor = (movieId) => {
    const dispatch=useDispatch();
  

    const getMovieVideos=async ()=>{
      
       const data=await fetch("https://api.themoviedb.org/3/movie/" +movieId+ "/videos?language=en-US",API_options);
        const json=await data.json();
      
        const filterData =json.results.filter((video)=>video.type==="Trailer"
        );
   

        const trailor=filterData.length?filterData[0]:json.results[0];
        dispatch(addTrailorVideo(trailor))
        
      };
      useEffect(()=>{
        getMovieVideos();
      },[])
  return (
    <div>
      
    </div>
  )
}

export default useMovieTrailor
