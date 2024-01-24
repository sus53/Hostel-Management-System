import React, { useState } from 'react'
import './Hosteldetail.scss';
import img1 from '../../../assets/carousel/one.jpg';
import img2 from '../../../assets/carousel/two.jpg';
import img3 from '../../../assets/carousel/three.jpg';
export const HostelDetail = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeSection, setActiveSection] = useState('description');

    const openImage = (image) => {
      setSelectedImage(image);
    };
  
    const closeImage = () => {
      setSelectedImage(null);
    };
    //section-onclick-reviews and descriptrion
    const switchSection = (section) => {
        setActiveSection(section);
    }
  return (
      <>
          <div className='boys-hostel'>
              <div className='hostel-top'>
                 <div className='image-section'>
                      <div><img src={ img1} className='hostel-img full' onClick={() => openImage(img1)}/></div>
                      <div className='two-img'>
                          <img src={img2} className='hostel-img' onClick={() => openImage(img2)}/>
                          <img src={img3} className='hostel-img' onClick={() => openImage(img3)}/>
                      </div>
                  </div>
                  <div className='map-section'>
                      <img src={img1}/>
                  </div>
                  {selectedImage && (
                  <div className="full-image-overlay" onClick={closeImage}>
                    <div className="full-image-container">
                     <span className="close-button" onClick={closeImage}>
                       &times;
                     </span>
                     <img src={selectedImage} className="full-image" alt="Hostel" />
                    </div>
                 </div>
                  )}
              </div>
              <div className='hostel-detail'>
                  <h1>Twitter Boys Hostel</h1>
                  <div className='description-review'>
                      <div className={`description ${activeSection ==='description'? 'active':''}`} onClick={() => switchSection('description')}>Description</div>
                      <div  className={`reviews ${activeSection === 'reviews' ? 'active' : ''}`} onClick={() => switchSection('reviews')}>Reviews</div>
                  </div>
                  {activeSection === 'description' && (
                      <div className='description-onclick'>
                        <h4>Hostel information</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid aut, numquam cupiditate incidunt aspernatur expedita. In ad, dolorum corporis, autem neque quod quisquam laborum sed animi molestias nemo dolorem!</p>
                        <h4>Available Rooms</h4>
                        <p><i class="fa-solid fa-bed"></i>1 bed roomsssssss</p>
                        <p><i class="fa-solid fa-bed"></i>2 bed room</p>
                  </div>
                  )}
                  {activeSection === 'reviews' && (
                    <div className='reviews-onclick'>
                      <h4>Reviews Here</h4>
                        <div className='user-review'>
                            <div>
                             <p><span className='user-name'>Srijandai</span><span className='date'>November 9,2023</span></p>
                             <p>Very good hostel in the town liked it very much i give it a four.</p>    
                            </div>
                            <div>
                             <i class="fa-solid fa-star"></i>
                             <i class="fa-solid fa-star"></i>
                             <i class="fa-solid fa-star"></i>
                             <i class="fa-solid fa-star"></i>
                             <i class="fa-solid fa-star"></i>
                            </div>
                          </div>
                          <div className='comment-review'>
                              <h4>Write a Review</h4>
                              <p>Rating</p>
                              <div className='star-rating'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              </div>
                              <div className='comment-section'>
                                  <h4>Write a Comment</h4>
                                  <div>
                                      <textarea placeholder='Share your experience'/>
                                  </div>
                                  <div className='btn-submit'>
                                      <button>Submit</button>
                                  </div>
                              </div>
                          </div>
                    </div>  
                  )}
              </div>
          </div>
      </>
  )
}
