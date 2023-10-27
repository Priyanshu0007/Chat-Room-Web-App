import React from 'react'
import ChatTop from "../../component/chat-window/top/index"
import ChatBottom from "../../component/chat-window/bottom/index"
import Messages from "../../component/chat-window/messages/index"
import { useParams } from 'react-router-dom'
import { useRooms } from '../../context/room.context'
import { Loader } from 'rsuite'
import { CurrentRoomProvider } from '../../context/CurrentRoom.context'
import { transformToArray } from '../../misc/helper'
import { auth } from '../../misc/firebase'
const Chat = () => {
    const {chatId}=useParams();
    const rooms=useRooms();
    if (!rooms) {
        return <Loader center vertical size="md" content="Loading" speed='slow' />
    }
    const currentRooms=rooms.find(room=>room.id===chatId);
    if (!currentRooms) {
        return <h6 className='text-center mt-page'>Chat {chatId} not found</h6>
    }
    const {name,description}=currentRooms;
    const admins=transformToArray(currentRooms.admins);
    const isAdmin=admins.includes(auth.currentUser.uid);
    const currentRoomData={
        name,
        description,
        admins,
        isAdmin,
    }
  return (
    <CurrentRoomProvider data={currentRoomData}>
        <div className='chat-top'>
            <ChatTop/>
        </div>
        <div className='chat-middle'> 
            <Messages/>
        </div>
        <div className='chat-bottom'>
            <ChatBottom/>
        </div>
    </CurrentRoomProvider>
  )
}

export default Chat