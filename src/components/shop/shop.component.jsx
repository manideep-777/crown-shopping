import React from 'react'
import shopData from "../../shop-data"

export default function ShopComponenet() {
  return (
    <div>
      {shopData.map(({id,name}) => 
        <div key={id}>
            <h1>{name}</h1>
        </div>
      )}
    </div>
  )
}
