/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../Features/Users/UsersSlice';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [developer, setDeveloper] = useState('');

    const noOfUser=useSelector(state=>state.usersReducer.users.length);

    const dispatch= useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const user={id: noOfUser+1, username,developer};
        dispatch(createUser(user));
        navigate('/all-users', {replace:true});
    }
    

    return (
        <div className='flex gap-4 flex-col items-center bg-slate-500 p-56'>
            <p className='text-4xl font-bold text-green-500 p-4'>CREATE-USER</p>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
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
                <button className="btn btn-success text-lg text-white" type='submit'>Create</button>
            </form>
        </div>
    );
};

export default CreateUser;