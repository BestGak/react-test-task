import React from 'react'

const Shops = ({ data , findShop , activeShop }) => {
    return (
        <>
        <ul className="shop__names">
            {data.map((shop,idx) => {
                const activeShopUniqId = (activeShop?.lat + activeShop?.lng) || 0;
                const shopUniqId = shop.lat + shop.lng
                const className = activeShopUniqId === shopUniqId ? "shop__item active" : "shop__item"
                return (
                    <li key={`element-shop-${idx}`} className={className} onClick={() => findShop(shop)}>
                        <span className="shop__name">{shop.title}</span>
                        <span className="shop__name-location">{shop.description}</span>
                        <span className="shop__map">Look at map →</span>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Shops;