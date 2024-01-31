import React from 'react'
import { Carousel } from './Carousel'
import { FeaturedHostel } from './FeaturedHostel';
import { Footer } from './Footer';
import './Home.scss';
import { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Home = () => {

  const navigate = useNavigate();
  const storage = useSelector(state => state)
  const googleSignInHandler = (credential) => {

  }

  return (
    <>
      {
        !storage.user
          ?
          <GoogleLogin
            onSuccess={res => {
              googleSignInHandler(res.credential);
            }}
            size='small'
            useOneTap
          />
          :
          ""
      }

      <Carousel />
      <FeaturedHostel />
      <Footer />
    </>

  )
}
