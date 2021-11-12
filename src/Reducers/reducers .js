import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: []
}

export const listOfUSers = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getListOfUser: (state, action) => {
            state.user = [...state.user,...action.payload]
        }
    }
});
export const {getListOfUser} = listOfUSers.actions;
export default listOfUSers.reducer;