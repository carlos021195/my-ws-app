import React from 'react'
import './InfoBar.css'
import icon from './icons8-home-50.png'
import connected from './connected.png'

export default function InfoBar({user, room, goHome, connect, showRoomsMenu}){
    return(
        <div className = 'infoBar'>
            <div className = 'user'>
                <div className="menuArrow" onClick = {showRoomsMenu}>
                    &#8250;
                </div>
                <img className = "connected-icon" src= {connected} alt = 'connected icon'/>
                <p>{user}</p>
            </div>
            <p className = 'roomName'>{room}</p>
            <a href ="#" onClick = {goHome}><img className = "homeIcon" src= {icon} alt='home button'/></a>
        </div>
    )
}