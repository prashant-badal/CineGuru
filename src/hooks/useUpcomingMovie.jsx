import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../component/utils/constant/constant";
import { addUpComingMovie } from "../component/utils/redux/slice/movieSlice";
import { useEffect } from "react";

const  useUpComingMovie=()=>{
  const upComingMovie=useSelector(store=>store.movie.upComingMovie);
    const dispatch=useDispatch();
    const getUpaddUpComingMovies=async ()=>{
      const data=await fetch(' https://api.themoviedb.org/3/movie/upcoming', API_options);
  
      const json=await data.json();
      
      dispatch(addUpComingMovie(json?.results))
    }
  
    useEffect(()=>{
      !upComingMovie &&
      getUpaddUpComingMovies();
    },[])

    
};
export default useUpComingMovie