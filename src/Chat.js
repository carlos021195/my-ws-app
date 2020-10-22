import React from 'react';
import './Chat.css';
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import InfoBar from './InfoBar'
import Rooms from './Rooms'
import $ from 'jquery'

const showRoomsMenu = () =>{
  $(".roomsContainer").toggleClass("show");
  if($(".roomsContainer").hasClass("show")){
    $(".menuArrow").css("transform","rotate(-90deg)");
  }
  else{
    $(".menuArrow").css("transform","rotate(90deg)");
  }
}
const clearRooms = () =>{
  $(".roomsContainer").removeClass("show");
}

function Chat({user, room, messageArr, message, goHome, sendMessage, handleChange, connect, roomsList, switchChannel}) {
  return (
    <div className="chat">
      <InfoBar user = {user} room = {room} goHome = {goHome} connect = {connect} showRoomsMenu ={showRoomsMenu} />
      <main onClick = {clearRooms}>
        <div className = "roomsContainer">
          <Rooms roomsList = {roomsList} switchChannel = {switchChannel} room = {room}/>
        </div>
        <div className = "mainChatContainer">
          <MessageList user = {user} messageArr = {messageArr} room = {room}/>
          <MessageInput sendMessage = {sendMessage} handleChange = {handleChange} message = {message}/>
        </div>
      </main>
    </div>
  );
}

export default Chat;
