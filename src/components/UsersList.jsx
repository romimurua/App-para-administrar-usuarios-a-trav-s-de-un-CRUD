import React from 'react';
import axios from 'axios';

const UsersList = ({users, selectUser, getUsers}) => {
    
    const deleteUser = (id) => {
        axios.delete (`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers());
    }
    
    return (
        <div className='users'>
            <h2>Users</h2>
            <ul className='user-Card'>
                {
                    users.map(user => (
                        <li className='list-Card' key={user.id}>
                            <b>{user.first_name} {user.last_name}</b>
                            <div>{user.email}</div>
                            <div>{user.birthday}</div>
                            <div> 
                                <button onClick={() => deleteUser (user.id)}>Delete</button>
                                <button onClick={() => selectUser(user)}>Edit</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;<h1>Usuarios</h1>