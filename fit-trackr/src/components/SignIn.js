import React, {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import * as yup from "yup";
import axiosAuth from '../utils/axiosWithAuth';

const formSchema = yup.object().shape({
    username: yup.string().required('Username is required.'),
    password: yup.string().required('Password is required.')
});

const SignIn = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState({
        username: '',
        password: '',
    });

    // axios.post(``, userCredentials)
    //     .then(res => {
    //         localStorage.setItem('token', res.data.token);
    //         props.history.push('/dashboard')
    //     })

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
        //refreshed form after submit
        setUser({
            username: '',
            password: ''
            
        })
        //console.log('form submit');
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then((res) => {
                localStorage.setItem("token", res.data.payload);
                // redirect to the logged in homepage
                this.props.history.push("/dashboard");
            })
            .catch((err) => console.log(err));
    };

    const changeSubmit = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        //console.log(e.target.value)
    };

    return (
        <div>
            <h3>Welcome back!</h3>
            <form onSubmit={formSubmit}>
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
                <Link to='/dashboard'><button type='submit'>Submit</button></Link>
            </form>
            <p>Don't have an account? <Link to='/register'>Sign Up for an account</Link></p>
        </div>
    )
};

export default SignIn;
