import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { selectCartItems } from '../../store/cart/cart.selector';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

export default function CartDropdown() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
        <CartItems>
          { cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}
