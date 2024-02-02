import React, { useState } from 'react'
import PopUpMap from './PopUpMap';
import { AddHostel } from '../../function/Hostel';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function HostelForm({ formToggler, setHostel, hostel }) {

    const dispatch = useDispatch();
    const dt = useSelector((state) => state);
    const [isMap, setIsMap] = useState(false);
    const [response, setResponse] = useState(null);

    const navigate = useNavigate();

    const mapToggler = () => {
        setIsMap(!isMap);
        console.log(dt)
    }

    const addHostelHandler = async (e) => {
        e.preventDefault();

        const res = await AddHostel(hostel);
        setResponse(res);
        if (!res.success) return;
        navigate('/hostelowner')
    }

    return (
        <div className='hostel-form'>
            <div className='top-section'>
                <div>
                    <div>
                        <label>Hostel Name</label>
                        <input type='text' value={hostel.title} onChange={(e) => setHostel({ ...hostel, title: e.target.value })} />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea value={hostel.description} onChange={(e) => setHostel({ ...hostel, description: e.target.value })} />
                    </div>
                    <div>
                        <label>Rooms</label>
                        <input type='text' value={hostel.room} onChange={(e) => setHostel({ ...hostel, room: e.target.value })} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type='text' value={hostel.price} onChange={(e) => setHostel({ ...hostel, price: e.target.value })} />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type='file' onChange={(e) => setHostel({ ...hostel, image: e.target.files[0], imagePath: e.target.files[0].name })} />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Sex</label>
                        <select onChange={(e) => setHostel({ ...hostel, sex: e.target.value })} >
                            <option value="Boys">Boys</option>
                            <option value="Girls">Girls</option>
                        </select>
                    </div>
                    <div>
                        <label>Location</label>
                        <label className='lbl-location' >{hostel.location}</label>
                        <div className='map-section'>
                            <button onClick={() => mapToggler()} >Choose Location</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-section'>
                <button onClick={(e) => addHostelHandler(e)} >Create</button>
            </div>
            <span onClick={() => formToggler()} >
                &times;
            </span>
            {isMap ? <PopUpMap mapToggler={mapToggler} setHostel={setHostel} /> : ""}
        </div>
    )
}

export default HostelForm