import React from 'react'
import './Join.css'

export default function Join({user, room, handleChangeUser, handleChangeRoom, join, connect}){
    
    return(
        <div className = "join">
            <div className = "joinInnerContainer">
                <h1>Join</h1>
                <input 
                className = "joinInput"
                type = "text"
                value = {user} 
                onChange = {handleChangeUser}
                onKeyPress = {(event) => event.key === 'Enter'?join():null}
                placeholder = "username"/>
                <br />
                <input 
                className = "joinInput"
                type = "text"
                value = {room}
                onChange = {handleChangeRoom}
                onKeyPress = {(event) => event.key === 'Enter'?join():null}
                placeholder = "room"/>
                <br />
                <button className = "joinButton" onClick = {join} >Enter Chat</button>
                {
                    !connect
                    ?<div id = "connecting" className = "connecting">Connecting...</div>
                    :<div id = "connecting" className = "connecting"></div>
                }
            </div>
        </div>
    )
}