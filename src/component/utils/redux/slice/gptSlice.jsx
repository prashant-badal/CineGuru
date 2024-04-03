import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:true,
        movieNames:null,
        movieResult:null

    },
    reducers:{
        toggleGptSearch :(state)=>{
state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames, movieResult} =action.payload;
            state.movieNames=movieNames;
            state.movieResult=movieResult;
        },
    },

})

export  default  gptSlice.reducer

export const {toggleGptSearch,addGptMovieResult}=gptSlice.actions