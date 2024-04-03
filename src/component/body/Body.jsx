import React, { useEffect } from 'react'


import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Login from '../login/Login'
import Browse from '../browse/Browse'



const route =createBrowserRouter(
    [
        {
  path:"/",
  element:<Login/>
},
{
    path:"/browse",
    element:<Browse/>
  },
])
const Body = () => {




    
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default Body
