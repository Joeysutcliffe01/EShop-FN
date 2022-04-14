import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "../styling/Checkout.css";

// export default function Payment() {

// inside the ("") you need to add your real stripe secret or the test secret that stripe will give you in their documentation.

export function CheckoutPage() {
  const promise = loadStripe("pk_test_Dt4ZBItXSZT1EzmOd8yCxonL");

  return (
    <div className="checkout__page-container">
      <Elements stripe={promise}>
        <h2>Please enter your card details</h2>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
