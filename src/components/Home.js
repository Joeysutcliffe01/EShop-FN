import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../consts";

export function Home() {
  const [products, setProducts] = useState();
  const getAllProducts = () => {
    axios
      .get(`${API_BASE_URL}/products`)
      .then((response) => {
        setProducts(response.data.products);
       console.log(response.data.products)
      })
      .catch((error) => console.log(error));
  };

  console.log(products);

  // try{
  //   const {data} = await axios.get(`${API_BASE_URL}/products`)

  //   setProducts(data.products)
  // }catch{}

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
          <h1>The products should be under me</h1>

          {products ? products.map((product) => {

            return (
              <div className="ProjectCard card" key={product._id}>
                <h3>{product.Title}</h3>
              </div>
            );
          } ): <p> there is no f data</p>} 
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
