import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlistActions.js";
import { addToCart } from "../../redux/actions/cartActions.js"; // 장바구니에 추가하는 액션 임포트
import { useNavigate } from "react-router-dom"; // 브라우저 히스토리를 사용하여 페이지 이동

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const WishlistContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
  width: 100%;
  margin: 0 auto;

  .wishlist-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;

    img {
      width: 95px;
      height: 100px;
      margin-right: 20px;
    }

    .item-details {
      h4 {
        margin: 0;
        margin-bottom: 5px;
      }
      p {
        margin: 0;
        padding-bottom: 3px;
      }
    }

    button {
      background-color: #38434d;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 5px 10px;
      cursor: pointer;
      margin-right: 10px; // Add margin-right to separate buttons
    }

    button:hover {
      background-color: #fff;
      color: #38434d;
      border: 1px solid #38434d;
    }
  }
`;

const Wishlist = () => {
  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems || []
  );

  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동을 위한 함수를 가져옵니다.


  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`); // 이동하고자 하는 페이지의 경로를 반환합니다.
  };

  const handleAddToCart = (product) => { // 새로운 핸들러 추가: 장바구니에 상품 추가
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <WishlistContainer className="wishlist-container">
        <h2>Your Wishlist</h2>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty</p>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
            <img style={{cursor:"pointer"}} src={item.image} alt={item.title} onClick={() => handleImageClick(item.id)} />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)} // 장바구니에 상품 추가
                  className="cart-btn"
                >
                  Add to cart
                </button>
                <button onClick={() => handleRemoveFromWishlist(item.id)}>
                  Remove
                </button>
               
              </div>
            </div>
          ))
        )}
      </WishlistContainer>
    </Container>
  );
};

export default Wishlist;
