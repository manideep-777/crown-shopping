import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FC } from 'react';

import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart, addItemToCart, removeItemToCart } from '../../store/cart/cart.action';
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, Arrow, Value, RemoveButton } from './checkout-item.styles';
import { CartItem } from '../../store/cart/cart.types';

interface CheckoutItemProps {
    cartItem: CartItem;
}

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
  
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems, cartItem));
  
    return (
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <Name> {name} </Name>
        <Quantity>
          <Arrow onClick={removeItemHandler}>
            &#10094;
          </Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemHandler}>
            &#10095;
          </Arrow>
        </Quantity>
        <Price> {quantity*price}</Price>
        <RemoveButton onClick={clearItemHandler}>
          &#10005;
        </RemoveButton>
      </CheckoutItemContainer>
    );
  };

export default CheckoutItem
