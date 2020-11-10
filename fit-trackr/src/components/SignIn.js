import React from 'react';

const SignIn = () => {

    const formSubmit = e => {
        e.preventDefault();
    };

    const changeSubmit = e => {

    };

    return (
        <div>
            <form onSubmit=''>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input
                        name='username'
                        type='text'
                        placeholder="username"
                        value=''
                        onChange={changeSubmit}
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        name='password'
                        type='password'
                        placeholder='password'
                        value=''
                        onChange={changeSubmit}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};

export default SignIn;
