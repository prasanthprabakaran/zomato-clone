import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaYoutube } from "react-icons/fa";
import './sociallinks.css'

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <div className='social-sections'>
        <div className='links'>
          <h6 className='heading'>Social Links</h6>
          <div className='icons'>
          <FaLinkedin />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaFacebook />
          </div>
          <div className='app-store'>
            <img className='icon' alt="apple" src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"/>
          </div>
          <div className='separator'></div>
          <div className='play-store'>
            <img className='icon' alt='playstore' src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialLinks