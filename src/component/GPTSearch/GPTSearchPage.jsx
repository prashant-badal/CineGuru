import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constant/constant'
import GptSuggestionMovies from './GptSuggestionMovies'

const GPTSearchPage = () => {
  return (
    <>
     <div  className='fixed z-[-12]'>
        <img src={BG_URL} className='h-screen w-screen object-cover' alt="bgImg" />
      </div>
     <div>
     
      <GptSearchBar/>
      <GptSuggestionMovies/>
    </div>
    </>
   
  )
}

export default GPTSearchPage
