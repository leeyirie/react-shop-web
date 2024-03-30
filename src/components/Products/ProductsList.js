import axios from "../../apis/axios"; // Axios 설정 파일 임포트
import "./ProductsList.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions.js";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading.js";

export default function ProductsList({ item, category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = category ? `/products/category/${category}` : `/products`;
        const response = await axios.get(url); // API 엔드포인트 설정
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const truncateTitle = (title, maxLength) => {
    if (title && title.length > maxLength) {
      return title.slice(0, maxLength) + "..."; // Adds ellipsis after the maximum length
    }
    return title;
  };

  const handleAddToCart = (product) => {
    // 상품이 이미 장바구니에 있는지 확인
    const existingItem = cartItems.find((item) => item.id === product.id);
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const updatedProduct = { ...product, quantity };

    // 장바구니 상태 업데이트
    dispatch(addToCart(updatedProduct));

    // 로컬 스토리지 업데이트
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? updatedProduct : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, updatedProduct];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };


  if(loading){
    return <Loading />
  }
  
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
            <p className="product-name">{truncateTitle(product.title, 20)}</p>
          </Link>
          <div className="product-info">
            <p>Price: €{product.price}</p>
            <button
              className="cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
