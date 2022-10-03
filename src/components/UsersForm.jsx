import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';

const UsersForm = ({userSelected, getUsers, deselectUser}) => {

    
    const {register, handleSubmit, reset} = useForm();
    
    useEffect(() => {
        if(userSelected){
            reset(userSelected)
        }
    }, [userSelected])

    const submit = (data) => {
        
        if(userSelected){
        //acualizando usuario
            axios.put (`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() => getUsers());
        
        } else { 

        //creando usuario
        axios.post('https://users-crud1.herokuapp.com/users/', data)
            .then(() =>getUsers)
            .catch(error => console.log(error.response))
    
        }
        clear();
    
    }

    const clear = () => {
        reset ({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday:""
        })
        deselectUser();
    }

    return (

        <form className='form' onSubmit={handleSubmit(submit)}>
            <h1>New User</h1>
            <div>
                <label htmlFor="first_name">First Name </label>
                <input type="text" id='first_name' {...register("first_name")} />
            </div>

            <div>
                <label htmlFor="last_name">Last Name </label>
                <input type="text" id='last_name' {...register("last_name")} />
            </div>

            <div>
                <label htmlFor="email">Email </label>
                <input type="text" id='email' {...register("email")} />
            </div>

            <div>
                <label htmlFor="password">Password </label>
                <input type="text" id='password' {...register("password")} />
            </div>

            <div>
                <label htmlFor="birthday">Birthday </label>
                <input type="date" id='birthday' {...register("birthday")} />
            </div>
            <div> 
                <button>Submit</button>
                <button onClick={clear} type="button">
                    Clear
                </button>
            </div>
        </form>
    );
};

export default UsersForm;