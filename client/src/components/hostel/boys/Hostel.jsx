import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../../../assets/carousel/one.jpg'
import './Hosteldetail.scss';
export const Hostel = () => {
   
  return (
    <>
          <div className='hostel-boys'>
                  <div className='hostel-boys-item'>
                  <div>
                      <img src={img1}/>
                  </div>
                  <div className='hostel-highlight'>
                      <div className='highlight-one'>
                          <h2>Twitter Boys Hostel</h2>
                          <p className='address-hostel'>Durbar Marg, Kathmandu</p>
                          <p className='hostel-offer'>Wifi&middot;24hrElectricity&middot; CCTV &middot;Hotwater</p>
                          <p className='gender'>Male</p>
                      </div>
                      <div className='highlight-two'>
                          <div className='ratings'>
                              <p className='total-rating'>7 ratings</p>
                              <p className='rating-average'>5</p>
                          </div>
                          <div className='amount'>
                              <p className='rs-amount'>Rs.11111</p>
                              <p className='tax-amt'>including tax</p>
                          </div>
                          <div className='btn-see-more'>
                              <Link className='link' to='/hosteldetail'><button>See More</button></Link>
                          </div>
                      </div>
                  </div>
              </div>
    </div>
    </>
  )
}
