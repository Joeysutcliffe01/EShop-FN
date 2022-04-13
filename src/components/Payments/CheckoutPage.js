import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// export default function Payment() {

// inside the ("") you need to add your real stripe secret or the test secret that stripe will give you in their documentation.

export function CheckoutPage() {
  const promise = loadStripe("pk_test_Dt4ZBItXSZT1EzmOd8yCxonL");

  return (
    <div>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
