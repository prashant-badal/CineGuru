import { useDispatch } from "react-redux";
import { API_options } from "../component/utils/constant/constant";
import { addNowPlayingMovie } from "../component/utils/redux/slice/movieSlice";
import { useEffect } from "react";

const  useNowPlayingMovie=()=>{
    const dispatch=useDispatch();
    const getNowPlayingMovies=async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
  
      const json=await data.json();
      
      dispatch(addNowPlayingMovie(json?.results))
    }
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[])

    
};
export default useNowPlayingMovie