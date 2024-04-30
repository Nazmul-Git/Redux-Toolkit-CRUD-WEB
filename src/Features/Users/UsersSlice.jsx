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
        deleteUser:(state, action)=>{
            const id=action.payload;
            state.users=state.users.filter(user=>user.id !== id);
        },
        updateUser:(state, action)=>{
            const {id, username, developer}= action.payload;
            const isUserExist= state.users.filter(user=>user.id===id);
            if(isUserExist){
                isUserExist[0].username=username;
                isUserExist[0].developer=developer;
            }
        },
    },
})

export const {allUsers, createUser,deleteUser,updateUser}= usersSlice.actions;
export default usersSlice.reducer;