import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, Arrow, Value, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
  
    const { clearItemFromCart, addItemsToCart, removeItemFromCart } = useContext(CartContext);
  
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemsToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
  
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
