import React,{useState} from 'react';
import './Chat.css';
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import InfoBar from './InfoBar'

const ws = new WebSocket('ws://localhost:3030');

function Chat({username, enterRoom, goHome}) {
  const [user,setUser] = useState(username)
  const [room,setRoom] = useState(enterRoom)
  const [messageArr,setMessages] = useState([{room: room, user: 'chatbot',text: 'Welcome to the chat'}]);
  const [message, setMessage] = useState('');

  ws.onopen = () => { 
    console.log('Now connected')
  };
  
  ws.onmessage = (event) => {
    console.log(event.data)
    console.log(JSON.parse(event.data))
    console.log(messageArr)
    const json = JSON.parse(event.data);
    const message =JSON.parse(json)
    console.log(message.room)
    if(message.room === room){
        setMessages([...messageArr,message]);
    }
    
  }
  
  const sendMessage = () => {
    if(message!==''){
      ws.send(JSON.stringify({"room": room, "user": user,"text":message}));
      setMessage('')
      console.log('message sent')
    }
  }

  function handleChange(e){
    setMessage(e.target.value);
  }


  return (
    <div className="chat">
      <InfoBar user = {user} room = {room} goHome = {goHome}/>
      <MessageList user = {user} messageArr = {messageArr}/>
      <MessageInput sendMessage = {sendMessage} handleChange = {handleChange} message = {message}/>
      {/* {messageArr.map((message,index) => <li key = {index}>{message.text}</li>)}
      <button onClick = {sendMessage}>test</button> */}
    </div>
  );
}

export default Chat;
