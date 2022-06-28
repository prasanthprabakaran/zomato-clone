import React from 'react';
import './deliverycollections.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem/DeliveryItem';

const deliveryItems =[
    {
        id: 1,
        title:"Dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    },
    {
        id: 2,
        title:"Idli",
        cover:"https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
    },
    {
        id: 3,
        title:"Vada",
        cover:"https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
    },
    {
        id: 4,
        title:"Sizzler",
        cover:"https://b.zmtcdn.com/data/dish_photos/70b/9f74def40591b43a46191c99e008b70b.jpg",
    },
    {
        id: 5,
        title:"Tea",
        cover:"https://b.zmtcdn.com/data/dish_images/743abc4d4dad9c3f8163084ae4b30bad1635165809.png",
    },
    {
        id: 6,
        title:"Home Style",
        cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
    },
    {
        id: 7,
        title:"Coffee",
        cover:"https://b.zmtcdn.com/data/dish_images/865258169afc30225d6747c54041e8951634966783.png",
    },
    {
        id: 8,
        title:"Pongal",
        cover:"https://b.zmtcdn.com/data/o2_assets/fee832f6c837b40004750fb3185da6791632716576.png",
    },
    {
        id: 9,
        title:"Chaat",
        cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
    },
    {
        id: 10,
        title:"Sandwich",
        cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
    },
    {
        id: 11,
        title:"Paratha",
        cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
    },
    {
        id: 12,
        title: "Uttapam",
        cover: "https://b.zmtcdn.com/data/o2_assets/7ab7679bbd422b52205ba598502674291632716549.png",
    }

];

const settings ={
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'>Inspiration for your first order</div>
            <Slider {...settings}>
                {deliveryItems.map((item) => {
                    return <DeliveryItem item={item}/>
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollections;