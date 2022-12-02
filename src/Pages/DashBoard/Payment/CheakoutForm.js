import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheakoutForm = ({ booking }) => {
  const { _id, email, resale_price, name, isSoled } = booking;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://re-roll-abike-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ resale_price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resale_price]);
  // const handleStatusUpdate = id => {

  //     console.log(id);
  //     fetch(`https://re-roll-abike-server.vercel.app/advertiseupdate/${id}`, {
  //         method: 'PATCH',
  //         headers: {
  //             'content-type': 'application/json'
  //         },
  //         body: JSON.stringify({advertise: 'false'})
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data);
  //         if(data.modifiedCount > 0) {
  //             toast.success("Successfully Adertise");

  //         }
  //     })
  // }
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      setSuccess("Congrats!, your payment completed");
      setTransactionId(paymentIntent.id);

      const payment = {
        resale_price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch("https://re-roll-abike-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent.id);
            toast.success("Payment Successful");
          }
        });

      setProcessing(false);
    }
  };
  // const handleDelete = id =>{

  //         fetch(`https://re-roll-abike-server.vercel.app/deleteproduct/${id}`, {
  //             method: 'DELETE'
  //         })
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log(data);
  //             if (data.deletedCount > 0){

  //                 toast.success("Successfully Delete");

  //             }
  //         })

  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          // disabled={!stripe || !clientSecret }
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-500">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheakoutForm;
