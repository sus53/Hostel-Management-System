import React, { useState } from 'react'
import './Admin.scss'
export const ManageUser = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isEditSectionVisible, setEditSectionVisible] = useState(false);


    const handleEllipsisClick = () => {
      setPopupVisible(!isPopupVisible);
    };
    const handleEditClick = () => {
        setEditSectionVisible(!isEditSectionVisible);
        setPopupVisible(false);
    };
  return (
    <>
    <div className='manage-user'>
        <table>
            <tr className='manage-title'>
                <th>Username</th>
                <th>Email</th>
                <th>isAdmin</th>
                <th>isHostelowner</th>
                <th>Action</th>
            </tr>
            <tr className='user-info'>
                <td>Ishuduwal</td>
                <td>ishuduwal8@gmail.com</td>
                <td>Yes</td>
                <td>No</td>
                <td className='edit-delete'>
                  <i class="fa-solid fa-ellipsis" onClick={handleEllipsisClick}></i>
                </td>
            </tr>
        </table>
        {isPopupVisible && (
          <div className='edit-delete-popup'>
            <button onClick={handleEditClick}> <i class="fa-solid fa-pencil"></i></button>
            <button> <i class="fa-solid fa-trash"></i></button>
          </div>
        )}
       {isEditSectionVisible && (
          <div className='edit-section'>
            <div>
            <label>isAdmin</label>
            <select>
                <option>True</option>
                <option>False</option>
            </select>
            </div>
            <div>
            <label>isHostelowner</label>
            <select>
                <option>True</option>
                <option>False</option>
            </select>
            </div>
          </div>
        )}
    </div>
    </>
  )
}
