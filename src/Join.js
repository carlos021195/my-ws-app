import React,{useState} from 'react'
import './Join.css'

export default function Join({username, enterRoom, handleChangeUser, handleChangeRoom, join}){
    
    return(
        <div className = "join">
            <div className = "joinInnerContainer">
                <h1>Join</h1>
                <input 
                className = "joinInput"
                type = "text"
                value = {username} 
                onChange = {handleChangeUser}
                onKeyPress = {(event) => event.key === 'Enter'?join():null}
                placeholder = "username"/>
                <br />
                <input 
                className = "joinInput"
                type = "text"
                value = {enterRoom}
                onChange = {handleChangeRoom}
                onKeyPress = {(event) => event.key === 'Enter'?join():null}
                placeholder = "room"/>
                <br />
                <button className = "joinButton" onClick = {join} >Enter Chat</button>
            </div>
        </div>
    )
}