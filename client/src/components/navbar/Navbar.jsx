import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HostelDropdown } from './HostelDropdown';
import './Navbar.scss';
import { ProfileDropdown } from './ProfileDropdown';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    } else {
      setTheme("dark-theme")
    }
  }

  const [openHostel, setOpenHostel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <>
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
          <li onClick={() => setOpenHostel((prev) => !prev)}>Hostel
            {
              openHostel && (
                <HostelDropdown />
              )
            }
          </li>
          <li className='profile' onClick={() => setOpenProfile((prev) => !prev)}>Profile
            {
              openProfile && (
                <ProfileDropdown />
              )
            }
          </li>
          <li className='toggle'>
            <div onClick={() => toggleTheme()}>
              {theme === 'light-theme' ? (<img src={moon} />) : (<img src={sun} className="sun-icon" />)}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
