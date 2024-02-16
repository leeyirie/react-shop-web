import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addToWishlist } from "../../redux/actions/wishlistActions"; // 위시리스트에 추가하는 리덕스 액션.
import { useNavigate } from "react-router-dom"; // 브라우저 히스토리를 사용하여 페이지 이동
import { updateCartItemQuantity } from "../../redux/actions/cartActions"; // Import the updateCartItemQuantity action creator

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  img {
    width: 95px;
    height: 100px;
    margin-right: 20px;
  }

  input {
    width: 50px;
    margin-right: 10px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #38434d;
  }

  h4 {
    margin: 0;
  }

  .item-details {
    flex: 1; /* 제목과 내용이 다른 요소들을 밀어내도록 함 */
  }

  .item-details div {
    display: flex;
    flex-direction: row;
  }

  p {
    margin: 5px 0;
  }

  button {
    background-color: #fff;
    color: #000;
    border: none;
    padding: 5px 10px;
    border: 1px solid #38434d;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px; /* 추가된 버튼 사이에 간격을 줍니다. */
  }

  button:hover {
    background-color: #38434d;
    color: #fff;
  }

  .wish-btn {
    background-color: #38434d; /* 위시리스트에 추가하는 버튼의 배경색 설정 */
    color: #fff;
  }

  .wish-btn:hover {
    background-color: #fff; /* 위시리스트에 추가하는 버튼의 배경색 설정 */
    color: #38434d; /* 위시리스트에 추가하는 버튼의 색상 설정 */
    border: 1px solid #38434d;
  }
`;

const CartItem = ({ item, onRemove }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동을 위한 함수를 가져옵니다.
  const [quantity, setQuantity] = useState(1); // 상품 수량을 관리하기 위한 상태

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const handleImageClick = () => {
    navigate(`/product/${item.id}`); // 해당 상품의 디테일 페이지로 이동합니다.
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    // 수량 변경 액션 디스패치
    dispatch(updateCartItemQuantity(item.id, newQuantity));
  };

  return (
    <CartItemContainer>
      <img
        style={{ cursor: "pointer" }}
        src={item.image}
        alt={item.title}
        onClick={handleImageClick}
      />
      <div className="item-details">
        <h4>{item.title}</h4>
        <p>${item.price}</p>

        <div>
          <button
            onClick={() => handleAddToWishlist(item)} // 수정된 부분: item을 전달해야 합니다.
            className="wish-btn"
          >
            Add to wishlist
          </button>
          <button onClick={onRemove}>Remove</button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
