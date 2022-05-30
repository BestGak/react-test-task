import "./App.css"
import React, { useState } from 'react'
import CategoryShops from "./components/CategoryShops";
import CurrentlyLocation from "./components/CurrentlyLocation";
import SearchShop from "./components/SearchShop";
import Shops from "./components/Shops";
import Map from "./components/Map";
import { SHOPS } from "store/ShopState";



function App() {
  const [shops, setShops] = useState(SHOPS);
  const [category, setCategory] = useState('ALL');
  const [activeShop, setActiveShop] = useState(null);

  const filterShops = (category) => {
    activeShop && setActiveShop(null);
    setCategory(category)
    if (category === 'ALL') {
      setShops(SHOPS);
    } else {
      const listShops = SHOPS.filter(shop => shop.category === category);
      setShops(listShops);
    }
  }

  const findShop = (activeShop) => {
    const findedShop = SHOPS.find(shop => shop.title === activeShop.title);
    const findedLatLng = findedShop ? { lat: findedShop.lat, lng: findedShop.lng } : null;
    setActiveShop(findedLatLng);
    return
  }



  return (
    <div className="App">
      <div className="container">
        <h1>Our Shops</h1>
        <CategoryShops activeCategory={category} filter={filterShops} />
        <div className="location">
          <div className="location__left">
            <CurrentlyLocation />
            <Shops activeShop={activeShop} findShop={findShop} data={shops} />
          </div>
          <div className="location__right">
            <SearchShop findShop={findShop} shops={shops}/>
            <Map updatedCenter={activeShop} data={shops} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
