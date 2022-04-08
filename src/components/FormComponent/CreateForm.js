import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../consts";

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
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Image:</label>
        <textarea
          type="setImageUrl"
          name="image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
