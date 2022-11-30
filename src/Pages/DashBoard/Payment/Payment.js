import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheakoutForm from './CheakoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const {model,resale_price,location} = booking;
    console.log(booking);
    return (
        <div>
            
            <p className="text-xl">
                Please pay <strong>{resale_price}BDT</strong> for the purchase{" "}
                <strong>{model}</strong> at {location}
            </p>
            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheakoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;