import { useDispatch,useSelector } from "react-redux";
import { API_options } from "../component/utils/constant/constant";
import { addTopMovie } from "../component/utils/redux/slice/movieSlice";
import { useEffect } from "react";

const  useTopMovie=()=>{
    const dispatch=useDispatch();
    const topMovie=useSelector(store=>store.movie.topMovie);
    const getTopMovies=async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated', API_options);
  
      const json=await data.json();
      
      dispatch(addTopMovie(json?.results))
    }
  
    useEffect(()=>{
      !topMovie &&
      getTopMovies();
    },[])

    
};
export default useTopMovie