import React from 'react'
import { Link } from 'react-router-dom';
export const ProfileDropdown = () => {
  return (
    <div className='profile-dropdown'>
      <ul>
        <Link className='link'><li>Profile</li></Link>
        <Link to='/hostelowner' className='link'><li>Register Hostel</li></Link>
      </ul>
    </div >
  )
}
