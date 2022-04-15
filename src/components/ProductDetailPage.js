import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import { AuthContext } from "../context/AuthProviderWrapper";
import "./styling/ProductDetails.css";
// import { Cart } from "./cartpage/Cart";
// import AddProduct from "./FormComponent/CreateForm";

export function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  // console.log("productId -->", productId);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // console.log(user, "this is the users data");

  const [foundProduct, setfoundProduct] = useState(null);

  useEffect(() => {
    // Get the project by id from the server
    axios.get(`${API_BASE_URL}/product/${productId}`).then((response) => {
      console.log(response.data);
      setfoundProduct(response.data.product);
    });
  }, [productId]);

  const handleAddToCart = async (event) => {
    console.log("clicked user---------------", user);

    let currentProduct = {
      title: foundProduct.title,
      imageUrl: foundProduct.imageUrl,
      description: foundProduct.description,
      price: foundProduct.price,
      productId: foundProduct.productId,
      owner: user._id,
    };

    let cartItem = await axios.post(`${API_BASE_URL}/cart`, currentProduct);

    console.log(cartItem, "cart item----------------");
  };

  // const handleAddToLikeList = (event) => {
  //   // setFilterState(event.target.value);
  // };

  console.log(productId);

  return (
    <div className="product__details-container">
      {foundProduct ? (
        <div className="product__details-container">
          <div className="product__details-img-container">
            <img src={foundProduct.imageUrl} alt={foundProduct.title} />
          </div>
          <div className="product__details-info-container">
            <h1>{foundProduct.title}</h1>
            <p className="product__details-info-price">
              $ {foundProduct.price}
            </p>
            <p>{foundProduct.description}</p>

            <button className="addToCart_btn btn" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
