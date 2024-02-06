import React from 'react'
import { useState, useEffect } from 'react';
import { GetHostel } from '../../function/Hostel';
import './Owner.scss';
import HostelForm from './HostelForm';
import { useSelector } from 'react-redux';

export const Owner = () => {
  const storage = useSelector((state) => state);

  const [isForm, setIsForm] = useState(false);
  const [hostels, setHostels] = useState([]);
  const [hostel, setHostel] = useState({ title: "", description: "", room: "", price: "", image: [], location: "", sex: "Boys" });
  const [isEditHostel, setIsEditHostel] = useState(false);

  const formToggler = () => {
    setIsForm(!isForm);
  };

  const FetchHostel = async () => {
    const res = await GetHostel({ email: storage.user.email });
    setHostels(res);
  }

  useEffect(() => {
    FetchHostel();
  }, [, isForm]);

  return (
    <>
      <div className='hostel-owner'>
        <div className='owner-dashboard'>
          <div>
            <p>Hostel Managament</p>
          </div>
          <div>
            <button onClick={() => formToggler()}>Add Hostel</button>
          </div>
        </div>
        <div className='hostel-info'>
          <table>
            <thead>
              <tr className='table-title'>
                <th>S.N</th>
                <th>Hostel Name</th>
                <th>Description</th>
                <th>Rooms</th>
                <th>Price</th>
                <th>Sex</th>
                <th>Location</th>
                <th>Created Date</th>
                <th>Approval</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {hostels && hostels.map((hostel, index) => (
                <tr key={index} className='table-data'>
                  <td>{index + 1}</td>
                  <td>{hostel.title}</td>
                  <td className='description-cell'>{hostel.description}</td>
                  <td>{hostel.room}</td>
                  <td>{hostel.price}</td>
                  <td>{hostel.sex}</td>
                  <td>{hostel.location}</td>
                  <td>{hostel.createdAt.slice(0, 10)}</td>
                  <td>{hostel.isApprove}</td>
                  <tr>
                    <td>
                      <button onClick={() => formToggler()}>Edit</button>
                      <p>Delete</p>
                    </td>
                  </tr>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isForm && <HostelForm formToggler={formToggler} hostel={hostel} setHostel={setHostel} />}
      </div>
    </>
  )
}
