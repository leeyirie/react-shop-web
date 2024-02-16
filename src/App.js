import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import ProductsList from "./components/Products/ProductsList.js";
import ProductDetail from "./components/Products/ProductDetail.js";
import MainPage from "./Pages/MainPage";
import Cart from "./components/Cart/Cart.js";
import Wishlist from "./components/Wishlist/Wishlist.js";
import store from "./redux/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route
            path="/womens"
            element={<ProductsList category="women's clothing" />}
          />
          <Route
            path="/mens"
            element={<ProductsList category="men's clothing" />}
          />
          <Route
            path="/jewelery"
            element={<ProductsList category="jewelery" />}
          />
          <Route
            path="/electronics"
            element={<ProductsList category="electronics" />}
          />
          {/* 상품 상세 페이지 경로 추가 */}
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
