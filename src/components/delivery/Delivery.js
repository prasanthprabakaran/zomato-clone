import React from 'react';
import DeliveryCollections from './deliveryCollections/DeliveryCollections';
import Filters from "../common/filters/Filter";
import { IoChevronDown } from 'react-icons/io5';
import { BsSliders,BsArrowDownUp } from 'react-icons/bs';
import TopBrands from './topBrands/TopBrands';



const deliveryFilters = [
  {
    id: 1,
    icon: <i className='absolute-center'><BsSliders/></i>,
    title: "Filters",
  },
  {
    id: 2,
    icon: <i className='absolute-center'><BsArrowDownUp/></i>,
    title: "Delivery Time"
  },
  {
    id:3,
    title: "Rating:4.0+"
  },
  {
    id:4,
    title:"Pure Veg"
  },
  {
    id:5,
    title:"Cuisines",
    icon: <i className='absolute-center'><IoChevronDown/></i>
  },
  {
    id:6,
    title:"More filters",
    icon: <i className='absolute-center'><IoChevronDown/></i>
  }
];

// const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands/>
    </div>
  );
};

export default Delivery;