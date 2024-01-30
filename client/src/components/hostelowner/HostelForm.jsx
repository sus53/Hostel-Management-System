import React, { useState } from 'react'
import PopUpMap from './PopUpMap';
import { AddHostel } from '../../function/Hostel';
import { useDispatch, useSelector } from 'react-redux';
function HostelForm({ formToggler, setHostel, hostel }) {

    const dispatch = useDispatch();
    const dt = useSelector((state) => state);
    const [isMap, setIsMap] = useState(false);
    const mapToggler = () => {
        setIsMap(!isMap);
        console.log(dt)
    }

    const addHostelHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', hostel.title);
        formData.append('description', hostel.description);
        formData.append('room', hostel.room);
        formData.append('price', hostel.price);
        formData.append('location', hostel.location);
        formData.append('sex', hostel.sex);
        if (hostel.image) {
            formData.append('image', hostel.image);
            formData.append('imagePath', hostel.imagePath);
        }

        const res = await AddHostel(formData);
        console.log(res)
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
                        <select value={hostel.sex} onChange={(e) => setHostel({ ...hostel, sex: e.target.value })} >
                            <option>Boys</option>
                            <option>Girls</option>
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