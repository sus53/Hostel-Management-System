import React from 'react';
import { Link } from 'react-router-dom';
import './User.scss';
export const ForgotPassword = () => {
  return (
    <>
      <div className='forgot-password'>
        <form>
        <div>
          <p>Forgot password?</p>
        </div>
        <div className='inputBox'>
          <input type='email' placeholder='Email' />
        </div>
        <div className='reset-btn'>
          <button>Reset Password</button>
        </div>
        <div><Link to='/login' className='link'>Back to Login</Link></div>
        </form>
      </div>
    </>
  )
}
