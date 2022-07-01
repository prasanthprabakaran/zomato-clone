import React from 'react'
import './Footer.css'
import FooterLinks from './footerComponents/FooterLinks'
import SocialLinks from './footerComponents/SocialLinks'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer'>
        <div className='footer-heading'>
          <div className='zomato-logo'></div>
          <div className='heading-seperator'></div>
          <div className='footer-regional'>
            <button><span>India</span></button>
            <button><span>English</span></button>
          </div>
        </div>
        <div className='links-section'>
          <FooterLinks />
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default Footer