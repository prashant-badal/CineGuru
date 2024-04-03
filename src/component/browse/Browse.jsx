import React, { useEffect } from 'react'
import Header from '../header/Header'
import useNowPlayingMovie from '../../hooks/useNowPlayingMovie'
import MainContainer from '../mainContainer/MainContainer';
import SecondaryContainer from '../secondaryContainer/SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopMovie from '../../hooks/useTopMovies';
import useUpComingMovie from '../../hooks/useUpcomingMovie';
import GPTSearch from '../GPTSearch/GPTSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  // useSelector hook to access the state and check if GPT search is to be shown
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  // Custom hooks to fetch various movie data
  useNowPlayingMovie();
  usePopularMovies();
  useTopMovie();
  useUpComingMovie();

  return (
    <div>
      {/* Header component */}
      <Header/>

      {/* Conditional rendering: show GPT search or MainContainer and SecondaryContainer */}
      {showGptSearch ? (
        <GPTSearch/>
      ) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
    </div>
  );
}

export default Browse;

