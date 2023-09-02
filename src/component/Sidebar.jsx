import React, { useEffect, useRef, useState } from 'react'
import { Divider } from 'rsuite'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'
import ChatRoomList from './room/ChatRoomList'

const Sidebar = () => {
  const topSidebarRef=useRef();
  const [height,setHieght]=useState(0);
  useEffect(()=>{
    if (topSidebarRef.current) {
      setHieght(topSidebarRef.current.scrollHeight);
    }
  },[topSidebarRef]);
  return (
    <div className='h-100 pt-2'>
        <div ref={topSidebarRef}>
            <DashboardToggle></DashboardToggle>
            <CreateRoomBtnModal></CreateRoomBtnModal>
            <Divider>Join Conversion</Divider>
        </div>
        <ChatRoomList aboveElHeight={height} />
    </div>
  )
}

export default Sidebar