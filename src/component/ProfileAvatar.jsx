import React from 'react'
import { Avatar } from 'rsuite'
import { getNameInitals } from '../misc/helper'
const ProfileAvatar = ({name,...avatarProps}) => {
  return (
    <Avatar circle {...avatarProps}>
        {getNameInitals(name)}
    </Avatar>
  )
}

export default ProfileAvatar