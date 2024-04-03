import { createSlice } from "@reduxjs/toolkit";

 const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        trailorVideo:null,
        popularMovie:null,
        topMovie:null,
        upComingMovie:null
    },
    reducers:{
        addNowPlayingMovie :(state,action)=>{
            state.nowPlayingMovie=action.payload;
        },
        addTrailorVideo:(state,action)=>{
            state.trailorVideo =action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie= action.payload
        },
        addTopMovie:(state,action)=>{
            state.topMovie= action.payload
        },
        addUpComingMovie:(state,action)=>{
            state.upComingMovie= action.payload
        },
        
    }
})
export default movieSlice.reducer;

export const {addNowPlayingMovie,addTrailorVideo,addPopularMovie,addTopMovie,addUpComingMovie}=movieSlice.actions