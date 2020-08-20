import React,{useState} from 'react';
import './App.css';
import Chat from './Chat'
import Join from './Join'
import $ from 'jquery'
import notConnected from './not-connected.png'
import connected from './connected.png'

const ws = new WebSocket('wss://my-ws-app.herokuapp.com/');

function App() {
  const [user,setUser] = useState('')
  const [room,setRoom] = useState('')
  const [messageArr,setMessages] = useState([{room: room, user: 'chatbot',text: 'Welcome to the chat'}]);
  const [message, setMessage] = useState('');
  const [state, setState] = useState(true);
  const [connect, setConnect] = useState(false);

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
      console.log(connect)
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
  const join = () => {
    if(user!==''&&room!=='') setState(false);
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
        ?<Chat user={user} room = {room} messageArr = {messageArr} message = {message} goHome = {goHome} sendMessage = {sendMessage} handleChange = {handleChange} connect = {connect}/>
        :<Join user = {user} room = {room} handleChangeUser = {handleChangeUser} handleChangeRoom = {handleChangeRoom} join = {join} connect = {connect}/>
      }
    </div>
  );
}

export default App;
