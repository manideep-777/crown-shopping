import { useDispatch, useSelector } from 'react-redux';


import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import ShoppingSvg from '../../assets/shopping-bag.svg'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

export default function CartIcon() {
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const toggleIsCartOpen = () =>{
        dispatch(setIsCartOpen(!isCartOpen));
    }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon as='img' src={ShoppingSvg} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
