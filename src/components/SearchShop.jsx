import { useState } from "react";
import React from 'react';


const SearchShop = ({ shops, findShop }) => {

    const [searchValue, setSearchValue] = useState('');
    const [filteredShops, setFilteredShops] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const filterShopsByAddress = (inputAddress) => {
        return shops.filter(item => item.title.toLowerCase().includes(inputAddress));
    };

    const onChange = (e) => {
        setIsOpen(!!e.target.value.length);
        setSearchValue(e.target.value);
        const updatedShops = filterShopsByAddress(e.target.value);
        setFilteredShops(() => updatedShops);
    }

    const onClickOnShop = (shop) => {
        findShop(shop)
        setIsOpen(false);
        setSearchValue(shop.title)
    }
    return (
        <div className="shop__search">
            <div className="shop__description">
                <span>Nearest shop</span>
            </div>
            <div className="shop__wrapper">
                <input className="shop__input-search"
                    type="search"
                    placeholder="Your Adress"
                    value={searchValue}
                    onChange={onChange}
                />
                {isOpen && <ul>
                    {!!filteredShops.length && filteredShops.map((shop , idx) => {
                       return <li key={`search-element-${idx}`} onClick={() => onClickOnShop(shop)}>{shop?.title}</li>
                    })}
                </ul>}
            </div>
        </div>
    )
}

export default SearchShop