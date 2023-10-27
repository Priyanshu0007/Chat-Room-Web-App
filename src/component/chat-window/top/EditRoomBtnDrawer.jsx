import React, { memo } from 'react'
import { useParams } from 'react-router';
import { Alert, Button, Drawer } from 'rsuite'
import { useCurrentRoom } from '../../../context/CurrentRoom.context';
import { useMediaQuery, useModalState } from '../../../misc/cutomhook'
import { database } from '../../../misc/firebase';
import EditableInput from '../../dashboard/EditableInput';

const EditRoomBtnDrawer = () => {
    const {isOpen,close,open}=useModalState();
    const {chatId}=useParams();
    const isMobile=useMediaQuery("(max-width:992px)");
    const name=useCurrentRoom(v=>v.name);
    const description=useCurrentRoom(v=>v.description);
    const updateData=(key,value)=>{
        database.ref(`rooms/${chatId}`).child(key).set(value).then(()=>{
            Alert.success("Successfully Updated",4000);
        }).catch(err=>{
            Alert.error(err.message,4000);

        })
    }
    const onNameSave=(newName)=>{
        updateData("name",newName);
    }
    const onDescriptionSave=(newDescription)=>{
        updateData("description",newDescription);
    }
  return (
    <div>
        <Button className='br-circle' size='sm' color='red' onClick={open}>
            A
        </Button>
        <Drawer full={isMobile} show={isOpen} onHide={close} placement="right">
            <Drawer.Header>
                <Drawer.Title>Edit Room</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <EditableInput initialValue={name} onSave={onNameSave} lable={<h6 className='mb-6'>Name</h6>} emptyMsg="Name can to be empty"></EditableInput>
                <EditableInput componentClass="textarea" rows={5} initialValue={description} onSave={onDescriptionSave} emptyMsg="Description can to be empty" wrapperClassName="mt-3">Description</EditableInput>
            </Drawer.Body>
            <Drawer.Footer>
                <Button block onClick={close}>Close</Button>
            </Drawer.Footer>
        </Drawer>
    </div>
  )
}

export default memo(EditRoomBtnDrawer)