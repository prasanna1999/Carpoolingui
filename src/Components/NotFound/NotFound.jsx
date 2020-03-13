import React from 'react';
import './NotFound.scss';

export default function NotFound(props){
    return (
        <div className="pageNotFound">
            <div className="text">404 </div>
            <div className="text">Page Not Found </div>
            <input type="button" value="GO BACK" onClick={()=>props.history.push('/ui/home')}/>
        </div>
    )
}