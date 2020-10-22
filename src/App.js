import React,{useState} from 'react';
import './App.css';
import Chat from './Chat'
import Join from './Join'
import $ from 'jquery'

//Updates Needed:
//fix arrow to show rooms

//Uncomment for real node server
const ws = new WebSocket('wss://my-ws-app.herokuapp.com/');
//uncomment for local testing
// const ws = new WebSocket('ws://localhost:5000');

function App() {
  const [user,setUser] = useState('')
  const [room,setRoom] = useState('')
  const [messageArr,setMessages] = useState([{room: 'everywhere', user: 'chatbot',text: 'Welcome to the chat'}]);
  const [message, setMessage] = useState('');
  const [state, setState] = useState(true);
  const [connect, setConnect] = useState(false);
  const [roomsList, setRoomsList] = useState(['general']);

  ws.onopen = () => { 
    console.log('Now connected')
    setConnect(true);
  };
  
  ws.onmessage = (event) => {
    const json = JSON.parse(event.data);
    const message =JSON.parse(json)
    if(message.room === room){
        setMessages([...messageArr,message]);
        $("#messageList").scrollTop($("#messageList")[0].scrollHeight);
    }
    
  }
  ws.onclose = () => {
    alert("Connection Lost")
    setConnect(false);
  }
  
  const sendMessage = () => {
    if(message!==''){
      ws.send(JSON.stringify({"room": room, "user": user,"text":message}));
      setMessage('')
      console.log(connect);
      console.log(room);
    }
  }
  function handleChange(e){
    setMessage(e.target.value);
  }
  const handleChangeUser = (e) => {
    setUser(e.target.value)
  }
  const handleChangeRoom = (e) => {
    setRoom(e.target.value)
  }
  const goHome = () => {
    setState(true)
  }
  const switchChannel = (e) => {
    setRoom(e.target.value);
  }
  const join = () => {
    if(user!==''&&room!==''){
      if(!roomsList.includes(room)){
        setRoomsList([...roomsList,room]);
      }
      setState(false);
      console.log(roomsList,room);
    }
  }
  const connectingTooLong = () => {
    let interval = setInterval(() => {
      $('#connecting').html('Try Refreshing Page')
      clearInterval(interval)
    },100000)
  }
  if(!connect){
    connectingTooLong()
  }
  return (
    <div className = "App">
      {
        state
        ?<Join user = {user} room = {room} handleChangeUser = {handleChangeUser} handleChangeRoom = {handleChangeRoom} join = {join} connect = {connect}/>
        :connect
        ?<Chat user={user} room = {room} messageArr = {messageArr} message = {message} goHome = {goHome} sendMessage = {sendMessage} handleChange = {handleChange} connect = {connect} roomsList = {roomsList} switchChannel={switchChannel}/>
        :<Join user = {user} room = {room} handleChangeUser = {handleChangeUser} handleChangeRoom = {handleChangeRoom} join = {join} connect = {connect}/>
      }
    </div>
  );
}

export default App;
