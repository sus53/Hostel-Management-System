import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../../assets/carousel/one.jpg'
import './Hosteldetail.scss';
import { GetHostel } from '../../../function/Hostel';
export const Hostel = () => {

    const navigate = useNavigate();

    const [hostels, setHostels] = useState([]);

    const getHostels = async () => {
        const res = await GetHostel();
        setHostels(res);
    }

    const seeMoreHandler = (e, hostel) => {
        e.preventDefault();
        navigate('/hosteldetail', { state: { hostel: hostel } })
    }

    useEffect(() => {
        getHostels();
    }, [])

    return (
        <>
            <div className='hostel-boys'>
                {
                    hostels && hostels.map((hostel) => (
                        <div className='hostel-boys-item' key={hostel._id} >
                            <div>
                                <img src={`http://localhost:5000/assets/${hostel.imagepath}`} />
                            </div>
                            <div className='hostel-highlight'>
                                <div className='highlight-one'>
                                    <h2>{hostel.title}</h2>
                                    <p className='address-hostel'>{hostel.location}</p>
                                    <p className='hostel-offer'>Wifi&middot;24hrElectricity&middot; CCTV &middot;Hotwater</p>
                                    <p className='gender'>{hostel.sex}</p>
                                </div>
                                <div className='highlight-two'>
                                    <div className='ratings'>
                                        <p className='total-rating'>7 ratings</p>
                                        <p className='rating-average'>5</p>
                                    </div>
                                    <div className='amount'>
                                        <p className='rs-amount'>Rs.{hostel.price}</p>
                                        <p className='tax-amt'>including tax</p>
                                    </div>
                                    <div className='btn-see-more'>
                                        <button onClick={(e) => seeMoreHandler(e, hostel)} >See More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
        </>
    )
}
