import React from 'react';
import styled from 'styled-components';

const CartTotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const TotalText = styled.h4`
  margin: 0;
`;


const CartTotal = ({ items }) => {
    // Calculate total price considering quantity of each item
    const total = items.reduce((acc, item) => {
        if (item.quantity) { // Check if item.quantity is defined
            return acc + item.price * item.quantity;
        } else {
            return acc + item.price; // If item.quantity is not defined, return the accumulator unchanged
        }
    }, 0);
  
    return (
      <CartTotalContainer>
        <TotalText>Total: ${Number(total.toFixed(2))}</TotalText>
      </CartTotalContainer>
    );
  };

  
export default CartTotal;
