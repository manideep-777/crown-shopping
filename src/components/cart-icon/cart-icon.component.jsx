import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import ShoppingSvg from '../../assets/shopping-bag.svg'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

export default function CartIcon() {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () =>{
        setIsCartOpen(!isCartOpen);
    }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon as='img' src={ShoppingSvg} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
