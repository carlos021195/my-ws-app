import React from 'react'
import Message from './Message'
import './MessageList.css'

// Next Steps: Create array of users
//  Check that username is available before entering
// create list of users in the room to display
// create list of rooms with people in them? maybe

export default function MessageList({user, messageArr, room}){
    return(
        <div className = "messageListContainer" id = "messageList">
            {messageArr.map((message,index) =>{
                return(
                    message.room === room
                    ? <div className = "message-wrap" key = {index}><Message user = {user} message = {message} room = {room}/></div>
                    :message.room === 'everywhere'
                    ? <div className = "message-wrap" key = {index}><Message user = {user} message = {message} room = {room}/></div>
                    :null
                )
            })}
        </div>
    )
}