// src/components/Wishlist/WishlistItem.js
import React from 'react';

const WishlistItem = ({ item, onRemove }) => {
  return (
    <div className="wishlist-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        <button onClick={onRemove}>Remove from wishlist</button>
      </div>
    </div>
  );
};

export default WishlistItem;
