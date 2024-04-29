import { createSlice } from '@reduxjs/toolkit'
const initialUsers={
    users: [
        {id:1, name:'Nazmul', developer: 'ReactJS'},
        {id:2, name:'Sagor', developer: 'Word Press'},
    ],
};

export const usersSlice= createSlice({
    name:'users',
    initialState:initialUsers,
    reducers:{
        allUsers:(state)=>state,
    },
})

export const {allUsers}= usersSlice.actions;
export default usersSlice.reducer;