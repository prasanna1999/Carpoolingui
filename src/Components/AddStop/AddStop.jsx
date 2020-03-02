import React from 'react';

export default function AddStop(props){
    return(
    <div className="stop">
    <label>Stop{props.id}</label>
    <input type="text" name={"stop"+props.id}/>
    </div>
    );
}