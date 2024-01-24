import React from 'react'
import { useNavigate } from 'react-router-dom';

export const HostelDropdown = () => {
  const navigate = useNavigate();
  const BoysHostelHandler = (e) =>{
    e.preventDefault();
    navigate('/hostel', { state: e.target.textContent })
  }
  return (
      <div className='hostel-dropdown'>
          <ul>
              <li>Girls Hostel</li>
              <li onClick={BoysHostelHandler}>Boys Hostel</li>
          </ul>
    </div>
  )
}
