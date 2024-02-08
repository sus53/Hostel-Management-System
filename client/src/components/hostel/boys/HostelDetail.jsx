import React, { useEffect, useState } from 'react'
import './Hosteldetail.scss';
import img1 from '../../../assets/carousel/one.jpg';
import img2 from '../../../assets/carousel/two.jpg';
import img3 from '../../../assets/carousel/three.jpg';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AddHostelReview, GetHostelReview } from '../../../function/HostelReview';
import { format } from 'timeago.js'
import StarIcon from '@mui/icons-material/Star';

export const HostelDetail = () => {

  const state = useLocation().state.hostel;
  const username = useSelector(state => state).user.username;

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState('description');
  const [review, setReview] = useState({ username, hostel: state.title, rating: 1 });
  const [reviews, setReviews] = useState([]);
  const [hoverStar, setHoverStar] = useState(1);

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

  const addReviewHandler = async (e) => {
    e.preventDefault();
    const res = await AddHostelReview(review);
    if (!res.success) return;
    setReview({ username, hostel: state.title, rating: 1, review: '' });
    setHoverStar(0);
    getReviews();
  }

  const getReviews = async () => {
    const res = await GetHostelReview({ hostel: state.title });
    setReviews(res);
  }

  useEffect(() => {
    getReviews();
  }, [])

  return (
    <>
      <div className='boys-hostel'>
        <div className='hostel-top'>
          <div className='image-section'>
            <div><img src={`http://localhost:5000/assets/${state.imagepath1}`} className='hostel-img full' onClick={() => openImage(img1)} /></div>
            <div className='two-img'>
              <img src={`http://localhost:5000/assets/${state.imagepath2}`} className='hostel-img' onClick={() => openImage(img2)} />
              <img src={`http://localhost:5000/assets/${state.imagepath3}`} className='hostel-img' onClick={() => openImage(img3)} />
            </div>
          </div>
          <div className='map-section'>
            <img src={img1} />
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
          <h1>{state.title}</h1>
          <div className='description-review'>
            <div className={`description ${activeSection === 'description' ? 'active' : ''}`} onClick={() => switchSection('description')}>Description</div>
            <div className={`reviews ${activeSection === 'reviews' ? 'active' : ''}`} onClick={() => switchSection('reviews')}>Reviews</div>
          </div>
          {activeSection === 'description' && (
            <div className='description-onclick'>
              <h3>Hostel information</h3>
              <p>{state.description}</p>
              <h4>Available Rooms</h4>
              <p><i className="fa-solid fa-bed"></i>{state.room}</p>
              <h4>Price</h4>
              <p><i className="fa-solid "></i>{state.price}</p>
              <button className='btn-booking'  >Book now!</button>
            </div>
          )}
          {activeSection === 'reviews' && (
            <div className='reviews-onclick'>
              <h3>Reviews</h3>
              <div className='user-review'>
                {
                  reviews && reviews.map(review => (
                    <div key={review._id}>
                      <p>
                        <div>
                          <span className='user-name'>{review.username}</span>
                          <span className='date'>{format(review.createdAt)}</span>
                        </div>
                        <div>{review.review}</div>
                      </p>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={review._id} className={i < review.rating ? 'active' : ''} />
                        ))}
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className='comment-review'>
                <h4>Write a Review</h4>
                <div className='star-rating'>
                  {
                    [...Array(5)].map((_, i) => (<StarIcon key={i} className={i < hoverStar ? "star" : ""} onClick={() => setReview({ ...review, rating: i + 1 })} onMouseEnter={() => setHoverStar(i + 1)} onMouseLeave={() => setHoverStar(review.rating)} />))
                  }
                </div>
                <div className='comment-section'>
                  <div>
                    <textarea value={review.review} onChange={(e) => setReview(prev => ({ ...prev, review: e.target.value }))} placeholder='Share your experience' />
                  </div>
                  <div className='btn-submit'>
                    <button onClick={e => addReviewHandler(e)} >Submit</button>
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
