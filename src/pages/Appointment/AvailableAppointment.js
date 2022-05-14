import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    // console.log(treatment);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className="text-xl text-center text-secondary mb-20">Available Appointment on {format(date, 'PP')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    services.map(service => <Service key={service._id} setTreatment={setTreatment} service={service}></Service>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>
            }
        </div >
    );
};

export default AvailableAppointment;