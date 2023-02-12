import React from 'react'
import Dropdown from './profileSubMenu';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useState } from 'react';

export const Profile = () => {

  
  const [dropdown, setDropdown] = useState(false);
     
  return (
    <div>  
      <button type="button"
      onClick={() => {dropdown?setDropdown(false):setDropdown(true)}}>
  <Avatar src='https://bit.ly/broken-link'size="sm"/>
  </button>
  {dropdown?
    <Dropdown/>:""
  }
  
    </div>
  )
}
