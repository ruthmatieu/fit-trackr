import React from 'react';
import {Link} from 'react-router-dom';

import emptyError from '../images/empty-error.png'

const ErrorPage = () => {

    const lightblue = '#E1F2F9';
     const skyblue = '#97D4E7'
     const blue = '#2F98BA';
     const darkblue = '#081E36';
     const white = '#FFFFFF';
     const lightgray = '#FCFBFF';
     const gray = 'gray';
     const orange = '#F77741';
     const offwhite = '#FCFAFE';
     
    return (
        <div style={{paddingTop: '150px'}}>
            <div>
                <img style={{width: '300px'}} src={emptyError} alt="Empty"/>
                <h1 style={{color: darkblue}}>Nothing to see here.</h1>
                <p style={{ color: darkblue}}><Link to='/sign-in' style={{textDecoration: 'none', color: blue}}>Login</Link> or <Link to='/register' style={{textDecoration: 'none', color: blue}}>create an account</Link> to start tracking!</p>
            </div>
        </div>
        
    )
}

export default ErrorPage;