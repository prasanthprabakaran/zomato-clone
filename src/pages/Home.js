import React, { useState } from 'react'
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import TabOptions from '../components/common/tabOptions/TabOptions';
import NightLife from '../components/nightLife/NightLife';
import Delivery from '../components/delivery/Delivery';
import DiningOut from '../components/diningOut/DiningOut';


const Home = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer />
    </div>
  )
}

const getCorrectScreen = (value) => {
    switch(value) {
        case "Delivery":
             return <Delivery />;
        case "DiningOut":
            return <DiningOut />;
        case "Nightlife":
            return <NightLife />;
        default:
            return <Delivery />;
    }
}

export default Home