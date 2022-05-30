import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { CATEGORIES } from "store/ShopState";

const defalutCenter = {
  "lat": 50.44390990916265,
  "lng": 30.52823312666389
}

const defaultZoom = 11;

const Map = ({ data , updatedCenter }) => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCMg2XdV1g4KiPfcbUVgbhs_6PDe79IYco"
  })

  const [center , setCenter] = useState(defalutCenter);
  const [zoom , setZoom] = useState(defaultZoom);

  useEffect(() => {
    if(updatedCenter) {
      setCenter(updatedCenter);
      setZoom(15);
    } else {
      setCenter(defalutCenter);
      setZoom(defaultZoom);
    }
  } , [updatedCenter]);

  return isLoaded ? (
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerClassName="shop__map"
    >
      {data.map((shop ,idx) => {
        const iconPath = shop.category === CATEGORIES.RETAIL ? 'https://camellia.ua/public/site/img/retail-marker.png' : 'https://camellia.ua/public/site/img/opt-marker-hover.png'
        return (
          <Marker
            key={`element-marker-${idx}`}
            position={{ lat: shop.lat, lng: shop.lng }}
            icon={{
              url: iconPath,
              scaledSize: new window.google.maps.Size(25, 30)
            }

            }
          />
        )
      })}
    </GoogleMap>
  ) : <></>
}

export default Map


