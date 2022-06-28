import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './topbrands.css';

const topBrandsList = [
    {
        id: 1,
        title: "SS Hydrabad Biriyani",
        time: "28 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/868e99c35e35fc2bae1dccc465ed4c82_1625159864.png?output-format=webp",
    },
    {
        id: 2,
        title: "A2B - Adayar Ananda Bhavan",
        time: "34 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505652.png?output-format=webp",
    },
    {
        id: 3,
        title: "KFC",
        time: "33 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875219.png?output-format=webp",
    },
    {
        id: 4,
        title: "Sangeetha Veg Restaurant",
        time: "50 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f2ac1ad991aa8311242cbe675661040e_1568097187.png?output-format=webp",
    },
    {
        id: 5,
        title: "Hotel Saravana Bhavan",
        time: "41 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d5fc2e2a1c3add1c898b3f5c27e67631_1635754295.png?output-format=webp",
    },
    {
        id: 6,
        title: "Domino's Pizza",
        time: "30 min",
        cover:  "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252640.png?output-format=webp",
    },
    {
        id: 7,
        title: "Pizza Hut",
        time: "44 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0b29d747e59e3733bd194c73529d36d7_1629461595.png?output-format=webp",
    },
    {
        id: 8,
        title: "Subway",
        time: "47 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502636.png?output-format=webp",
    },
    {
        id: 9,
        title: "Meat And Eat",
        time: "34 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/83df3f23e4a36355a383828f73f09449_1625160012.png?output-format=webp",
    },
    {
        id: 10,
        title: "Ambur Star Briyani",
        time: "46 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1731bf308f200929a2657c5e922f65b2_1635754327.png?output-format=webp",
    }
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    silderToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
}

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {topBrandsList.map((brand) => {
                return (
                <div>
                    <div className='top-brands-cover'>
                        <img 
                        className='top-brands-image'
                        src={brand.cover}
                        alt={brand.title}
                        />
                    </div>
                    <div className='top-brands-title'>{brand.title}</div>
                    <div className='top-brands-time'>{brand.time}</div>
                </div>
                )
            })}
        </Slider>
    </div>
  )
}

export default TopBrands