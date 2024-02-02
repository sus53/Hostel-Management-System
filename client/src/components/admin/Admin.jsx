import React, { useState } from 'react'
import './Admin.scss';
export const Admin = () => {
  const [isEditSectionVisible, setEditSectionVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('manage-user');
  const handleEditClick = () => {
    setEditSectionVisible(!isEditSectionVisible);
    setPopupVisible(false);
  };
  const switchSection = (section) => {
    setActiveSection(section);
  }
  return (
    <>
      <div className='admin'>
        <div className='admin-dashboard'>
          <div className='admin-logo'>
            <i class="fa-solid fa-user-tie"></i>
            <p>Admin</p>
          </div>
          <div className='dashboard-link'>
            <div className={`approve-hostel ${activeSection === 'approve-hostel' ? 'active' : ''}`} onClick={() => switchSection('approve-hostel')}>
              <i class="fa-solid fa-bed"></i>Approve Hostel
            </div>
            <div className={`manage-user ${activeSection === 'manage-user' ? 'active' : ''}`} onClick={() => switchSection('manage-user')}>
              <i class="fa-solid fa-user"></i>Manage User
            </div>
          </div>
        </div>
        <div className='dashboard-section'>
          {activeSection === 'manage-user' && (
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
                    <button onClick={handleEditClick}> <i class="fa-solid fa-pencil"></i></button>
                    <button> <i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              </table>
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
                    <div>
                      <button>save</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {activeSection === 'approve-hostel' && (
            <div className='approve-hostel'>
              <table>
                <tr className='manage-title'>
                  <th>Hostel Name</th>
                  <th>Hostel Owner</th>
                  <th>Created at</th>
                  <th>Action</th>
                </tr>
                <tr className='user-info'>
                  <td>Twitter boys hostel</td>
                  <td>srijan dai</td>
                  <td>2020/11/11</td>
                  <td className='edit-delete'>
                    <button className='verify'>Verify</button>
                    <button className='delete'>Delete</button>
                  </td>
                </tr>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Admin;
