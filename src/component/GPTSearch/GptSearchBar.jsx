import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/constant/languageConstant'
import openai from '../utils/openAI/OpenAI';
import { API_options } from '../utils/constant/constant';
import { addGptMovieResult } from '../utils/redux/slice/gptSlice';

const GptSearchBar = () => {

  const dispatch =useDispatch();
  const searchText=useRef(null);
  const langKey=useSelector(store=>store.config.lang);

  const SearchMovieTmdb= async (movie)=>{
    const data= await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie+'&include_adult=false&page=1', API_options);
    const json =await data.json();

    // console.log (json.results)

    return json.results;
  }


  const handleSearch=async()=>{
    console.log(searchText.current.value);
    const SearchQuery="Act as movie recommdation system and suggest some movies for query :"+ searchText.current.value + ".only give me name of 5 movies ,comma separated like the example given ahead. Example Result:Gadar, Sholay,Don,Golmal,koi mil gaya";

    const gptSearchResult=  await openai.chat.completions.create({
        messages: [{ role: 'user', content: SearchQuery}],
        model: 'gpt-3.5-turbo',
      });

      if(!gptSearchResult.choices){
        // error handling
      }
   
    // convert the result string into array of movies
      const gptMovies=gptSearchResult.choices[0]?.message?.content.split(",")
      console.log(gptSearchResult.choices[0]?.message?.content.split(","))
   
     // data = [Promise, Promise, Promise, Promise, Promise]

    // use Promise.all() so that when all the promises are resolved then we will get data in tmdbResults

 
    const promiseArray=gptMovies.map(movie=> SearchMovieTmdb(movie));
      const tmdbResult= await Promise.all(promiseArray);
  
      console.log(tmdbResult)
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResult:tmdbResult}))


  }

    



  return (
    <div className='pt-[10%] flex justify-center'>
      <form onSubmit={(e)=>e.preventDefault()} className='w-[60%] bg-black grid grid-cols-12 
    
      ' >
        <input type="text"
        ref={searchText}
      placeholder={lang[langKey].gptSearchholder}
      className='text-black p-4 m-4  col-span-9'
      />
      <button onClick={handleSearch} className='px-4 m-4 py-3 bg-red-600  font-bold text-white col-span-3'>{lang[langKey].search}</button>

      </form>
    </div>
  )
}

export default GptSearchBar
