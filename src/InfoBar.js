import React from 'react'
import './InfoBar.css'

export default function InfoBar({user, room}){
    return(
        <div className = 'infoBar'>
            <div className = 'user'>
                <img className = "connected-icon" src="https://img.icons8.com/color/48/000000/connection-status-on--v1.png"/>
                <p>{user}</p>
            </div>
            <p className = 'roomName'>{room}</p>
            <a href ="#"><img className = "homeIcon" src="https://img.icons8.com/ios-filled/50/000000/home.png"/></a>
        </div>
    )
}