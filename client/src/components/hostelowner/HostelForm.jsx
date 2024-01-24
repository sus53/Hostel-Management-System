import React, { useState } from 'react'
import HostelMap from '../hostelMap/HostelMap'
import PopUpMap from './PopUpMap';

function HostelForm({ formToggler, setHostel }) {

    const [isMap, setIsMap] = useState(false);

    const mapToggler = () => {
        setIsMap(!isMap);
    }

    return (
        <div className='hostel-form'>
            <div className='top-section'>
                <div>
                    <div>
                        <label>Hostel Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea />
                    </div>
                    <div>
                        <label>Rooms</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Image</label>
                        <input type='file' />
                        <input type='file' />
                        <input type='file' />
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
                        <div className='map-section'>
                            <button onClick={() => mapToggler()} >Choose Location</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-section'>
                <button>Create</button>
            </div>
            <span onClick={() => formToggler()} >
                &times;
            </span>
            {isMap ? <PopUpMap mapToggler={mapToggler} /> : ""}
        </div>
    )
}

export default HostelForm