import React from 'react';


const Car = (props) => {
    const carStyle = {
        color: 'tomato',
        margin: '0 auto',
        fontSize: '20px',
    }

    return (
        <div style={ carStyle }>
            <h2>Car name: { props.name } </h2>
        <p>Car year: <strong>{ props.year }</strong> </p>
        {props.children}
        </div>
    )
}

export default Car;