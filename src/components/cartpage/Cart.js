import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL } from "../../consts";
import { AuthContext } from "../../context/AuthProviderWrapper";

export function Cart() {
  const [cart, setCart] = useState(null);
  const { user } = useContext(AuthContext);
  
  // const [foundCart, setFoundCart] = useState(null);
useEffect(() =>{
  async function getCart(){
let allCart = await axios.get(`${API_BASE_URL}/allcart/${user._id}`)
  console.log(allCart.data)
  setCart(allCart.data.filterProduct)
  }
  getCart()
}, [user._id])
  
  console.log(user, "user id")

  const handleDelete = () => {
      axios.post(`${API_BASE_URL}/delete/`).then((response) => {
        console.log(response.data);
        // setFoundCart(response.data.product);
      });
    // console.log(response.data);
  };
  

  return (
    <div> <h1> cart</h1>
    {cart && cart.map((element,index) => {
      return (
        <div key={ element.title + index}> 
        <h3> {element.title}</h3>
        </div>
      )
    } ) } 
    <button onClick={handleDelete}> deleteeeeeeeeeeeeeeeeeee</button>
    </div>
  )
  
}
