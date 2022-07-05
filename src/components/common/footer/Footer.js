import React from 'react'
import './Footer.css'
import FooterLinks from './footerComponents/FooterLinks'
import SocialLinks from './footerComponents/SocialLinks'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer'>
        <div className='footer-heading'>
          <div className='zomato-logo'>
          <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
      alt='zomato-logo' className='footer-logo'/>
          </div>
          <div className='heading-seperator'></div>
          <section className='footer-regional'>
            <div className='button'><span className='button-style'>India</span></div>
            <div className='button-separator'></div>
            <div className='button'><span className='button-style'>English</span></div>
          </section>
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