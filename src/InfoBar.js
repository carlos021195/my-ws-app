import React from 'react'
import './InfoBar.css'
import icon from './icons8-home-50.png'
import notConnected from './not-connected.png'
import connected from './connected.png'

export default function InfoBar({user, room, goHome, connect}){
    return(
        <div className = 'infoBar'>
            <div className = 'user'>
                <img className = "connected-icon" src= {connected}/>
                <p>{user}</p>
            </div>
            <p className = 'roomName'>{room}</p>
            <a href ="#" onClick = {goHome}><img className = "homeIcon" src= {icon}/></a>
        </div>
    )
}