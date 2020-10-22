import React from 'react';
import './Room.css'

function Room({room, switchChannel}){
    return(
        <div className = "clickableRoom"><button className = "roomButton" value = {room} onClick = {switchChannel}>{room}</button></div>
    )
}
export default Room;