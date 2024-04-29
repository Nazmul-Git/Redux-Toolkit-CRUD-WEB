/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const All_Users = () => {
    const users = useSelector((state) => state.usersReducer.users);
    console.log(users)
    const dispatch= useDispatch();
    return (
        <div className='p-8'>
            <h2 className='text-center'>all users</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Working</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map(user=>{
                                const {id, username, developer}=user;
                                console.log(username,developer)
                                return <tr key={id}>
                                <th></th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{username}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {developer}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>active</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Edit</button>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>
                            })
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default All_Users;