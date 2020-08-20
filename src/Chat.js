import React,{useState} from 'react';
import './Chat.css';
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import InfoBar from './InfoBar'





function Chat({user, room, messageArr, message, goHome, sendMessage, handleChange, connect}) {



  return (
    <div className="chat">
      <InfoBar user = {user} room = {room} goHome = {goHome} connect = {connect}/>
      <MessageList user = {user} messageArr = {messageArr} room = {room}/>
      <MessageInput sendMessage = {sendMessage} handleChange = {handleChange} message = {message}/>
      {/* {messageArr.map((message,index) => <li key = {index}>{message.text}</li>)}
      <button onClick = {sendMessage}>test</button> */}
    </div>
  );
}

export default Chat;
