import React from 'react';
import Room from './Room';


function Rooms({roomsList, switchChannel}){
    return(
        <div className="rooms-container">
            <h3 className="roomsHeader">Rooms</h3>
            <div className="verticalCenter">
                <ul>
                    {roomsList.map((room,index) => {
                        return <li key = {index}><Room room = {room} switchChannel = {switchChannel}/></li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Rooms;