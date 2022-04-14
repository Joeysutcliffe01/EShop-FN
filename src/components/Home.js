import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../consts";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviderWrapper";
import { Search } from "./Search";
import "./styling/Home.css";
import heroImg from "./img/hero-img.jpg";
// import AddProduct from "../components/FormComponent/CreateForm";

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
    <div className="main__container">
      {/*---------------------------------------------- Hero  */}
      {!user ? (
        <>
          <section className="hero__section">
            <div className="Hero__container">
              {/* <h1>Hero section goes here</h1> */}
              <img src={heroImg} alt="Hero image" />
              <div class="wrapper-homepage">
                    <div class="static-txt">WELCOME TO ESHOP</div>
                    <ul class="dynamic-txts">
                      <li><span>Discount Up to 50%</span></li>
                      <li><span>until June</span></li>
                      <li><span>Shop</span></li>
                      <li><span>NOW</span></li>
                    </ul>
                  </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/*---------------------------------------------- Filter btns  */}
          <section className="filter__btns__section">
            <div className="Hero__container">
            <div class="service">
		<div className="title">
			<h2>Our Services</h2>
		</div>

		<div className="box">
			<div className="card">
				<i className="fas fa-bars"></i>
				<h5>Web Development</h5>
				<div className="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p >
						<a className="button" href="/some/valid/uri">Read More</a>
					</p>
				</div>
			</div>

			<div className="card">
				<i className="far fa-user"></i>
				<h5>Web Development</h5>
				<div className="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p >
						<a className="button" href="/some/valid/uri">Read More</a>
					</p>
				</div>
			</div>

			<div className="card">
				<i className="far fa-bell"></i>
				<h5>Web Development</h5>
				<div className="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p >
						<a className="button" href="/some/valid/uri">Read More</a>
					</p>
				</div>
			</div>
		</div>
	</div>
            </div>
          </section>

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
                      <div className="product__card" key={product._id}>
                        <Link to={`/product/${product._id}`}>
                          <img src={product.imageUrl} alt={product.title} />
                          <h3>{product.title}</h3>
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
          <section className="Product__slider__section">
            <div className="Product__full__container">
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
                      <div className="product__card" key={product._id}>
                        <Link to={`/product/${product._id}`}>
                          <img src={product.imageUrl} alt={product.title} />
                          <h3>{product.title}</h3>
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
