import React from 'react'
import './Message.css'

export default function Message({user , message}){
    return(
        <div>
            {
               message.user === user
               ?<div className = "message sentMessage"><div className = "outer-sent-message"><p>{message.user}: {message.text}</p></div></div>
               :<div className = "message receivedMessage"><div className = "outer-received-message"><p>{message.user}: {message.text}</p></div></div> 
            }
            
        </div>
    )
}