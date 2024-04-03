import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constant/constant'

const GPTSearchPage = () => {
  return (
    <div>
      <div  className='absolute z-[-12]'>
        <img src={BG_URL} alt="bgImg" />
      </div>
      <GptSearchBar/>
    </div>
  )
}

export default GPTSearchPage
