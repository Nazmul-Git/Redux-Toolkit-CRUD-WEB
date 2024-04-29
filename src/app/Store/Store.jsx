import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../../Features/Users/UsersSlice";


const store= configureStore({
    reducer:{
        usersReducer: UsersReducer,
    }
})

export default store;