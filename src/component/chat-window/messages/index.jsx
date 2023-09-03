import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {database} from "../../../misc/firebase"
import { transformToArrayWithID } from '../../../misc/helper';
import MessageItem from './MessageItem';
const Messages = () => {
  const {chatId}=useParams();
  const [meessages,setMessages]=useState(null);
  const isChatEmpty=meessages&&meessages.length===0;
  const canShowMessage=meessages && meessages.length>0;
  useEffect(()=>{
    const messageRef=database.ref(`/messages`);
    messageRef.orderByChild("roomId").equalTo(chatId).on("value",(snap)=>{
      const data=transformToArrayWithID(snap.val());
      setMessages(data);
      return()=>{
        messageRef.off("value");
      }
    });
  },[chatId])
  return (
    <ul className='msg-ls custom-scroll'>
      {isChatEmpty && <li>No Messages Yet...</li>}
      {canShowMessage && meessages.map(msg=>
        <MessageItem key={msg.id} message={msg}></MessageItem>
        )}
    </ul>
  )
}

export default Messages