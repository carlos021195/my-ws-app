import React from 'react'
import './MessageInput.css'

export default function MessageInput({sendMessage, handleChange, message}){
    return(
        <div className = "messageInput">
            <input 
            className = 'inputBar'
            type = "text"
            value = {message}
            onChange = {handleChange}
            onKeyPress = {(event) => event.key==='Enter'?sendMessage():null}/>
            <button 
            className = 'sendButton'
            onClick = {sendMessage}>Send</button>
        </div>
    )
}