import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL } from "../../consts";
import { AuthContext } from "../../context/AuthProviderWrapper";

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

  // useEffect(() => {
  //   async function currentUserSession() {
  //     let currentUser = await axios.get(`${API_BASE_URL}/user`);

  //     if (currentUser === null) {
  //       navigate("/login");
  //     }
  //   }
  //   currentUserSession();
  // }, [currentUser]);

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
    <div>
      {" "}
      <h1> cart</h1>
      {cart &&
        cart.map((element, index) => {
          return (
            <table>
              <tr>
                <div key={element.title + index}>
                  <td>
                    <h3> {element.title}</h3>
                    <img
                      src={element.imageUrl}
                      alt={element.title}
                      style={{ width: "100px", height: "100" }}
                    />
                  </td>
                  <td>${element.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(element);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </div>
              </tr>
            </table>
          );
        })}
      {total && <h1>Total:{total}</h1>}
      <button className="btn_checkout">
        <a href="/checkout">checkout</a>
      </button>
    </div>
  );
}
