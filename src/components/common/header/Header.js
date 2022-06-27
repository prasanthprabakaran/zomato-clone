import React from 'react';
import "./Header.css";
import "../../../styles/CommonClasses.css";
import "../../../styles/Variable.css";
import {IoLocationSharp,IoCaretDownSharp,IoSearchOutline} from "react-icons/io5";

const Header = () => {
  return (
    <div className='header max-width'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
      alt='zomato-logo' className='header-logo'/>
      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <i className='absolute-center'><IoLocationSharp className='location-icon'/></i>
              <div>Chennai</div>
            </div>
            <i className='absolute-center'><IoCaretDownSharp /></i>
          </div>
          <div className='location-search-separator'></div>
          <div className='header-searchBar'>
            <i className='absolute-center '><IoSearchOutline className='search-icon'/></i>
            <input className='search-input'
            placeholder='Search for restaurant,cuisine or a dish' />
          </div>
        </div>
        <div className='profile-wrapper'>
          <div>Log In</div>
          <div>Sign In</div>
        </div>
      </div>

    </div>
  )
}

export default Header