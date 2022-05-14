import React from 'react';
const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className='px-12'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-bold text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : <span className='text-red-4   00'>Try Another Date</span>}</p>
                    <p>
                        {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
                    </p>
                    <div className="card-actions justify-center">

                        <label
                            onClick={() => { setTreatment(service) }}
                            disabled={slots.length === 0}
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary  to-primary">book appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;