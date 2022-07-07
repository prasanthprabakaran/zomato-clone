import React from "react";
import Collection from "../common/collection/Collection";
import Filter from "../common/filters/Filter";
import ExploreSection from "../common/exploreSection/ExploreSection";
import { dining } from "../../data/dining";
import { BsSliders } from "react-icons/bs";

const diningList = dining;
const diningFilters = [
  {
    id: 1,
    icon: <i className='absolute-center'><BsSliders/></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Outdoor Seating",
  },
  {
    id: 4,
    title: "Serves Alcohol",
  },
  {
    id: 5,
    title: "Open Now",
  },
];

const collectionList = [
  {
    id: 1,
    title: "Newly Opened",
    places: "16 Places",
    cover:
      "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015769.jpg",
  },
  {
    id: 2,
    title: "Trending This Week",
    places: "30 Places",
    cover:
      "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040541.png",
  },
  {
    id: 3,
    title: "Best of Chennai",
    places: "75 Places",
    cover:
      "https://b.zmtcdn.com/data/collections/6bbbaa1ccabe15209c45f5cfddfdef6a_1620291802.jpg",
  },
  {
    id: 4,
    title: "Best Bars & Pubs",
    places: "31 Places",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
  },
  {
    id: 5,
    title: "Brilliant Biriyanis",
    places: "24 Places",
    cover:
      "https://b.zmtcdn.com/data/collections/81dc179878a8d9e8b2ab03e4eaeab0df_1459434256.jpg",
  },
  {
    id: 6,
    title: "Best Pizza Places in Town",
    places: "27 Places",
    cover:
      "https://b.zmtcdn.com/data/collections/99384005af05393bad27980abd0ef3ee_1618993177.jpg",
  },
  {
    id: 7,
    title: "Flavours of the North",
    places: "23 Places",
    cover:
      "https://b.zmtcdn.com/data/collections/26ec96dfdd3e06f08fba4cce646e50e9_1618995559.jpg",
  },
  {
    id: 8,
    title: "Terrific Thalis",
    places: "9 Places",
    cover:
      "https://b.zmtcdn.com/data/collections/c577e0ca5b896facbba4ef70ffbba204_1618994185.jpg",
  },
  {},
];

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="filter-wrapper">
        <div className="filter-section">
          <Filter filterList={diningFilters} />
        </div>
      </div>
      <ExploreSection
        restaurants={diningList}
        collectionName="Dine-Out Restaurants in Anna Nagar"
      />
    </div>
  );
};

export default DiningOut;
