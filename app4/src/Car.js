import React from 'react';

export default function Cars (props) {
    return (
        <h2>{props.car.make} {props.car.model}</h2>
    )
}