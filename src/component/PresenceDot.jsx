import React from 'react'
import { Badge, Tooltip, Whisper } from 'rsuite';
import { usePresence } from '../misc/cutomhook'

const getColor=(presence)=>{
    if (!presence) {
        return "gray";
    }
    switch (presence.state) {
        case "online":
            return "green"
        case "offline":
            return "red"
    
        default:
            return "gray";
    }
}
const getText=(presence)=>{
    if (!presence) {
        return "Unknown state"
    }
    return presence.state==="online"?"online":`last online ${new Date(presence.last_change).toLocaleDateString()}`
}

const PresenceDot = ({uid}) => {
    const presence=usePresence(uid);
  return (
    <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={
    <Tooltip>
        {getText(presence)}
    </Tooltip>}>
      <Badge className='cursor-pointer' style={{backgroundColor:getColor(presence)}}></Badge>
    </Whisper>
  )
}

export default PresenceDot