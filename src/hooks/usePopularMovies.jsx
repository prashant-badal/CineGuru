import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovie } from '../component/utils/redux/slice/movieSlice';
import { API_options } from '../component/utils/constant/constant';

const usePopularMovies = () => {
 const dispatch =useDispatch()
    const getPopularMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular', API_options);
  
    const json=await data.json();
    
    dispatch(addPopularMovie(json?.results))
  }

  useEffect(()=>{
    getPopularMovies();
  },[]);

};

export default usePopularMovies
