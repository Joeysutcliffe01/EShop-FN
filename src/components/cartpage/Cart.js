import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL } from "../../consts";
import { AuthContext } from "../../context/AuthProviderWrapper";
import "../styling/Cart.css";

export function Cart() {
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function getCart() {
      let allCart = await axios.get(`${API_BASE_URL}/allcart/${user._id}`);

      let filteredPrice = allCart.data.filterProduct;
      let subTotal = filteredPrice.reduce((acc, cur) => {
        return acc + Number(cur.price);
      }, 0);

      // console.log(subTotal, "sub price-----------++++++");
      setCart(allCart.data.filterProduct);
      setTotal(subTotal);
    }
    getCart();
  }, [user._id]);

  const handleDelete = async (itemToDelete) => {
    // console.log(itemToDelete);
    try {
      const response = await axios.delete(`${API_BASE_URL}`, {
        data: {
          id: itemToDelete._id,
        },
      });

      if (response.data.success) {
        alert(response.data.msg);
      }

      setCart(cart.filter((e) => itemToDelete._id !== e._id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="cart__container-outer">
      {" "}
      <h1>In Cart</h1>
      <div className="cart-container-inner">
        {cart &&
          cart.map((element, index) => {
            return (
              <div className="cart-cards-inner">
                <div className="cart-cards" key={element.title + index}>
                  <img
                    className="cart__img"
                    src={element.imageUrl}
                    alt={element.title}
                    style={{ width: "100px", height: "100" }}
                  />
                  <h3> {element.title}</h3>

                  <h3>${element.price}</h3>

                  <button
                    className="cart__delete-btn"
                    onClick={() => {
                      handleDelete(element);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      {total && <h1>Total:{total}</h1>}
      <button className="btn_checkout">
        <a className="btn_checkout" href="/checkout">
          checkout
        </a>
      </button>
    </div>
  );
}
