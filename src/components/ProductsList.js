import React, { useState, useEffect } from "react";
import axios from "../apis/axios"; // Axios 설정 파일 임포트
import "./ProductsList.css";
import { Link } from "react-router-dom";

export default function ProductsList({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = category ? `/products/category/${category}` : `/products`;
        const response = await axios.get(url); // API 엔드포인트 설정
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "..."; // Adds ellipsis after the maximum length
    }
    return title;
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link className="product-card2" to={`/product/${product.id}`}>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <h3 className="product-name">{truncateTitle(product.title, 22)}</h3>
          </Link>
          <div className="product-info">
            <p>Price: €{product.price}</p>
            <button className="cart-btn">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
