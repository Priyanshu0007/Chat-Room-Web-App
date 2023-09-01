import React, { useCallback, useRef, useState } from 'react'
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup, Icon, Modal, Schema } from 'rsuite'
import { useModalState } from '../misc/cutomhook'
import firebase from 'firebase/app';
import { database } from '../misc/firebase';
 const {StringType}=Schema.Types;
const model=Schema.Model({
    name:StringType().isRequired("Chat name is required"),
    discription:StringType().isRequired("Discription name is required")
});
const INITIAL_FORM={
    name:"",
    desciption:""
}
const CreateRoomBtnModal = () => {
    const {isOpen,close,open}=useModalState();
    const [formValue,setFormValue]=useState(INITIAL_FORM);
    const [isLoading,setIsLoading]=useState(false);
    const formRef=useRef();
    const formChange=useCallback((value)=>{
        setFormValue(value);
    },[]);
    const onSubmit=async()=>{
        if (!formRef.current.check()) {
            return
        }
        setIsLoading(true);
        const newRoomdata={
            ...formValue,
            createdAt:firebase.database.ServerValue.TIMESTAMP
        }
        try {
            await database.ref("rooms").push(newRoomdata);
            setIsLoading(false);
            setFormValue(INITIAL_FORM);
            close();
            Alert.info(`${formValue.name} has been created`,4000);
        } catch (err) {
            setIsLoading(false);
            Alert.error(err.message,4000);
        }
    }
  return (
    <div className='mt-1'>
        <Button block color='green' onClick={open}>
            <Icon icon="creative"/>Create new chat room
        </Button>
        <Modal show={isOpen} onHide={close}>
            <Modal.Header><Modal.Title>New Chat Room</Modal.Title></Modal.Header>
            <Modal.Body>
                <Form fluid onChange={formChange} formValue={formValue} model={model} ref={formRef}>
                    <FormGroup>
                        <ControlLabel>Room Name</ControlLabel>
                        <FormControl name='name' placeholder="Enter chat room name..."></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Discription</ControlLabel>
                        <FormControl componentClass="textarea" rows={5} name="discription" placeholder="Enter room discription..."></FormControl>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button block appearance='primary' onClick={onSubmit} disabled={isLoading}>
                    Create new chat room
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default CreateRoomBtnModal