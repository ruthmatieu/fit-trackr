import React, {useState} from 'react';
import { Link } from "react-router-dom";
import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup.string().required('Username is required.'),
    password: yup.string().required('Password is required.')
});

const Register = () => {

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    });

    const [error, setError] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
    });

    const validator = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setError({
                    ...error,
                    [e.target.name]: ''
                });
            })
            .catch(err => {
                setError({
                    ...error,
                    [e.target.name]: err.errors[0]
                })
        })
    }

    const formSubmit = e => {
        e.preventDefault();
        setUser({
            firstname: '',
            lastname: '',
            username: '',
            password: ''
            
        })
        //console.log('form submit')
    };

    const changeSubmit = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        //console.log(e.target.value)
    };

    return (
        <div>
            <h3>Let's get you started with an account!</h3>
            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor='firstname'>First Name:</label>
                    <input
                        name='firstname'
                        type='text'
                        placeholder="First Name"
                        value={user.firstname}
                        onChange={changeSubmit}
                    />
                </div>

                <div>
                    <label htmlFor='lastname'>Last Name:</label>
                    <input
                        name='lastname'
                        type='text'
                        placeholder="lastname"
                        value={user.lastname}
                        onChange={changeSubmit}
                    />
                </div>

                <div>
                    <label htmlFor='username'>Username:</label>
                    <input
                        name='username'
                        type='text'
                        placeholder="username"
                        value={user.username}
                        onChange={changeSubmit}
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        name='password'
                        type='password'
                        placeholder='password'
                        value={user.password}
                        onChange={changeSubmit}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <p>Already have an account? <Link to='/sign-in'>Login</Link></p>
        </div>
    )
};

export default Register;