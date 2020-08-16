import React from 'react'
import Message from './Message'
import './MessageList.css'

export default function MessageList({user, messageArr}){
    return(
        <div className = "messageListContainer">
            {messageArr.map((message,index) =>
                <div key = {index}><Message user = {user} message = {message}/></div>)}
        </div>
    )
}