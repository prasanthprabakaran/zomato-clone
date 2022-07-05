import React from 'react'
import './footerlinks.css'


const aboutZomato =[
  {
    id: 1,
    title: "Who We Are",
  },
  {
    id: 2,
    title: "Blog",
  },
  {
    id: 3,
    title: "Work With Us",
  },
  {
    id: 4,
    title: "Investor Relations",
  },
  {
    id: 5,
    title: "Report Fraud",
  },
]

const zomaVerse =[
  {
    id: 1,
    title: "Zomato",
  },
  {
    id: 2,
    title: "Feeding India",
  },
  {
    id: 3,
    title: "Hyperpure",
  },
  {
    id: 4,
    title: "Zomaland",
  },
]

const forRestaurants =[
  {
    id: 1,
    title: "Partner With Us",
  },
  {
    id: 2,
    title: "Apps For You",
  },
]

const forEnterprises =[
  {
    id: 1,
    title: "Zomato For Work",
  },
]

const learnMore =[
  {
    id: 1,
    title: "Privacy",
  },
  {
    id: 2,
    title: "Security",
  },
  {
    id: 3,
    title: "Terms",
  },
  {
    id: 4,
    title: "Sitemap",
  },
]

const FooterLinks = () => {
  return (
    <div className='about-links'>
      <div className='about-zomato options'>
        <h6 className='heading'>ABOUT ZOMATO</h6>
        {aboutZomato.map((about)=>(
          <p className='para'>{about.title}</p>
        ))}
      </div>
      <div className='zoma-verse options'>
        <h6 className='heading'>ZOMAVERSE</h6>
        {zomaVerse.map((verse)=>(
          <p className='para'>{verse.title}</p>
        ))}
      </div>
      <div className='inBetween'>
      <div className='restaurants options'>
        <h6 className='heading'>FOR RESTAURANTS</h6>
        {forRestaurants.map((value)=>(
          <p className='para'>{value.title}</p>
        ))}
      </div>
      <div className='for-enterprises options'>
        <h6 className='heading'>FOR ENTERPRISES</h6>
        {forEnterprises.map((value)=>(
          <p className='para'>{value.title}</p>
        ))}
      </div>
      </div>
      <div className='learn-more options'>
        <h6 className='heading'>LEARNMORE</h6>
        {learnMore.map((value)=>(
          <p className='para'>{value.title}</p>
        ))}
      </div>
    </div>
  )
}

export default FooterLinks