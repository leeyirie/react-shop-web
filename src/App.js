import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import MainPage from "./Pages/MainPage"


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
