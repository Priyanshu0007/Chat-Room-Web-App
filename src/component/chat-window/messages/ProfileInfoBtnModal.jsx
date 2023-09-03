import React from 'react'
import { Modal ,Button} from 'rsuite';
import { useModalState } from '../../../misc/cutomhook';
import ProfileAvatar from '../../ProfileAvatar';

const ProfileInfoBtnModal = ({profile,...btnProps}) => {
    const {isOpen,close,open}=useModalState();
    const {name,avatar,createdAt}=profile;
    const shortName=profile.name.split(" ")[0];
    const memberSince= new Date(createdAt).toLocaleString();
  return (
    <div>
        <Button onClick={open} {...btnProps}>
            {shortName}
        </Button>
        <Modal show={isOpen} onHide={close}>
            <Modal.Header>
                <Modal.Title>{shortName} Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
            <ProfileAvatar src={avatar} name={name} className="width-200 height-200 img-fullsize font-huge" />
            <h4 className='mt-2'>{name}</h4>
            <p>Member since {memberSince}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button block onClick={close}>close</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ProfileInfoBtnModal