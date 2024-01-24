import React from 'react'
import { Link } from 'react-router-dom';
export const ProfileDropdown = () => {
  return (
    <div className='profile-dropdown'>
        <ul>
          <Link to='/login' className='link'><li>Login</li></Link>
          <Link to='/loginhostel' className='link'><li>Register Hostel</li></Link>
        </ul>
    </div>
  )
}
