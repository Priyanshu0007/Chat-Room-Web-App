import React from 'react'
import TimeAgo from 'timeago-react'
const RoomItem = ({room}) => {
    const { createdAt,name}=room;
  return (
    <div>
        <div className='d-flex justified-content-between align-items-center'>
            <h3 className='text-disappear'>{name}</h3>
            <TimeAgo dataTime={new Date(createdAt)} className="font-normal text-black-45"></TimeAgo>
        </div>
        <div className='d-flex align-items-center text-black-70'>
            <span>No Messages Yet...</span>
        </div>
    </div>
  )
}

export default RoomItem