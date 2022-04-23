import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviderWrapper";
import { Search } from "./Search";
import "./styling/Home.css";

//The  (npm i react-icons) way
import { FaGrinStars, FaShoppingCart } from "react-icons/fa";

export function Home() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState();
  const [filterState, setFilterState] = useState("");

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
    <div className="main__container-home ">
      {/*---------------------------------------------- Hero  */}
      {!user ? (
        <>
          <section className="hero__section">
            <div className="Hero__container">
              {/* <h1>Hero section goes here</h1> */}
              {/* <img src={heroImg} alt="Hero image" /> */}
              <div className="wrapper-homepage">
                <div className="static-txt">WELCOME TO ESHOP</div>
                <div>
                  <ul className="dynamic-txts">
                    <li>
                      <span>Discount Up to 50%</span>
                    </li>
                    <li>
                      <span>until June</span>
                    </li>
                    <li>
                      <span>Shop</span>
                    </li>
                    <li>
                      <span>NOW</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/*---------------------------------------------- Filter btns  */}
          <section className="filter__btns__section">
            <div class="service">
              <div className="title">
                <h2>Our Services</h2>
              </div>

              <div className="box">
                <div className="card">
                  <i className="fas fa-bars"></i>
                  <h5>Deliverys</h5>
                  <div className="pra">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus doloremque corrupti minima ex laborum sequi?
                    </p>

                    <p>
                      <a className="button" href="/some/valid/uri">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <i className="far fa-user"></i>
                  <h5>Collections</h5>
                  <div className="pra">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus doloremque corrupti minima ex laborum sequi?
                    </p>

                    <p>
                      <a className="button" href="/some/valid/uri">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <i className="far fa-bell"></i>
                  <h5>Sell</h5>
                  <div className="pra">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus doloremque corrupti minima ex laborum sequi?.
                    </p>

                    <p>
                      <a className="button" href="/some/valid/uri">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/*---------------------------------------------- Product sliders  */}
          <Search filterState={filterState} setFilterState={setFilterState} />
          <section className="Product__slider__section">
            <div className="Product__slider__container">
              {/* <h1>The products should be under me</h1> */}

              {/* <AddProduct refreshProduct={getAllProducts} /> */}

              {products ? (
                products
                  .filter((product) => {
                    return product.title
                      .toLowerCase()
                      .trim()
                      .includes(filterState.toLowerCase().trim());
                  })
                  .map((product) => {
                    return (
                      <div className="product__card-one" key={product._id}>
                        <Link to={`/product/${product._id}`}>
                          <img src={product.imageUrl} alt={product.title} />
                          <h3>{product.title}</h3>
                          <h4 className="product__price">${product.price}</h4>
                        </Link>
                      </div>
                    );
                  })
              ) : (
                <p> there is no data</p>
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
          <h1>All products</h1>
          <section className="Product__slider__section_2">
            <div className="Product__full__container_2">
              {/* <h1>The products should be under me</h1> */}

              {/* <AddProduct refreshProduct={getAllProducts} /> */}

              {products ? (
                products.map((product) => {
                  return (
                    <div className="product__card" key={product._id}>
                      <Link to={`/product/${product._id}`}>
                        <img src={product.imageUrl} alt={product.title} />
                        <h3>{product.title}</h3>
                        <h4 className="product__price-two">${product.price}</h4>
                        <button className="product__addToCart-btn">
                          <FaShoppingCart />
                        </button>
                        <button className="product__addTolike-btn">
                          <FaGrinStars />
                        </button>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <p> there is no data</p>
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
        </>
      )}
    </div>
  );
}
