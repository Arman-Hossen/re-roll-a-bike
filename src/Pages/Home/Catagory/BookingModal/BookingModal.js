import React from 'react';

const BookingModal = () => {
    return (
        <div>
            <input type="checkbox" id="booking-bike" className="modal-toggle" />
            <div className="modal">
                {/* <div className="modal-box relative">
                    <label htmlFor="booking-bike" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name='name' type="text" value={user?.displayName} className="input w-full input-bordered" readOnly />
                    <input name='email' type="email" value={user?.email} className="input w-full input-bordered" readOnly />
                    <input name='model' type="text" value={name} className="input w-full input-bordered" readOnly/>
                    <input name='price' type="text" value={resalePrice} className="input w-full input-bordered" readOnly />
                    <input name='phone' type="text" placeholder="Your Phone Number" className="input w-full input-bordered" />
                    <input name='location' type="text" placeholder="meeting location" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-primary w-full ' type="submit" value="Submit" />
                    </form>
                </div> */}
            </div>
            
        </div>
    );
};

export default BookingModal;