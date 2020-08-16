import React from 'react'

export default function MessageInput({sendMessage, handleChange, message}){
    return(
        <div className = "messageInput">
            <input 
            type = "text"
            value = {message}
            onChange = {handleChange}
            onKeyPress = {(event) => event.key==='Enter'?sendMessage():null}/>
            <button onClick = {sendMessage}>Send</button>
        </div>
    )
}