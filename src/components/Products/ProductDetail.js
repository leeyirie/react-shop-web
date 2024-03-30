import React, { useState, useEffect } from "react";
import axios from "../../apis/axios"; // Axios 설정 파일 임포트
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import Loading from "../Loading/Loading.js";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../redux/actions/wishlistActions.js";
import { addToCart } from "../../redux/actions/cartActions.js";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (productToAdd) => {
    // Retrieve the cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = existingCartItems.find(
      (item) => item.id === productToAdd.id
    );

    if (existingItem) {
      // If the item already exists, increment the quantity
      existingItem.quantity += 1;
    } else {
      // If it's a new item, add it with a quantity of 1
      productToAdd.quantity = 1;
      existingCartItems.push(productToAdd);
    }

    // Update local storage and Redux store
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    dispatch(addToCart(existingCartItems)); // Assuming addToCart action can handle an array of items
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (productId) {
        try {
          const response = await axios.get(`/products/${productId}`);
          setProduct(response.data);
          setLoading(false);

          // 로컬 스토리지에 상품 데이터 저장
          localStorage.setItem(
            `product_${productId}`,
            JSON.stringify(response.data)
          );
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <Loading />;    // 로딩 상태 혹은 로딩 컴포넌트를 표시할 수 있습니다.
  }

  const truncateTitle = (title, maxLength) => {
    if (title && title.length > maxLength) {
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
              className="cart-btn"
            >
              Add to cart
            </button>
            <button
              onClick={() => handleAddToWishlist(product)}
              className="wish-btn"
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
