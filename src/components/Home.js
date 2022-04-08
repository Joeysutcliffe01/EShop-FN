import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import AddProduct from "../components/FormComponent/CreateForm";

export function Home() {
  const [products, setProducts] = useState();
  const getAllProducts = () => {
    axios
      .get(`${API_BASE_URL}/products`)
      .then((response) => {
        setProducts(response.data.products);
        // console.log(response.data.products);
      })
      .catch((error) => console.log(error));
  };

  // console.log(products);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="main__container">
      {/*---------------------------------------------- Hero  */}
      <section className="hero__section">
        <div className="Hero__container">
          <h1>Hero section goes here</h1>
        </div>
      </section>

      {/*---------------------------------------------- Filter btns  */}
      <section className="filter__btns__section">
        <div className="Hero__container">
          <h1>Filter btns section goes here</h1>
        </div>
      </section>

      {/*---------------------------------------------- Product sliders  */}
      <section className="Product__slider__section">
        <div className="Product__slider__container">
          {/* <h1>The products should be under me</h1> */}

          <AddProduct refreshProduct={getAllProducts} />

          {products ? (
            products.map((product) => {
              return (
                <div className="product__card" key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <img src={product.imageUrl} alt={product.title} />
                    <h3>{product.title}</h3>
                  </Link>
                </div>
              );
            })
          ) : (
            <p> there is no f data</p>
          )}
        </div>

        {/* <div className="Product__slider__container">
          <h1>Product slider sections goes here</h1>
        </div>

        <div className="Product__slider__container">
          <h1>Product slider sections goes here</h1>
        </div>

        <div className="Product__slider__container">
          <h1>Product slider sections goes here</h1>
        </div> */}
      </section>
    </div>
  );
}
