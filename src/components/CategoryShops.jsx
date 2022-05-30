import "../App.css";
import React from 'react'
import { CATEGORY_SHOPS_DATA } from "store/ShopState";



const CategoryShops = ({ filter, activeCategory }) => {



    return (

        <ul className="shop__ul">
            {CATEGORY_SHOPS_DATA.map((shop, idx) => {
                return (
                    <li 
                        key={`element-category-${idx}`}
                        className={shop.type ===  activeCategory ? 'shop__category active': "shop__category"} 
                        onClick={() => filter(shop.type)} 
                    >
                        {shop.title}
                    </li>
                )
            })}
            {/* <li className={isActive ? 'shop__category active': "shop__category"}  onClick={() => filter('ALL')} >
                <a  href="#">All Shops</a>
            </li>
            <li className={isActive ? 'shop__category active': "shop__category"}  onClick={() => filter('Wholesale')}>
                <a href="#">Wholesale and ratail shops</a>
            </li>
            <li className={isActive ? 'shop__category active': "shop__category"}  onClick={() => filter('Retail')}>
                <a href="#">Ratails Stores</a>
            </li> */}
        </ul>
    )
}

export default CategoryShops