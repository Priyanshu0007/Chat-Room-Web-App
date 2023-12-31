import React,{memo} from 'react'
import { ButtonToolbar, Icon } from 'rsuite';
import { useCurrentRoom } from '../../../context/CurrentRoom.context'
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../../misc/cutomhook';
import RoomInfoBtnModal from './RoomInfoBtnModal';
import EditRoomBtnDrawer from './EditRoomBtnDrawer';
const Top = () => {
    const name=useCurrentRoom(v=>v.name);
    const isMobile=useMediaQuery("(max-width:992px)");
    const isAdmin=useCurrentRoom(v=>v.isAdmin);
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center'>
            <h4 className='text-disappear d-flex align-items-center'>
                <Icon componentClass={Link} to="/" icon="arrow-circle-left" size='2x' className={isMobile?"d-inline-block p-0 mr-2 text-blue link-unstyled":"d-none"} />
                <span className='text-diappear'>{name}</span>
            </h4>
            <ButtonToolbar className='ws-nowrap' >
              {isAdmin&&
                <EditRoomBtnDrawer/>
              }
            </ButtonToolbar>
        </div>    
        <div className='d-flex justify-content-between align-items-center'>
                <span></span>
                <RoomInfoBtnModal></RoomInfoBtnModal>
        </div>
    </div>
  )
}

export default memo(Top)