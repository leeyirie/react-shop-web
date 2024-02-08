// import React from 'react'
// import { useParams, useEffect } from 'react-router-dom';
// import axios from '../apis/axios';


// export default function ProductDetail({ products }) {
//   const { productId } = useParams();
//   const product = products.find(product => product.id.toString() === productId);
  
//   useEffect(() => {
//     const fetchProductDetail = async () => {
//       try {
//         const response = await axios.get(`/products/${productId}`);
//         // Set the product details state
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };
  
//     fetchProductDetail();
//   }, [productId]);


//   if (!product) {
//     return <p>Product not found!</p>;
//   }
  
//   return (
//     <div>
//       <h2>{product.title}</h2>
//       <img src={product.image} alt={product.title} />
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       {/* Other details */}
//     </div>
//   );
  
// }
