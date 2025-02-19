import { useContext } from 'react'
import {ProductsContext} from '../../contexts/product.context'

import "./shop.style.scss"

import ProductCard from '../product-card/product-card.component'

export default function ShopComponenet() {
    const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => 
        <ProductCard key={product.id} product={product} />
      )}
    </div>
  )
}
