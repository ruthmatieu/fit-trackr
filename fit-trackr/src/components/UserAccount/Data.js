import React from 'react';

function Data(props){

    const button = {
        backgroundColor: 'orange',
        borderRadius: '50%',
        border: 'none',
        width: '20px',
        height: '20px',
        margin: '5px',
        color: 'white'
    }

    const brand = {
        fontSize: '0.5rem',
        textTransform: 'lowercase'
    }

    return(
        <div className="data-container" style={{borderRadius: '15px', width: '150px', height: '150px', margin: '10px 0'}}>
            <h5 style={{display: 'inline-block'}}>{props.title}</h5>
            <p style={brand}>{props.brand}</p>
            <button style={button}>-</button>
            <button style={button}>+</button>
        </div>
    )
}

export default Data;