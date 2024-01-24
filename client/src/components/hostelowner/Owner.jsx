import React from 'react'
import { useState, useEffect } from 'react';
import { GetHostel } from '../../function/Hostel';
import './Owner.scss';
export const Owner = () => {
  const [showAddHostel, setShowAddHostel] = useState(false);
  const [showEditHostel, setShowEditHostel] = useState(false);
  const [hostels, setHostels] = useState([]);


  const handleAddHostel = () => {
    setShowAddHostel(!showAddHostel);
  };
  const handleEditHostel = () => {
    setShowEditHostel(!showEditHostel);
  }
  const closeAddHostel = () => {
    setShowAddHostel(false);
  };
  const closeEditHostel = () => {
    setShowEditHostel(false);
  };

  const FetchHostel = async () => {
    const res = await GetHostel();
    setHostels(res);
  }
  useEffect(() => {
    FetchHostel();
  }, []);
  return (
    <>
      <div className='hostel-owner'>
        <div className='owner-dashboard'>
          <div>
            <p>Hostel Managament</p>
          </div>
          <div>
            <button onClick={handleAddHostel}>Add Hostel</button>
          </div>
        </div>
        {
          showAddHostel && (
            <div className='add-hostel'>
              <div className='top-section'>
                <div>
                <div>
                  <label>Hostel Name</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Description</label>
                  <textarea/>
                </div>
                <div>
                  <label>Rooms</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Price</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Image</label>
                    <input type='file' />
                    <input type='file' />
                    <input type='file'/>
                </div>
                </div>
                <div>
                <div>
                  <label>Sex</label>
                    <select>
                      <option>Boys</option>
                      <option>Girls</option>
                  </select>
                </div>
                <div>
                  <label>Location</label>
                  <div className='map-section'><img src='https://www.google.com/maps/d/thumbnail?mid=1dg8mDvoXmghdAJgJbDRwNj2e6DQ&hl=en'/></div>
                </div>
                </div>
              </div>
              <div className='bottom-section'>
                <button>Create</button>
              </div>
              <span onClick={closeAddHostel}>
              &times;
             </span>
            </div>
          )
        }
        <div className='hostel-info'>
            <table>
              <tr className='table-title'>
                <th>S.N</th>
                <th>Hostel Name</th>
                <th>Description</th>
                <th>Rooms</th>
                <th>Price</th>
                <th>Sex</th>
                <th>Location</th>
                <th>Created Date</th>
                <th>Action</th>
            </tr>
            {hostels.map((hostel, index) => (
                <tr key={index} className='table-data'>
                  <td>{index + 1}</td>
                  <td>{hostel.title}</td>
                  <td className='description-cell'>{hostel.description}</td>
                  <td>{hostel.room}</td>
                  <td>{hostel.price}</td>
                  <td>{hostel.sex}</td>
                  <td>{hostel.location}</td>
                <td>{hostel.createdDate}</td>
                <tr>
                  <td>
                    <button onClick={handleEditHostel}>Edit</button>
                    <p>Delete</p>
                  </td>
                </tr>
                </tr>
              ))}
            </table>
        </div>
        {showEditHostel && (
            <div className='add-hostel'>
              <div className='top-section'>
                <div>
                <div>
                  <label>Hostel Name</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Description</label>
                  <textarea/>
                </div>
                <div>
                  <label>Rooms</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Price</label>
                  <input type='text'/>
                </div>
                <div>
                  <label>Image</label>
                    <input type='file' />
                    <input type='file' />
                    <input type='file'/>
                </div>
                </div>
                <div>
                <div>
                  <label>Sex</label>
                    <select>
                      <option>Boys</option>
                      <option>Girls</option>
                  </select>
                </div>
                <div>
                  <label>Location</label>
                  <div className='map-section'><img src='https://www.google.com/maps/d/thumbnail?mid=1dg8mDvoXmghdAJgJbDRwNj2e6DQ&hl=en'/></div>
                </div>
                </div>
              </div>
              <div className='bottom-section'>
                <button>Update</button>
              </div>
            <span onClick={closeEditHostel}>
              &times;
            </span>
            </div>
        )}
      </div>
    </>
  )
}
