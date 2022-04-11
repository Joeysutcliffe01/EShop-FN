import axios from "axios";
import React, { useEffect, useState, Link, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import { AuthContext } from "../context/AuthProviderWrapper";

export function ProductDetailPage() {
  const { productId } = useParams();
  console.log("productId -->", productId);

  const { user, removeUserFromContext } = useContext(AuthContext);

  console.log(user, "this is the users data");

  const [foundProject, setFoundProject] = useState(null);

  useEffect(() => {
    // Get the project by id from the server
    axios.get(`${API_BASE_URL}/product/${productId}`).then((response) => {
      console.log(response.data);
      setFoundProject(response.data.product);
    });
  }, [productId]);

  const handleAddToCart = async (event) => {
    console.log("clicked user---------------", user);

    let currentProduct = {
      title: foundProject.title,
      imageUrl: foundProject.imageUrl,
      description: foundProject.description,
      price: foundProject.price,
      productId: foundProject.productId,
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
    <div>
      {foundProject ? (
        <div>
          <h1>{foundProject.title}</h1>
          <img src={foundProject.imageUrl} alt={foundProject.title} />
          <p>$ {foundProject.price}</p>
          <p>{foundProject.description}</p>

          <button className="addToCart_btn btn" onClick={handleAddToCart}>
            Add to cart
          </button>
          {/* <button className="kibe_btn btn" onClick={handleAddToLikeList}>
            Like me
          </button> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
