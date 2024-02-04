import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { ProfileDropdown } from './ProfileDropdown';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/Index';

const Navbar = () => {
  const [openHostel, setOpenHostel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const dispatch = useDispatch();

  const storage = useSelector((state) => state)

  const toggleTheme = () => {
    dispatch(setTheme());
  }

  return (
    <div>
      <nav>
        <Link to='/' className='link'>
          <span>
            <span className="material-symbols-outlined">home</span>
            <p>Sanoghar</p>
          </span>
        </Link>
        <ul>
          <li><Link className='link' to='/'>Home</Link></li>
          <li>About</li>
          <li><Link to={'/map'} className='link'>Map</Link></li>
          <li><Link className='link' to='/hostel'>Hostel</Link></li>
          <li className='profile' onClick={() => setOpenProfile((prev) => !prev)}>

            {
              storage.user ?
                <>
                  {storage.user.username}
                  {openProfile && (
                    <ProfileDropdown />
                  )}
                </>
                :
                <Link to='/login' className='link'>Login</Link>
            }

          </li>
          <li className='toggle'>
            <div onClick={() => toggleTheme()}>
              {storage.theme === 'light-theme' ? (<img src={moon} />) : (<img src={sun} className="sun-icon" style={{ fill: "white" }} />)}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
