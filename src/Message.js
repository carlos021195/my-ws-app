import React from 'react'
import './Message.css'

export default function Message({user , message}){
    return(
        
        message.user === user?
        <div className = "sentMessage">{message.user}: {message.text}</div>
        :<div className = "receivedMessage">{message.user}: {message.text}</div>
    )
}