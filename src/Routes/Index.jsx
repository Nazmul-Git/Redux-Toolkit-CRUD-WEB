/* eslint-disable no-unused-vars */
import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from '../Components/Pages/Home';
import Error from '../Components/Pages/Error';


const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Index;