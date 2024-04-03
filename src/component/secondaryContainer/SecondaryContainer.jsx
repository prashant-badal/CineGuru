import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store?.movie);


  return  (
    movies.nowPlayingMovie && (
    <div className='bg-black'>


    <div  className='-mt-52 pl-6 relative z-12 '>
   
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovie} />
      <MovieList title="Top Rated" movies={movies?.topMovie} />
      <MovieList title="Popular Movie" movies={movies?.popularMovie} />
 
     
      <MovieList title="Up Coming" movies={movies?.upComingMovie} />
      
      </div>
       </div>
    )
  );
};

export default SecondaryContainer;
