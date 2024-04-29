import { createSlice } from '@reduxjs/toolkit'
const initialUsers={
    users: [
        {id:1, username:'Nazmul', developer: 'ReactJS'},
        {id:2, username:'Sagor', developer: 'Word Press'},
    ],
};

export const usersSlice= createSlice({
    name:'users',
    initialState:initialUsers,
    reducers:{
        allUsers:(state)=>state,
        createUser:(state, action)=>{
            state.users.push(action.payload)
        },
    },
})

export const {allUsers, createUser}= usersSlice.actions;
export default usersSlice.reducer;