/* eslint-disable no-unused-vars */
import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from '../Components/Pages/Home';
import Error from '../Components/Pages/Error';
import Navbar from '../Layouts/Navbar';
import All_Users from '../Components/Pages/All_Users';
import CreateUser from '../Components/Pages/CreateUser';
import Footer from '../Components/Footer';
import EditUser from '../Components/Pages/EditUser';


const Index = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/all-users' element={<All_Users/>}></Route>
                <Route path='/create-user' element={<CreateUser/>}></Route>
                <Route path='/edit-user' element={<EditUser/>}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default Index;