import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constant/constant'
import GptSuggestionMovies from './GptSuggestionMovies'

const GPTSearchPage = () => {
  return (
    <div>
      <div  className='fixed z-[-12]'>
        <img src={BG_URL} alt="bgImg" />
      </div>
      <GptSearchBar/>
      <GptSuggestionMovies/>
    </div>
  )
}

export default GPTSearchPage
