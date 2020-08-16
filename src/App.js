import React,{useState} from 'react';
import './App.css';
import Chat from './Chat'
import Join from './Join'


function App() {
  const [username,setUsername] = useState('')
  const [enterRoom, setEnterRoom] = useState('')
  const [state, setState] = useState(true);

  const handleChangeUser = (e) => {
    setUsername(e.target.value)
  }
  const handleChangeRoom = (e) => {
    setEnterRoom(e.target.value)
  }

  const join = () => {
    if(username!==''&&enterRoom!=='') setState(false);
  }
  return (
    state
    ?<Join username = {username} enterRoom = {enterRoom} handleChangeUser = {handleChangeUser} handleChangeRoom = {handleChangeRoom} join = {join}/>
    :<Chat username={username} enterRoom = {enterRoom}/>
  );
}

export default App;
