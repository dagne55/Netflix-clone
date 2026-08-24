import React from 'react'
import './header.css';
import Netflix_Logo_RGB from '../../assets/images/Netflix_Logo_RGB.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIconL from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'>
<div className='header_container'>
        <div className='header_left'>
        <ul>
            <li><img src={Netflix_Logo_RGB} alt="Netflix Logo"/></li>
             <li>Home</li>
              <li>TV Shows</li>
               <li>Movies</li>
               <li>Latest</li>
              <li>my List</li>
               <li>Browse by language</li>
        </ul>
</div>
<div className='header_right'>
        <ul>
            <li><SearchIcon /></li>
             <li><NotificationsNoneIcon /></li>
              <li><AccountBoxIcon /></li>
               <li><ArrowDropDownIconL /></li>
        </ul>
</div>
</div>
    </div>
  )
}

export default Header;