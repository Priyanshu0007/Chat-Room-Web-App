import React from 'react'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'

const Sidebar = () => {
  return (
    <div className='h-100 pt-2'>
        <div>
            <DashboardToggle></DashboardToggle>
            <CreateRoomBtnModal></CreateRoomBtnModal>
        </div>
        <p>bottoms</p>
    </div>
  )
}

export default Sidebar