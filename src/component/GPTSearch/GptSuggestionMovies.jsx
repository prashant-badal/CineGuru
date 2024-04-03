
import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../secondaryContainer/MovieList';

const GptSuggestionMovies = () => {
    const {movieNames,movieResult}=useSelector(store=>store.gpt);
    if(!movieNames)return  null;
  return (
    <div className="m-4 p-4  bg-black bg-opacity-80">
        {
            movieNames.map((movieName,index)=>(
                <MovieList key={movieName}
                title={movieName}
                movies={movieResult[index]}
                />
            ))
        }
      
    </div>
  )
}

export default GptSuggestionMovies