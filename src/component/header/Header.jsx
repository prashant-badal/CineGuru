import React, { useEffect } from 'react'
import img from "../../asset/image/cineguru-4-3-2024 (4).png"


import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'

import { addUser, removeUser } from '../utils/redux/slice/userSlice'
import { SUPPORTED_LANGUAGE, SignLOGO_URL } from '../utils/constant/constant'
import { toggleGptSearch } from '../utils/redux/slice/gptSlice'
import { changeLanguage } from '../utils/redux/slice/configSlice'



const Header = () => {
  const navigate =useNavigate()
const user= useSelector(store=>store.user)
const showGPT=useSelector(store=>store.gpt.showGptSearch)
const dispatch=useDispatch();

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName,photoURL}=user;
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:photoURL
      }));
      navigate('/browse')
    
    } else {
      dispatch(removeUser());
      navigate('/')
    }
  });
},[])


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGptSearch=()=>{
    dispatch(toggleGptSearch())
  }
  const handleLanguageChange=(e)=>{
    dispatch( changeLanguage(e.target.value))
  }
  return (
    <>
    <div  className="absolute z-77 px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between bg-opacity-50 ">
        <img className="w-44" src={img} alt='logo'/>
        
      
      {user && (

        <div className='flex p-2'> 
        {showGPT &&
          <select className='p-2 m-2 bg-gray-900 text-white ' onClick={handleLanguageChange}>{
            SUPPORTED_LANGUAGE.map(lang=><option key={lang.identifier} value={lang.identifier}> {lang.name}</option>
              )
            
            }
            
          </select>
        }
        
        <button className='text-white bg-purple-800 py-2 px-4 rounded-lg mx-4 my-2' onClick={handleGptSearch}>{showGPT ? "homePage" :"GPT Search"}</button>

   <div className='flex'><img className="w-12 h-12 " src={SignLOGO_URL} alt='logo'/>
        <button  onClick={handleSignOut} className=' font-bold text-white'>sign Out</button>
        
      
    </div>
    </div>
     
      )}
      
    </div>
   
   
    
    </>
  )
}

export default Header
