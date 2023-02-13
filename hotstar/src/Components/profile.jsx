import React from 'react'
import Dropdown from './profileSubMenu';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useState } from 'react';

export const Profile = () => {

  
  const [dropdown, setDropdown] = useState(false);
     
  return (
    <div style={{
      position:'relative',
    }}
    
    >  
      <button type="button"
        // onClick={() => { setDropdown(!dropdown) }}
        onMouseEnter={() => { setDropdown(!dropdown) }}
      >
  <Avatar margin='0' src='https://bit.ly/broken-link'size="sm"/>
  </button>
  {dropdown?<Dropdown setDropdown={setDropdown} />:""}
  
    </div>
  )
}
