import { useContext } from 'react'

import ShoppingIcon from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'

import "./cart-icon.styles.scss"

export default function CartIcon() {
    const { isCartOpen, setIsCartOpen, countItems } = useContext(CartContext);

    const toggleIsCartOpen = () =>{
        setIsCartOpen(!isCartOpen);
    }

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      {/* <ShoppingIcon className="shopping-icon" /> */}
      <img src={ShoppingIcon} className="shopping-icon" />
      <span className="item-count" >{countItems}</span>
    </div>
  )
}
