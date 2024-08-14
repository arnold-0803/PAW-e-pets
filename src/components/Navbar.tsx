import React, { useState } from 'react';
import { MenuData } from '../data/MenuData';
import "./NavbarStyles.css";
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar: React.FC = ()  => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="navbar">
      <NavLink to='/'>
        <h2>P<i className='fa-solid fa-paw'></i>W</h2>
      </NavLink>
      <SearchBar open={open}/>
      <ul 
        className={open ? "menu active" : "menu"}
      >
        {MenuData.map((item, index) => (
          <li className='menu-item' key={index}>
            <NavLink 
              className='menu-link' to={item.link}
            >
              {item.title}
              <i className={item.icon}></i>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="menu-bar">
        <i 
          onClick={() => setOpen(!open)}
          className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        >
        </i>
      </div>
    </div>
  )
}

export default Navbar