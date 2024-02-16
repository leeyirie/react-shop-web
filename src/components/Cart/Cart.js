import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions'; //장바구니에서 제거하는 리덕스 액션.
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CartContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
  width: 100%;
  margin: 0 auto;
`;

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      <h2>Your Shopping Cart</h2>
      <CartContainer>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => handleRemoveFromCart(item.id)}
            />
          ))
        )}
        <CartTotal items={cartItems} />
      </CartContainer>
    </Container>
  );
};

export default Cart;
