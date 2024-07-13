import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers:{
    markFetchDone:(state)=>{
      state.fetchDone = true;
      // return true;
    },
    markFetchingStarted:(state)=>{
      state.currentlyFetching = true;
      // return true;
    },
    markFetchingFinished:(state)=>{
      state.currentlyFetching = false;
      // return false;
    },
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

