import React, { useState, useEffect } from "react";
import axios from "../../apis/axios"; // Axios 설정 파일 임포트
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../redux/actions/wishlistActions.js'
import { addToCart } from "../../redux/actions/cartActions.js";



const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    };

    fetchProduct();
  }, [productId]); // productId가 바뀔 때마다 이 효과를 재실행합니다.

  if (!product) {
    return <p>Loading...</p>; // 로딩 상태 혹은 로딩 컴포넌트를 표시할 수 있습니다.
  }

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "..."; // Adds ellipsis after the maximum length
    }
    return title;
  };

  return (
    <div className="container">
      <div className="product-detail-container">
        <img src={product.image} alt={product.title} />
        <div className="description">
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>{truncateTitle(product.description, 150)}</p>
          <div>
            <button 
              onClick={() => handleAddToCart(product)}

            className="cart-btn">Add to cart</button>
            <button 
              onClick={() => handleAddToWishlist(product)}

            className="wish-btn">Add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
