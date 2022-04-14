import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../consts";
import "../styling/Profile.css";

function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      description,
      price,
      imageUrl,
    };

    axios
      .post(`${API_BASE_URL}/products`, requestBody)
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        setPrice("");
        setImageUrl("");

        props.refreshProduct();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddProject">
      <h3>Add a item to sell</h3>

      <form className="form container_col" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // placeholder="Enter the product name"
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          // placeholder="Enter the product description"
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          // placeholder="Enter the product price"
        />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          // placeholder="Enter the product image url"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
