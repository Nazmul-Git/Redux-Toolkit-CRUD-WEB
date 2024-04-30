/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from '../../Features/Users/UsersSlice';

const EditUser = () => {
    const location= useLocation();

    const [id, setId]= useState(location.state.id);
    const [username, setUsername]= useState(location.state.username);
    const [developer, setDeveloper]= useState(location.state.developer);
    
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleUpdate=(e)=>{
        e.preventDefault();
        dispatch(updateUser({id, username, developer}));
        navigate('/all-users', {replace: true})
    }

    return (
        <div className='flex gap-4 flex-col items-center bg-slate-500 p-56'>
            <p className='text-4xl font-bold p-4'>Edit-User</p>
            <form onSubmit={handleUpdate} className='grid grid-cols-1 gap-4'>
                <div>
                    <label htmlFor="username">username : </label>
                    <input type='text' id='username' name='username'
                        required value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="developer">Developer : </label>
                    <input type='text' id='developer' name='developer'
                        required value={developer} onChange={(e) => setDeveloper(e.target.value)}></input>
                </div>
                <button className="btn btn-success text-lg text-white" type='submit'>Update</button>
            </form>
        </div>
    );
};

export default EditUser;