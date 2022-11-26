import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';


const BookingModal = ({bikeModel, setbikeModel}) => {
    const { user } = useContext(AuthContext);
    const { model,resale_price} = bikeModel;
    
    const handleBooking = (event) =>{
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const model = form.model.value;
        const resale_price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(resale_price,model,phone,location);
        const bikeBooking = {
            name,
            email,
            model,
            resale_price,
            phone,
            location,
        }
        fetch('http://localhost:5000/bookingbike', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bikeBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                setbikeModel(null);
                toast.success("Your booking is confirmed");
            }
        })


    }

    

    return (
        <div>
            <input type="checkbox" id="booking-bike" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-bike" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name='name' type="text" value={user?.displayName} className="input w-full input-bordered" readOnly />
                    <input name='email' type="email" value={user?.email} className="input w-full input-bordered" readOnly />
                    <input name='model' type="text" value={model} className="input w-full input-bordered" readOnly/>
                    <input name='price' type="text" value={resale_price} className="input w-full input-bordered" readOnly />
                    <input name='phone' type="text" placeholder="Your Phone Number" className="input w-full input-bordered" />
                    <input name='location' type="text" placeholder="meeting location" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-primary w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default BookingModal;