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

const handleDelete = async (cart) => {
  console.log(cart.title)
  // try{
  //     const response = await axios.delete(`${API_BASE_URL}/`, cart._id);
  //     if(response.data.success){
  //         alert(response.data.msg);
  //     }
  // }
  // catch(err){
  //     console.error(err);
  // }
}
  
  return (
    <div> <h1> cart</h1>
    {cart && cart.map((element,index) => {
      return (
        <table>
        <tr>  
        <div key={ element.title + index}> 
        <td><h3> {element.title}</h3>  
         <img src={element.imageUrl} alt={element.title} style={{width: "100px" , height: "100"}} /></td>
        <td>${element.price}</td>
        <td><button onClick={handleDelete}> deleteeeeeeeeeeeeeeeeeee</button></td>
        
        </div>
        </tr>
        
        </table>
      )
    } ) } 
    
    </div>
  )
  
}
