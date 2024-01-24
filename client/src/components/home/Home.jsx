import React from 'react'
import { Carousel } from './Carousel'
import { FeaturedHostel } from './FeaturedHostel';
import { Footer } from './Footer';
import './Home.scss';
import { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { googleSignIn } from '../../Utensils/GoogleHandler';
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();
  const googleSignInHandler = (credential) => {
    const res = googleSignIn(credential);
    if (res.user === "") return;
    navigate('/');
  }

  return (
    <>
      <GoogleLogin
        onSuccess={res => {
          googleSignInHandler(res.credential);
        }}
        size='small'
        useOneTap
      />
      <Carousel />
      <FeaturedHostel />
      <Footer />
    </>

  )
}
